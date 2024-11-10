import React, { useState } from 'react';
import axios from 'axios';
import './Model.css'; // Ensure correct path for custom styles

const Model = () => {
  const [text, setText] = useState('');
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePredict = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', { text });
      setPrediction(response.data.predicted_sentiment);
    } catch (error) {
      console.error('Error making prediction:', error);
      setError('Error making prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="textbar">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text for sentiment analysis"
        className="text-input"
      />
      <button type="button" onClick={handlePredict} disabled={loading} className="predict-button">
        {loading ? 'Predicting...' : 'Predict'}
      </button>
      {error && <p className="error">{error}</p>}
      {prediction && <p className="prediction">{prediction}</p>} {/* Ensure content is conditionally rendered */}
    </div>
  );
};

export default Model;
