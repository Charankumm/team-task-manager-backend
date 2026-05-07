# Team Task Manager

A full-stack MERN application for managing tasks and projects with authentication, dashboard analytics, and CRUD operations.

---

# 🚀 Live Demo

Frontend:
https://team-task-manager-backend-production-7edd.up.railway.app

Backend API:
https://spirited-nourishment-production-f00e.up.railway.app

---

# 📌 Features

- User Signup & Login
- JWT Authentication
- Protected Routes
- Dashboard Analytics
- Create Tasks
- Update Task Status
- Delete Tasks
- Responsive UI
- MongoDB Database Integration
- Railway Deployment

---

# 🛠️ Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- Bootstrap

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

## Deployment
- Railway
- MongoDB Atlas

---

# 📂 Project Structure

```bash
team-task-manager/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Charankumm/team-task-manager-backend.git
```

---

# Backend Setup

```bash
cd backend
npm install
```

## Create `.env`

```env
MONGO_URI=mongodb+srv://dbUser1:dbUser123@cluster0.jlevzdh.mongodb.net/?appName=Cluster0
JWT_SECRET=your_secret_key
PORT=5000
```

## Run Backend

```bash
npm start
```

---

# Frontend Setup

```bash
cd frontend
npm install
```

## Run Frontend

```bash
npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# 🔐 Authentication

Uses JWT token authentication.

Protected routes require:

```bash
Authorization: Bearer <token>
```

---

# 📊 Dashboard

Dashboard displays:
- Total Tasks
- To Do Tasks
- Completed Tasks

---

## Login Page

![Login Page](./screenshots/login.png)

## Dashboard

![Dashboard](./screenshots/dashboard.png)

## Create Task Page

![Create Task](./screenshots/create-task.png)

# 🌍 Deployment

## Frontend
Deployed on Railway.

## Backend
Deployed on Railway with MongoDB Atlas.

---

# 👨‍💻 Author

Charan Kumar

GitHub:
https://github.com/Charankumm

---

# ⭐ Future Improvements

- Task priorities
- Team collaboration
- File uploads
- Notifications
- Drag & Drop Kanban board
- Dark mode

---

# 📜 License

This project is open-source and available under the MIT License.
