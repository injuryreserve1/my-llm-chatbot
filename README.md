# 🤖 AI Chat Application

**React-based chat interface for communicating with LLM**  
Full-stack application with FSD architecture and MongoDB storage

## 🛠 Tech Stack

- **Frontend**: React + Vite + FSD
- **Backend**: Express + MongoDB
- **Testing**: Jest

## 🚀 Quick Start

### Environment Setup

Create configuration files:

#### Frontend (root `.env`)

```
    npm i
    npm run dev
```

add `.env`:

```env
VITE_BACKEND_URL="http://localhost:3000/api/v1"
```

#### Backend

```
cd backend
npm i
npm run dev
```

add `.env`:

```
PORT=3000
DATABASE_URL="mongodb://localhost:27017/chat"
MODEL_NAME="deepseek-r1:1.5b"
```

#### langchain

make sure u have downloaded ollama and llm model on your pc
