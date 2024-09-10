# Customer Survey Application

This project is a **Customer Survey Application** where users can answer a series of questions, and their answers are stored in a database. The survey allows users to navigate between questions, and store answers with unique IDs for each question and customer session. The application is built with a **Node.js/Express** API and **MongoDB** for backend storage, while the frontend is built using **React**.

## Tech Stack

### Backend
- **Node.js**: Server-side environment for running the API.
- **Express.js**: Web framework for Node.js to handle routing and middleware.
- **MongoDB**: Database for storing survey questions and answers.
- **Mongoose**: ODM library for MongoDB.
- **REST API**: API for handling the creation of questions, submission of answers, and retrieval of survey data.

### Frontend
- **React.js**: For building the dynamic, interactive user interface.
- **Axios**: For making HTTP requests from the frontend to the backend API.

## Project Structure

The project is divided into two main folders:
- **Frontend**: Contains the React app responsible for displaying the survey and interacting with the API.
- **API**: Contains the Node.js server, Express routes, and MongoDB database connection.

Each folder has its own `node_modules` directory and dependencies.

## Setup Instructions

### Prerequisites

- **Node.js**: Make sure you have Node.js installed.
- **MongoDB**: Ensure that MongoDB is set up and running on your system, or you have access to a MongoDB Atlas cluster.
- **Git**: Version control system.

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/07ujjwal/Customer-Survey.git
    cd Customer-Survey
    ```

2. **API Setup**:
    Navigate to the `api` folder and install the dependencies:
    ```bash
    cd api
    npm install
    ```

3. **Frontend Setup**:
    In a new terminal window, navigate to the `frontend` folder and install the dependencies:
    ```bash
    cd frontend
    npm install
    ```

4. **Environment Setup**:
   - I have provided the MongoDB connection string and secret keys as part of the `.env` file in the project, so you don't need to set them up separately.
   - **Note**: These secret keys should not be exposed in a production environment.

### Running the Project

1. **Run the API**: Start the API server:
    ```bash
    cd api
    npm run start
    ```
    The API server should now be running at `http://localhost:4000`.

2. **Run the Frontend**: Start the React app:
    ```bash
    cd frontend
    npm start
    ```
    The React app should now be running at `http://localhost:5173`.

### API Endpoints

- **Create a Question**:
  - **Method**: POST
  - **URL**: `http://localhost:4000/api/questions`
  - **Description**: Creates a new survey question (supports both rating and text-based questions).
  
- **Get Questions**:
  - **Method**: GET
  - **URL**: `http://localhost:4000/api/questions`
  - **Description**: Retrieves all questions in the survey.

- **Submit Answers**:
  - **Method**: POST
  - **URL**: `http://localhost:4000/api/survey`
  - **Description**: Submits the user's answers to the survey questions.

## How It Works

1. The **User Registration** process begins when a customer first visits the survey. They need to enter their details (e.g., name, email) to start the survey.
2. After successful registration, the **Welcome Screen** appears. The customer can press the "Start" button to begin answering the survey questions.
3. The current question number (e.g., 1/5, 2/5, etc.) is displayed, and customers can navigate between questions using **Next** and **Prev** buttons.
4. Customers can **skip** questions or choose not to answer them.
5. After answering the questions, each response is stored in the **MongoDB** database, linked to the user's session.
6. Upon completion, the survey is submitted, and the user is redirected to the **Home** page.
7. The survey system is designed to handle new questions added later, ensuring flexibility and scalability without breaking the code.

