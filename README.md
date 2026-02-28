🚀 Social Media App

A full-stack social media application built with:

Backend: Express.js

Database ORM: Prisma

Frontend: (Client folder)

Runtime: Node.js

📁 Project Structure
social-media/
│
├── client/ # Frontend
├── server/ # Backend (Express + Prisma)
└── README.md
⚙️ Backend Setup (Server)
1️⃣ Go to server folder
cd server
2️⃣ Install dependencies
npm install
3️⃣ Create .env file

Inside /server create:

.env

Example:

DATABASE_URL="your_database_url_here"
JWT_SECRET="your_secret_here"
PORT=8080
4️⃣ Generate Prisma Client
npx prisma generate
5️⃣ Run Migrations (if needed)
npx prisma migrate dev
6️⃣ Start Server
node index.js

Server will run at:

http://localhost:8080
💻 Frontend Setup (Client)
1️⃣ Go to client folder
cd client
2️⃣ Install dependencies (if React/Vite)
npm install
3️⃣ Start frontend
npm run dev

or

npm start
🌍 Deployment
Frontend

Deploy on:

Vercel

Backend

Deploy on:

Render

or Railway

🔐 Environment Variables
Variable Description
DATABASE_URL Database connection string
JWT_SECRET Secret key for authentication
PORT Server port
🛠 Tech Stack

Express

Prisma

JWT Authentication

REST API

Node.js

👨‍💻 Author

Shalyi
