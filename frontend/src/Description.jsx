import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom'; // Import Link for navigation

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const DatasetDescription = () => {
  // Example data distribution (replace with actual data)
  const sentimentData = {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [
      {
        label: 'Sentiment Distribution',
        data: [72250, 55213, 35510], 
        backgroundColor: [
          '#1E3A8A', // Dark Blue
          '#3B82F6', // Blue
          '#93C5FD', // Light Blue
        ],
        borderColor: [
          '#1E3A8A',
          '#3B82F6',
          '#93C5FD',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-6 bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Twitter Sentiment Analysis Dataset</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-left">Dataset Overview</h2>
        <p className="mt-4 text-left">
          This dataset contains tweets along with their corresponding sentiment labels. It's specifically designed for sentiment classification tasks, aiming to classify tweets as positive, negative, or neutral.
        </p>
      </section>
      
      <section className="mb-6 max-w-sm mx-auto">
        <h2 className="text-2xl font-semibold text-left">Sentiment Distribution</h2>
        {/* Make the bar chart smaller by adjusting the width */}
        <div className="mx-auto mt-4">
          <Bar data={sentimentData} />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-left">Source of the Dataset</h2>
        <p className="mt-4 text-left">
          The dataset is sourced from <a href="https://www.kaggle.com" className="text-blue-500 underline">Kaggle</a>. It was curated by [Dataset Creator] and is made available for research purposes.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-left">Dataset Composition</h2>
        <p className="mt-4 text-left">
          The dataset consists of tweets, categorized into three sentiments: Positive, Negative, and Neutral.
        </p>
        <ul className="mt-4 list-none text-left">
          <li>Number of Tweets: 10,000 (example)</li>
          <li>Columns: Tweet Text, Sentiment Label</li>
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-left">Data Fields</h2>
        <ul className="mt-4 list-none text-left">
          <li><strong>Tweet ID</strong>: A unique identifier for each tweet.</li>
          <li><strong>Tweet Text</strong>: The content of the tweet.</li>
          <li><strong>Sentiment</strong>: Label indicating Positive, Negative, or Neutral sentiment.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-left">Data Preprocessing</h2>
        <p className="mt-4 text-left">
          Preprocessing steps involve removing special characters, stopwords, and tokenizing the tweets for sentiment analysis.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-left">Data Limitations</h2>
        <p className="mt-4 text-left">
          The dataset primarily consists of English tweets, which may introduce language bias. Additionally, the data only covers a specific timeframe.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-left">License</h2>
        <p className="mt-4 text-left">
          The dataset is released under the [Attribution 4.0 International(cc)]. You can use it freely for non-commercial purposes.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-left">References</h2>
        <p className="mt-4 text-left">
          Kaggle Dataset: <a href="https://www.kaggle.com/datasets/saurabhshahane/twitter-sentiment-dataset" className="text-blue-500 underline">Link to Kaggle Dataset</a>.
        </p>
      </section>
      
      {/* Back to Main Page Section */}
      <section>
        <div className="mt-6 text-center">
          <Link to="/" className="text-blue-500 underline hover:text-blue-700">
            Back to Main Page
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DatasetDescription;
