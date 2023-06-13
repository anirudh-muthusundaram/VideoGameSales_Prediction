Hello Everyone! I will be listing the steps to run the entire code

First before running the code packages a virtual environment needs to be created. (Preferably in the root directory itself)

•For MacOS and Linux: python -m venv venv
And for Windows: python -m venv venv


• If any problems arise use these steeps 

For MacOS and Linux: 
pip install virtualenv
cd /path/to/directory/
virtualenv env
     
And for Windows: 
pip install virtualenv
cd C:\path\to\directory\
virtualenv env 

• Find the requirements.txt in the root folder of phase 3 with necessary packages to the virtual environment created using requirements.txt

 You can install all the packages using the following command
        Pip installs ‘package name’ – Do this for all the packages


1. ACTIVATE THE VIRTUAL ENVIRONMENT by using the code: venv\Scripts\activate

2. move to server directory under the venv activated command prompt/terminal 

3. Run the server using the command node server.js
// please make sure that you run "pip install scikit-learn==1.1.3"

4. Make sure it's running in localhost:3000

5. Open the frontend directory in command prompt

6. type npm install

7. npm install any needed packages it prompts

8. type npm start 
//the prompt will ask in (y/n) basis on whether to run in different localhost since 3000 is in use.
//Press y to continue

9. open the localhost link in a web browser as displayed from the command prompt/ terminal

10. Navigate to predict page of the web

11. Add Values based on Publisher, Year and Platform

12. Click Predict and the Prediction Values will be displayed.
