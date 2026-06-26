# 🚀 MERN Frontend

React frontend for a MERN stack application.

Containerized with **Docker** and served using **Nginx** for production deployment.

---

## 🛠️ Tech Stack

<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" />
</p>

---

## 📦 Run with Docker

Build image:

```bash
docker build -t mern-frontend .
```

Run container:

```bash
docker run -p 8080:80 mern-frontend
```

Open in browser:

```
http://localhost:8080
```

---

## 🏗️ Architecture

```
React + Nginx
      |
      v
 Backend API
      |
      v
 MongoDB Atlas
```

---

## 📁 Project Structure

```
mern-frontend/
│
├── public/
├── src/
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

---

## 🔗 Backend

Backend repository: https://github.com/ArtursLiepa/mern-backend
