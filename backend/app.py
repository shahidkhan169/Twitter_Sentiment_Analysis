from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)

# Allow specific origins
CORS(app, resources={r"/*": {"origins": ["http://localhost:5173"]}})

model = joblib.load('logistic_regression_model.pkl')

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

    prediction = model.predict([text])
    mapped_prediction = map_prediction(prediction[0])

    return jsonify({'text': text, 'predicted_sentiment': mapped_prediction})

if __name__ == '__main__':
    app.run(debug=True)
