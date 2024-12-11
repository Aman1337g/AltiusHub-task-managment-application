# Task Management Web Application - TaskRabbit

A simple task management application with user registration, authentication, profile image upload, and task management features (CRUD operations). Built using *React* for the frontend, *Node.js/Express* for the backend, and *MongoDB* for the database.

---

## Features

- **User Authentication**:
  - Register with a profile image upload.
  - Login with JWT-based authentication.

- **Task Management**:
  - Add, view, edit, and delete tasks.
  - Mark tasks as completed or pending.

- **User Profiles**:
  - Users can upload profile images during registration.

---

## Technologies Used

### Frontend:
- React
- React Router
- Axios

### Backend:
- Node.js
- Express.js
- Multer (for image uploads)
- Bcrypt (password hashing)
- JSON Web Tokens (JWT)

### Database:
- MongoDB (with Mongoose)

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app
```

### 2. Set Up the Backend

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend folder and configure:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npx nodemon server.js
   ```

### 3. Set Up the Frontend

1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

---

## Usage

1. Open the app in your browser at [http://localhost:3000](http://localhost:3000).
2. Register a new account with a profile image.
3. Log in and start managing your tasks.

---

## Project Structure

### Backend
```plaintext
backend/
├── models/          # Database schemas
├── routes/          # API routes
├── middleware/      # Authentication middleware
├── uploads/         # Image upload storage
├── server.js        # Entry point for the backend
```

### Frontend
```plaintext
frontend/src/
├── components/      # Reusable UI components
├── pages/           # Page components
├── api.js           # Axios configuration
├── App.js           # Main entry point
```

---

## Contributing

Feel free to fork this repository and contribute by submitting a pull request. Contributions are always welcome!

---

## Work in Progress 🚧

This project is currently under development. Below are some of the remaining tasks to complete the application:

### Backend
- Set up the MongoDB connection and handle potential connection errors.
- Finalize authentication middleware and secure protected routes.
- Integrate profile image upload functionality using Multer.

### Frontend
- Design and develop the dashboard to display user tasks.
- Complete the `TaskForm` component for adding and editing tasks.
- Style the login and registration pages for a better user experience.
- Add logout functionality to clear JWT tokens and redirect users.

### General
- Deploy both backend and frontend to appropriate cloud platforms.
- Integrate the frontend and backend, ensuring end-to-end functionality.

---

## Issues

If you encounter bugs or want to track development progress, check out the [Issues](https://github.com/Aman1337g/AltiusHub-task-managment-application/issues) section of this repository. Feel free to report bugs, suggest features, or contribute to open issues!

---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it as per the license terms.
