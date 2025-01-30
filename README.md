# ML-Captcha

ML-Captcha is an innovative solution that eliminates the need for traditional CAPTCHA by utilizing machine learning models to perform identity verification in real-time. The project uses Convolutional Neural Networks (CNNs) for face detection and liveness detection to ensure that the user interacting with the application is a live human being.

This project is built with the following technologies:
- **React** for the frontend UI
- **TensorFlow.js** and **ONNX** for running machine learning models in the browser
- **Tailwind CSS** for fast, customizable UI design

## Key Features

- **Face Detection**: The first CNN model detects the face of the user to verify if it's a human.
- **Liveness Detection**: The second CNN model checks if the person is live, preventing spoofing attempts using photos or videos.
- **Privacy-Focused**: The entire process is done on the frontend (browser-side), meaning no user data is sent to the server. This ensures that all user interactions are private and secure.
- **Real-Time**: The system processes face detection and liveness verification in real-time using the power of machine learning models deployed directly in the browser.

## Tech Stack

- **React**: For creating the user interface and managing state
- **TensorFlow.js**: For running machine learning models directly in the browser
- **ONNX**: To convert models from Python TensorFlow to a format compatible with TensorFlow.js for frontend inference
- **Tailwind CSS**: For fast and responsive UI design

## How It Works

1. **Model Training**: The initial face detection and liveness detection models are trained in Python using TensorFlow.
2. **Model Conversion**: After training, the models are converted to ONNX format to be used in TensorFlow.js for inference in the browser.
3. **Frontend Integration**: React and TensorFlow.js are used to run the models in the user's browser in real-time, ensuring no data is sent to the backend.
4. **Privacy and Security**: Since the entire process runs client-side, no sensitive user data is ever transmitted or stored, ensuring user privacy is maintained.

## Installation

To run the project locally, follow these steps:

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)
- Python (for training models)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dhanushshruthi/ml-captcha
   cd ml-captcha
    ```
2. **Install the dependencies:**
```bash
npm install
```
3. **Run the application**
```bash
npm start
```