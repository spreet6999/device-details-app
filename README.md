# Device Details App

Welcome to the Device Details App repository! This repository contains a full-stack web application for managing device details.


### Lets clone this repository and get started!

## Backend

The backend of this application is developed using Python 3 and Flask, along with other libraries specified in the `requirements.txt` file.

### Getting Started with Backend

1. Navigate to the `server` directory.
2. It is recommended to use Python 3 and the latest version of Flask.
3. Create a virtual environment (venv) for this project:
   ```bash
   python3 -m venv venv     # Create a virtual environment
   source venv/bin/activate # Activate the virtual environment (for Unix based systems)
   ```
   For Windows users:
   ```bash
   venv\Scripts\activate     # Activate the virtual environment
   ```
4. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
5. Run the server:
   ```bash
   python3 app.py
   ```

## Frontend

The frontend of this application is developed using Create React App, React library, Axios for making API calls, TailwindCSS, and Material TailwindCSS for CSS components.


### Getting Started with Frontend

1. Navigate to the `client` directory.
2. Make sure you have Node.js version 20 installed on your system.
3. Configure the environment variables - To use the this project, you will need to set up some environment variables on your development machine
   - Create a **`.env`** file in the root of the project.
   - Add the following variables to the **`.env`** file, replacing the placeholder values with your own:
   ```jsx
     REACT_APP_BASE_URL="http://localhost:5000/api/v1"
     ```
4. Run the following commands:
   ```bash
   npm install # Install dependencies
   npm start   # Start the development server
   ```

## Database

The database for this application is mocked, and the actual database integration is yet to be implemented.

Feel free to explore the code and contribute to this project! If you have any questions or suggestions, please open an issue or reach out to the project contributors. Thank you for your interest in Device Details App! 🚀
