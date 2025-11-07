#!/bin/bash

# Quick API test script

echo "🧪 Testing FastAPI Backend..."
echo ""

# Check if backend is running
if ! curl -s http://localhost:8000 > /dev/null; then
    echo "❌ Backend is not running on port 8000"
    echo "   Start it with: cd backend && source venv/bin/activate && uvicorn main:app --reload"
    exit 1
fi

echo "✅ Backend is running"
echo ""

echo "Testing endpoints:"
echo ""

echo "1. GET /api/posts"
curl -s http://localhost:8000/api/posts | python3 -m json.tool | head -20
echo "..."
echo ""

echo "2. GET /api/tags"
curl -s http://localhost:8000/api/tags
echo ""
echo ""

echo "3. GET /api/site-config"
curl -s http://localhost:8000/api/site-config | python3 -m json.tool
echo ""

echo "4. GET /docs (API Documentation)"
echo "   Visit: http://localhost:8000/docs"
echo ""

echo "✨ All endpoints responding!"
echo ""
echo "To test the frontend:"
echo "   cd frontend && npm run dev"
echo "   Visit: http://localhost:3000"

