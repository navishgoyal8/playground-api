# API Playground (Backend Assessment) - Ontoborn Technologies LLC

This project is a simple **API Playground** that stores my **candidate profile information** in a database and exposes it via a REST API along with a minimal frontend UI to run queries.

## ✅ Tech Stack:
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
```

# ✅ API Endpoints
## ✅ Liveness
GET /health

Returns 200 response if API is running.

Example response:
```bash 
{
  "status": "ok",
  "message": "API is live ✅"
}
```

✅ Profile CRUD
✅ POST /profile (Protected - Optional)

Creates a new profile.

📌 Header required (optional feature):

x-api-key: navish-secret-key

✅ GET /profile

Fetches the stored candidate profile.

✅ PUT /profile/:id (Protected - Optional)

Updates a profile by MongoDB ID.

📌 Header required (optional feature):

x-api-key: navish-secret-key

✅ Query Endpoints
✅ GET /projects?skill=python

Returns projects filtered by keyword (title/description).

✅ Optional Pagination supported:

GET /projects?page=1&limit=2
GET /projects?skill=expense&page=1&limit=1

✅ GET /skills/top

Returns all skills and total count.

✅ GET /search?q=mern

Search across:

skills

projects

education

work

✅ Database Schema (MongoDB)

The profile contains the following fields:

name (string)

email (string, unique)

education (array of strings)

skills (array of strings)

projects (array of objects)

title (string)

description (string)

links (array of strings)

work (array of strings)

links (object)

github

linkedin

portfolio

📌 Note: email is unique, so creating a profile with the same email again will throw a duplicate key error.

✅ Local Setup Instructions
✅ 1) Clone Repo
git clone <YOUR_REPO_URL>
cd api-playground-mern

✅ 2) Backend Setup
Install dependencies
cd backend
npm install

Create .env file in backend/
MONGO_URI=mongodb://127.0.0.1:27017/api_playground
PORT=5000
API_KEY=navish-secret-key

Run backend
npm run dev


Backend runs on:
✅ http://localhost:5000

✅ 3) Seed Database

This inserts the candidate profile data into MongoDB.

cd backend
npm run seed

✅ 4) Frontend Setup
Install dependencies
cd frontend
npm install

Create .env file in frontend/
VITE_API_URL=http://localhost:5000

Run frontend
npm run dev


Frontend runs on:
✅ http://localhost:5173

✅ Sample cURL Requests
Health Check
curl http://localhost:5000/health

Get Profile
curl http://localhost:5000/profile

Filter Projects
curl "http://localhost:5000/projects?skill=expense"

Pagination Example
curl "http://localhost:5000/projects?page=1&limit=1"

Skills
curl http://localhost:5000/skills/top

Search
curl "http://localhost:5000/search?q=react"

✅ Postman Collection

A Postman collection is included:

📌 postman_collection.json

✅ Import Steps:

Open Postman

Click Import

Select postman_collection.json

Use variable:

BASE_URL = http://localhost:5000

API_KEY = navish-secret-key

✅ Optional Features Implemented

✅ Basic Auth for write operations

POST /profile and PUT /profile/:id require:

x-api-key: navish-secret-key


✅ Logging

Morgan middleware logs each request in backend terminal.

✅ Rate Limiting

Rate limit enabled to prevent abuse.

✅ Pagination

Added pagination support to /projects endpoint.

✅ Basic Tests

Jest + Supertest tests added for /health.

✅ How to Verify Optional Features
✅ Auth Check

Without API key → 401 Unauthorized

With API key → request succeeds

✅ Pagination Check
GET /projects?page=1&limit=1


Returns paginated response.

✅ Rate Limit Check

Sending too many requests returns 429 Too Many Requests.

✅ Tests
cd backend
npm test

✅ Known Limitations

This project assumes a single candidate profile for simplicity.

Search is keyword-based substring match (not full-text search).

UI is minimal as per assignment requirement.

✅ Author

Navish Goyal

Email: goyalnavish125@gmail.com

GitHub: <PASTE_GITHUB_LINK_HERE>

LinkedIn: <PASTE_LINKEDIN_LINK_HERE>
