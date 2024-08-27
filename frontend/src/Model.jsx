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
      const response = await axios.post('https://twitter-api-v62m.onrender.com/predict', { text });
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
      />
      <button type="button" onClick={handlePredict} disabled={loading}>
        {loading ? 'Predicting...' : 'Predict'}
      </button>
      {error && <p className="error">{error}</p>}
      {prediction && <p>{prediction}</p>} {/* Ensure content is conditionally rendered */}
    </div>
  );
};

export default Model;
