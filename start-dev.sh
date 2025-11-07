#!/bin/bash

# Development startup script for WillCap.io (Next.js + FastAPI)

echo "🚀 Starting WillCap.io Development Environment..."

# Check if backend virtual environment exists
if [ ! -d "backend/venv" ]; then
    echo "📦 Creating Python virtual environment..."
    cd backend
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    cd ..
else
    echo "✅ Python virtual environment found"
fi

# Start FastAPI backend in background
echo "🐍 Starting FastAPI backend on port 8000..."
cd backend
source venv/bin/activate
uvicorn main:app --reload --port 8000 &
BACKEND_PID=$!
cd ..

# Wait for backend to start
sleep 3

# Start Next.js frontend
echo "⚛️  Starting Next.js frontend on port 3000..."
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

echo ""
echo "✨ Development servers are running!"
echo "   - Frontend: http://localhost:3000"
echo "   - Backend:  http://localhost:8000"
echo "   - API Docs: http://localhost:8000/docs"
echo ""
echo "Press Ctrl+C to stop both servers..."

# Trap Ctrl+C and kill both processes
trap "kill $BACKEND_PID $FRONTEND_PID; echo '\n👋 Servers stopped'; exit" INT

# Wait for both processes
wait

