#!/bin/bash

# Seeking Angels Foundation - Development Script
# This script kills any existing processes on port 3005 and starts the dev server

set -e  # Exit on any error

echo "🚀 Starting Seeking Angels Foundation Development Server"
echo "=================================================="

# Function to kill processes on port 3005
kill_port_3005() {
    echo "🔍 Checking for existing processes on port 3005..."
    
    # Find processes using port 3005
    PID=$(lsof -ti:3005 2>/dev/null || true)
    
    if [ -n "$PID" ]; then
        echo "⚠️  Found existing process(es) on port 3005: $PID"
        echo "🛑 Killing process(es)..."
        kill -9 $PID 2>/dev/null || true
        sleep 2
        echo "✅ Port 3005 cleared"
    else
        echo "✅ Port 3005 is available"
    fi
}

# Function to check if Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        echo "❌ Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        echo "❌ npm is not installed. Please install npm first."
        exit 1
    fi
    
    echo "✅ Node.js and npm are available"
}

# Function to install dependencies if needed
install_deps() {
    if [ ! -d "node_modules" ]; then
        echo "📦 Installing dependencies..."
        npm install
        echo "✅ Dependencies installed"
    else
        echo "✅ Dependencies already installed"
    fi
}

# Function to start development server
start_dev_server() {
    echo "🚀 Starting development server on port 3005..."
    echo "📱 Local: http://localhost:3005"
    echo "🌐 Network: http://$(ipconfig getifaddr en0 2>/dev/null || echo 'localhost'):3005"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo "=================================================="
    
    # Start the development server on port 3005
    PORT=3005 npm run dev
}

# Main execution
main() {
    check_node
    kill_port_3005
    install_deps
    start_dev_server
}

# Run main function
main