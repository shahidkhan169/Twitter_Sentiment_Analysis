import flask
from flask import Flask, request, jsonify
from flask_cors import CORS
from pyspark.sql import SparkSession
from pyspark.ml import PipelineModel
from pyspark.ml.tuning import CrossValidatorModel
from pyspark.sql.functions import udf
from pyspark.sql.types import StringType

# Create Flask app
app = Flask(__name__)

# Enable CORS for all origins (or specify the origins you want to allow)
CORS(app, resources={r"/*": {"origins": "https://twitter-sentiment-analysis-sigma.vercel.app"}})

# Initialize Spark session
spark = SparkSession.builder \
    .appName("SentimentAnalysisAPI") \
    .master("local[*]") \
    .getOrCreate()

# Load the saved pipeline and model from local directory
pipelineModel = PipelineModel.load("pipeline_folder")
cvModel = CrossValidatorModel.load("model_folder")

# Define the label mapping function
def map_prediction(prediction):
    if prediction == 2.0:
        return "Negative"
    elif prediction == 1.0:
        return "Neutral"
    elif prediction == 0.0:
        return "Positive"
    else:
        return "Unknown"

# Register the UDF
map_prediction_udf = udf(map_prediction, StringType())

@app.route('/')
def home():
    return "Hello, World!"

@app.route('/predict', methods=['POST'])
def predict_sentiment():
    data = request.json

    # Check if 'text' is present in the request
    if 'text' not in data:
        return jsonify({"error": "No text field provided"}), 400

    # Convert the JSON data to a Spark DataFrame
    new_data = spark.createDataFrame([(1, data['text'])], ["id", "clean_text"])

    # Transform the new data using the pipeline
    transformed_new_data = pipelineModel.transform(new_data)

    # Make predictions
    predictions = cvModel.transform(transformed_new_data)

    # Apply the UDF to add a human-readable label
    predictions_with_labels = predictions.withColumn("predicted_label", map_prediction_udf("prediction"))

    # Get the result
    result = predictions_with_labels.select("predicted_label").collect()[0]["predicted_label"]

    # Return the result as JSON
    return jsonify({"text": data['text'], "sentiment": result})

if __name__ == '__main__':
    # Run Flask app
    app.run(host='0.0.0.0', port=5000)
