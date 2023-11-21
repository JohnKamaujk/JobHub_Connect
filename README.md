# JobHub Connect - Backend

This repository contains the backend code for the "JobHub Connect" project, developed using Express.js and MongoDB.

## Features

- **User Authentication:** Secure user authentication using JSON Web Tokens (JWT).
- **Job Listings Management:** API endpoints for creating, updating, and deleting job listings.
- **User Dashboard:** Handling user-specific data such as applied jobs and preferences.
- **MongoDB Integration:** Data storage and retrieval using MongoDB for scalability and flexibility.

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>

## Install dependencies:
    npm install

## Set up environment variables:
    Create a .env file based on the provided .env.example.
    Add MongoDB connection details and any other required variables.

## Start the server:
    npm start

## API Endpoints
    User Authentication:

    /api/user/signup (POST): Create a new user account.
    /api/user/login (POST): Authenticate and generate a JWT.
    Job Listings:

    /api/jobs (GET): Get all job listings.
    /api/jobs/:id (GET): Get details of a specific job.
    /api/jobs (POST): Create a new job listing.
    /api/jobs/:id (PUT): Update details of a specific job.
    /api/jobs/:id (DELETE): Delete a job listing.
    User Dashboard:

    /api/user/dashboard (GET): Get user-specific data (applied jobs, preferences).
    Environment Variables
    PORT: Port for the Express.js server.
    MONGODB_URI: MongoDB connection URI.

## Contributing
We welcome contributions! Please follow our contribution guidelines.

## License
This project is licensed under the MIT License.

