# Activity Booking API

A RESTful API backend for a basic activity booking application, built with Node.js, Express, and MongoDB.

## Features
- User authentication (registration and login)
- JWT-based authentication
- Public activity listings
- Activity booking system
- User booking history

## Tech Stack
- **Backend:** Node.js with Express.js
- **Database:** MongoDB
- **Authentication:** JWT token-based auth
- **API Testing:** Postman Collection

## Project Structure
```plaintext
activity-booking-api/
├── config/
│   └── db.js               # Database connection
├── controllers/
│   ├── activityController.js  # Activity CRUD operations
│   ├── authController.js      # User authentication
│   └── bookingController.js   # Booking operations
├── middleware/
│   └── auth.js             # Authentication middleware
├── models/
│   ├── Activity.js         # Activity model
│   ├── Booking.js          # Booking model
│   └── User.js             # User model
├── routes/
│   ├── activityRoutes.js   # Activity routes
│   ├── authRoutes.js       # Auth routes
│   └── bookingRoutes.js    # Booking routes
├── .env                    # Environment variables
├── app.js                  # Express app setup
└── server.js               # Server entry point

## API Endpoints

### Authentication
- **POST /api/auth/register** - Register a new user
- **POST /api/auth/login** - Login and get JWT token

### Activities
- **GET /api/activities** - Get all activities (public)
- **POST /api/activities** - Create new activity (secured)

### Bookings
- **POST /api/bookings** - Book an activity (secured)
- **GET /api/bookings** - Get logged-in user's bookings (secured)

## Setup Instructions

1. Clone the repository
   ```bash
   git clone <repo-url>
   cd activity-booking-api

2. Install dependencies:
bash
npm install

3. Create a .env file with the following variables:

PORT=5000
MONGO_URI=mongodb://localhost:27017/activity-booking
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=30d

4. Start MongoDB service on your machine or use MongoDB Atlas.

5. Run the application:

Development mode:
bash
npx nodemon server

Production mode:
bash
npm start

##Testing with Postman
1. Import the provided Postman collection.
2. Use the collection to test all API endpoints.
3. The collection is configured to automatically save JWT tokens when logging in.

##Authentication Flow
1. Register a user (POST /api/auth/register)
2. Login with email/password (POST /api/auth/login)
3. Use the returned JWT token in the Authorization header for protected routes:

Authorization: Bearer <your_jwt_token>

###Data Models
##User
1. name (String, required)
2. email (String, required, unique)
3. phone (String, required)
4. password (String, required, min 6 chars, encrypted)

##createdAt (Date)
1. Activity
2. title (String, required)
3. description (String, required)
4. location (String, required)
5. dateTime (Date, required)
6. createdAt (Date)

##Booking
1. user (ObjectId, ref: 'User')
2. activity (ObjectId, ref: 'Activity')
3. bookedAt (Date)
