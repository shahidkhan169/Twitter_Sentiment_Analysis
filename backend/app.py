from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})
model = joblib.load('logistic_regression_model.pkl')

# Function to map predictions to labels
def map_prediction(prediction):
    if prediction == 2:
        return "Positive"
    elif prediction == 1:
        return "Neutral"
    elif prediction == 0:
        return "Negative"
    else:
        return None

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    text = data.get('text', None)
    
    if text is None:
        return jsonify({'error': 'No text provided'}), 400

    # Perform prediction
    prediction = model.predict([text])
    mapped_prediction = map_prediction(prediction[0])

    # Return the result as JSON
    return jsonify({'text': text, 'predicted_sentiment': mapped_prediction})

if __name__ == '__main__':
    app.run(debug=True)
