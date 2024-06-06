# Expense Tracker App

## Overview

The Expense Tracker App helps individuals manage their personal finances. Users can track expenses, categorize spending, and visualize financial data to make better financial decisions.

## Technologies

-   **Frontend:** React.js, SASS, zustand (Global State Management), Chart.js, react-toastify
-   **Backend:** Node.js, Express.js, MongoDB

### Installation

#### Backend-Server

1. Create new folder for your project that will contain both of the backend and frontend code
2. Open Terminal in that newly created folder and clone the repository: `git clone https://github.com/ibarak2/expense-tracker-backend.git`
3. Navigate to the folder: `cd expense-tracker-backend`
4. Install project dependencies: `npm i`
5. Start the server: `npm start`

#### Frontend-Server

1. Head back to your general project folder and clone the repository: `git clone https://github.com/ibarak2/expense-tracker-frontend.git`
2. Navigate to the folder : `cd expense-tracker-frontend`
3. Install project dependencies: `npm install`
4. Start the server: `npm run dev`
5. Open `http://localhost:5173` in your browser and start.

## API Basic Endpoints

-   **BASE URL:** http://localhost:3030/api
-   **GET /expense:** Get all expenses based on logged-in user id.
-   **POST /expense:** Create new expense.
-   **PUT /expense/:expenseId:** Update existing expense.
-   **DELETE /expense/:expenseId:** Delete your expense.
