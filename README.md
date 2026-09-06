# Member API Access System

A RESTful API system for member authentication, API token management, protected API access, product management, and API usage logging.

## Architecture

The project follows a layered architecture:

Route
  ↓
Middleware
  ↓
Controller
  ↓
Service
  ↓
Repository
  ↓
Prisma
  ↓
Database

## Project Structure

member-api-access-system/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── repositories/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
├── prisma/
├── tests/
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md


## Installation

npm install

## Environment

Create a `.env` file:

NODE_ENV=development
PORT=3000
DATABASE_URL=""
JWT_SECRET="change-this-secret-in-development"
JWT_EXPIRES_IN="1h"
CORS_ORIGIN="http://localhost:3000"

## Run Development Server

npm run dev


## Run Production Server

npm start

## Health Check

GET /health


Expected response:

{
  "success": true,
  "message": "Service is healthy",
  "data": {
    "status": "UP"
  }
}

## Development Roadmap

1. Foundation
2. Database + Prisma
3. Repository Layer
4. Authentication
5. Token Management
6. API Token Middleware
7. Member API
8. Product API
9. API Logging
10. Validation + Error Handling
11. Rate Limiting + Security
12. Testing
13. Seed + End-to-End Flow
14. Documentation and Final Cleanup