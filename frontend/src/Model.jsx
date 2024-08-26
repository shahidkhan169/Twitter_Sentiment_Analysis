// src/TextBar.js
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
      const response = await axios.post('https://4dc1-35-231-26-0.ngrok-free.app/predict', { text });
      // Extract only the sentiment from the response
      setPrediction(response.data.sentiment);
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
      <button onClick={handlePredict} disabled={loading}>
        {loading ? 'Predicting...' : 'Predict'}
      </button>
      {error && <p className="error">{error}</p>}
      <p>{prediction}</p>
    </div>
  );
};

export default Model;
