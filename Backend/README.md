# Node.js Chat App with Real-Time Messaging

## Features

Real-time chat functionality powered by Socket.IO
Secure user authentication with JWT
User registration and login
Password encryption using bcryptjs
Data persistence using MongoDB and Mongoose

## Technologies Used

- Node.js
- Express
- Socket.IO
- Mongoose
- bcryptjs
- jsonwebtoken

## Setup

1. Clone this repository
2. Install dependencies: `npm install`
3. Create a .env file and add the following environment variables:
4. MONGODB_URI: `Your MongoDB connection URI`
5. JWT_SECRET: `A secret string for JWT signing`
6. PORT: `The port to connect to`
7. NODE_DEV: Set it to `development` or `production`
8. Start the server: `npm start`
9. FRONTEND_URL=`http://localhost:5173`

## API Endpoints

- /api/auth/signup (POST): Register a new user
- /api/auth/login (POST): Login a user and obtain a JWT
- /api/auth/logout (POST): Logout and clear jwt
- /api/users/ (GET): Access all users (requires authentication)
- /api/messages/send/:receiverId (POST): Send a message (requires authentication)
- /api/messages/:receiverId (POST): Get all messages (requires authentication)

## Usage

Register a new user or login with an existing account.
Send and receive messages in real-time with other connected users.

