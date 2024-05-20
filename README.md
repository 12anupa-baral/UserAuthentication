# User Authentication System

This is a simple user authentication system built with Node.js, Express.js, and MongoDB. It provides endpoints for user authentication, signup, profile update, and profile deletion.

## Features

- User authentication: Allows users to authenticate by providing their email and password.
- Signup: Allows users to create a new account by providing their email and password.
- Profile Update: Allows users to update their profile information including name and password.
- Profile Deletion: Allows users to delete their profile from the system.

## Prerequisites

- Node.js installed on your machine.
- MongoDB installed and running locally or accessible via a cloud service.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd userauth
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

4. Set up your MongoDB connection:

   - Create a `.env` file in the root directory of the project.
   - Add your MongoDB connection URI to the `.env` file:

     ```env
     MONGODB_URI=<your-mongodb-uri>
     ```

5. Start the server:
   Backend
   ```bash
   cd backend
   node server.js
   ```
    Frontend
   ```bash
   npm start
   ```

## Usage

1. Make sure the server is running.
2. Use API testing tools like Postman to interact with the endpoints.
3. Use the following endpoints:

   - POST `/api/auth`: User authentication endpoint. Provide email and password in the request body.
   - POST `/signup`: User signup endpoint. Provide email and password in the request body.
   - PUT `/api/auth/update`: Profile update endpoint. Provide email, name, and password in the request body.
   - DELETE `/api/auth/delete`: Profile deletion endpoint. Provide email in the request body.

## Flow

1. Home page contains two buttons for login and signup.
2. Signup to register a user
3. Use the credentials used to signup to be logged in.
4. After logging in you will be redirected to welcome page.
5. Welcome page contains a button to view your profile.
6. Profile page contains a button to edit your profile as well as delete your profile.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the application.


Feel free to customize it further according to your project's specific details and requirements!