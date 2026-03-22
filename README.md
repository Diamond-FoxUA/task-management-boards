# Task Management Boards

A fullstack task management application that allows users to create boards, manage tasks, and organize workflow using drag-and-drop functionality.

## 📦 Deployment
* In progress

- Frontend: Vercel / Netlify
- Backend: Render / Railway

## 🚀 Tech Stack

Frontend:
- React (Vite)
- TypeScript
- Redux Toolkit
- Tailwind CSS
- @dnd-kit

Backend:
- Express.js
- TypeScript
- MongoDB (Mongoose)

## ✨ Features

- Create, update, delete boards
- Each board has 3 columns: ToDo, In Progress, Done
- Add, edit, delete cards (title + description)
- Drag and drop cards between columns
- Reorder cards inside columns
- Anonymous usage (no authentication)

## 📁 Project Structure

/client — frontend (React)
/server — backend (Express)

## ⚙️ Getting Started

### 1. Clone repository

git clone https://github.com/Diamond-FoxUA/task-management-boards/tree/main

### 2. Install dependencies

cd client
npm install

cd ../server
npm install

### 3. Run backend

cd server
npm run dev

### 4. Run frontend

cd client
npm run dev

## 🐳 Docker (optional)

Run both frontend and backend using Docker:

docker-compose up --build

## 🤖 CI/CD

GitHub Actions runs:
- ESLint checks
- Project build

## 🧪 Future Improvements

- Dark mode
- Board sharing via link
- Activity history

## 📌 Notes

This project was built as a learning and portfolio project to demonstrate fullstack development skills, including state management, API design, and drag-and-drop functionality.