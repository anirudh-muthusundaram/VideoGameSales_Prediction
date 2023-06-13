const express = require('express');
const bodyParser = require('body-parser');
const { PythonShell } = require('python-shell');
const cors = require('cors');
const { exec } = require('child_process');
const { promisify } = require('util');
const fs = require('fs');
const readFileAsync = promisify(fs.readFile);

const app = express();

// Various authorizations to work with localhosts.
app.use(cors());
app.use(bodyParser.json());

// Route declared to run the server.
app.get('/', (req, res) => {
  res.send('Welcome to the prediction API!');
});

// Route declared to predict the inputs.
app.post('/predict', async (req, res) => {

    // path of joblib file is recorded.
    const joblibFilePath = './pipeline.joblib';
  
    // User Input is taken into the server.
    const { Publisher, Year_of_Release, Platform } = req.body;
  
    // Corrects the format of the Year to float
    const parsedYear = Year_of_Release !== undefined ? parseFloat(Year_of_Release) : undefined;
  
    // Command to run the script to run the model.
    // The script predicts the output.
    const pythonScript = `python server_script.py "${joblibFilePath}" "${Publisher}" "${parsedYear}" "${Platform}"`;
  
    // child_process.exec is used to run the script
    // input parameters are fed to the script.
    exec(pythonScript, async (error, stdout, stderr) => {
      if (error) {
        console.error(error);
        res.status(500).send('An error occurred while executing the Python script.');
      } else {
        try {
          // output.json is read.
          const outputFilePath = 'output.json';
          const data = await fs.promises.readFile(outputFilePath, 'utf8');
          const fileContents = JSON.parse(data);
  
          // records the predicted output to send back to the website.
          const predictedOutput = fileContents.predicted_output[0];
  
          // Returns the Result.
          res.send(predictedOutput.toString());
        } catch (err) {
          console.error(err);
          res.status(500).send('An error occurred while reading the file.');
        }
      }
    });
  });

// Starts Server.
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
