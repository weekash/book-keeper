# BOOK-KEEPER
### PEOPLEGROVE'S TECHNICAL ASSIGNMENT

This repository contains the code for a book review website developed as part of the PeopleGrove Full Stack Hiring Challenge.

## Features

### 1. Books Listing Page
- Displays a list of top-rated books.
- Utilizes server-side pagination for efficient data retrieval.

### 2. Book Details Page
- Provides detailed information about a selected book.
- Allows users to add reviews for the book.

## Technologies Used

### Frontend
- React
- TypeScript
- Material-UI

### Backend
- Express.js
- TypeScript
- PostgreSQL
- Sequelize (ORM)

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies using `npm install`.
3. Create a `.env` file and copy `.env.example` into it. 
3. Configure the PostgreSQL database connection in the `.env` file.
5. In config folder create a `config.json` file and copy `config.example.json` into it. This will be used to run the migrations using `sequelize-cli`.
4. Run the database migrations using `sequelize db:migrate:all`.
5. Run the seeders using `sequelize db:seed:run`
5. Start the backend server using `npm start`.

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies using `npm install`.
3. Create a `.env` file and copy `.env.example` into it. 
3. Configure the `VITE_BASE_API_URL` i.e backend api url in the `.env` file.
3. Start the frontend development server using `npm run dev`.

## Additional Notes

- Ensure that both the backend and frontend servers are running simultaneously for the full functionality of the application.
- The application utilizes TypeScript for improved type safety and maintainability.
- Material-UI is used for a sleek and modern user interface.
- Sequelize is used as the ORM for interaction with the PostgreSQL database.

### App hosted at : https://light-end-production.up.railway.app/