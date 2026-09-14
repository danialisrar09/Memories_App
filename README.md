📸 Memories App — Full-Stack MERN Application

A full-stack social media web application built using the **MERN Stack** (MongoDB, Express, React, Node.js) with **Redux** for global state management and **Material-UI** for responsive UI components.

The app allows users to create, view, share, and manage personal memories with titles, detailed messages, tags, and image uploads.



🚀 Features

- 📝 **Create Memories:** Add new posts with creator details, titles, descriptions, tags, and cover images.
- 🖼️ **Image Support:** Base64 encoded file uploads for seamless image previewing and storage.
- 🏷️ **Tagging System:** Organize memories using comma-separated tags.
- 🎨 **Modern UI/UX:** Styled using Material-UI for a clean, intuitive, and responsive design across desktop and mobile devices.
- ⚡ **State Management:** Centralized client-side state handling with React-Redux and Redux Thunk for asynchronous API requests.


🛠️ Tech Stack

1. Frontend
  React.js — Component-based UI framework
  Redux & Redux-Thunk — Global state management & async actions
  Material-UI (@material-ui/core) — Component styling & icons
  Axios — HTTP client for API communication
  react-file-base64 — Image convertor for file inputs

2. Backend
  Node.js & Express.js — RESTful API server architecture
  MongoDB Atlas — Cloud NoSQL Database
  Mongoose — Object Data Modeling (ODM) for MongoDB
  CORS — Cross-Origin Resource Sharing handling
  dotenv — Environment variable management



📂 Project Structure


Memories_App/

1.     client/                 # React Frontend

          src/

              actions/        # Redux Actions (Posts API calls)

              api/            # Axios API Endpoints

              components/     # UI Components (Form, Posts, Post)

              reducers/       # Redux Reducers

              App.js          # Main Component

              index.js        # Redux Store Provider Setup

          package.json

 2.     server/                 # Express Backend

          controllers/        # Request Logic (Posts Controller)
    
          models/             # Mongoose Schemas (PostMessage)

          routes/             # API Routes (/posts)
    
          index.js            # Express & Database Connection

          package.json
