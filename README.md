# API Playground (Backend Assessment) - Ontoborn Technologies LLC

This project is a simple **API Playground** that stores my **candidate profile information** in a database and exposes it via a REST API along with a minimal frontend UI to run queries.

✅ Tech Stack:
- **Backend:** Node.js + Express.js
- **Database:** MongoDB (Mongoose)
- **Frontend:** React (Vite)
- **Tools:** Postman, Git/GitHub

---

## ✅ Live URLs (After Deployment)
- **Backend URL:** https://playground-api-n0w0.onrender.com
- **Frontend URL:** https://playground-api.netlify.app/
- **GitHub Repo:** https://github.com/navishgoyal8/playground-api 

---

## ✅ Resume Link
Resume: https://drive.google.com/file/d/14FO2tD6sdW55Jzj1o2NiLZrhTcZnznSm/view?usp=drive_link

---

# ✅ Project Features

## ✅ Backend & API
- ✅ **Create / Read / Update** candidate profile
- ✅ Query endpoints:
  - Filter projects by skill keyword
  - Get top skills
  - Search across profile fields
- ✅ **GET /health** endpoint for liveness

## ✅ Database
- ✅ Uses a proper database (**MongoDB**)
- ✅ Includes schema using Mongoose model
- ✅ Seeded with real candidate data (seed script)

## ✅ Frontend (Very Basic)
- ✅ Minimal UI to:
  - View profile
  - Search projects by keyword
  - Search across profile fields
- ✅ Calls hosted/local API (CORS enabled)

---

# ✅ Folder Structure

```bash
api-playground-mern/
  backend/
    src/
      config/
      controllers/
      models/
      routes/
      middleware/        # optional (auth)
      seed/
      tests/             # optional (tests)
      server.js
    .env
    package.json
  frontend/
    src/
    index.html
    .env
    package.json
README.md
postman_collection.json
