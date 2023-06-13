import React, { useState } from 'react';
import axios from 'axios';

// This function decalres the set variables.
// It take input from the User.
// Sends the Input variable to the server.
function Predict() {
  const [Publisher, setPublisher] = useState('');
  const [Year, setYear] = useState('');
  const [Platform, setPlatform] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleInputChange1 = (e) => {
    setPublisher(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setYear(e.target.value);
  };

  const handleInputChange3 = (e) => {
    setPlatform(e.target.value);
  };

  const handlePredict = () => {
    const inputData = {
      Publisher: Publisher,
      Year_of_Release: parseFloat(Year),
      Platform: Platform
    };

    //url to send the data is assigned.
    axios.post('http://localhost:3000/predict', inputData)
      .then((response) => {
        const predictedOutput = response.data;
        setPrediction(predictedOutput);
      })
      .catch((error) => {
        console.error(error);
      });
  };
//Takes user input of the variables.
//Returns the value obtained from the server.
  return (
    <div className="container">
      <label className="input-label">
        <span className="label-text">Publisher:</span>
        <input type="text" value={Publisher} onChange={handleInputChange1} />
      </label>
      <br />
      <label className="input-label">
        <span className="label-text">Year of R:</span>
        <input type="text" value={Year} onChange={handleInputChange2} />
      </label>
      <br />
      <label className="input-label">
        <span className="label-text">Platform:</span>
        <input type="text" value={Platform} onChange={handleInputChange3} />
      </label>
      <br />
      <button className="predict-button" onClick={handlePredict}>Predict</button>
      <br />
      <div className="prediction-container">
        <span className="prediction-label">Prediction:</span> <span className="prediction-text">{prediction} Million Copies</span>
      </div>
    </div>
  );
}

export default Predict;

