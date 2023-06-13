#Importing all the necessary dictionaries.
import sys
import pandas as pd
from joblib import load
import numpy as np
from matplotlib import pyplot as plt
from sklearn.preprocessing import LabelEncoder, OneHotEncoder
from sklearn import preprocessing
import scipy.stats as stats
label_encoder = preprocessing.LabelEncoder()
import pickle
import os
import seaborn as sns
import json


# joblib file path is recorded to load the model pipeline.
# Input given by the user are mapped to each variable 
joblib_file_path = './pipeline.joblib' 
Publisher = sys.argv[2]
Year = sys.argv[3]
Platform = sys.argv[4]

# joblib file loaded
# Model is imported from the loaded file.
pipeline = load(joblib_file_path)

# DataFrame is created to input and compute all the features.
input_data = pd.DataFrame({
    'Publisher': [Publisher],
    'Year_of_Release': [float(Year)] if Year != 'undefined' else [0.0],
    'Platform': [Platform]
})

# Output is predicted for the input.
predicted_output = pipeline.predict(input_data)

# Output is round off upto 6 decimal point.
round_off = np.round(predicted_output, 6)

# JSON string conversion of the Output
json_output = round_off.tolist()

# Dictionary Creation of the Output
output_dict = {
    'predicted_output': json_output
}

# Path declared for the JSON file
json_file_path = 'output.json'

# Dictionary saved as a JSON file
with open(json_file_path, 'w') as json_file:
    json.dump(output_dict, json_file)

# Output printed as a JSON string
print(json_output)
