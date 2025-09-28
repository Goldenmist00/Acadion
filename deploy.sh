#!/bin/bash

# Acadion ERP Deployment Script
echo "🚀 Deploying Acadion ERP..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📝 Initializing Git repository..."
    git init
fi

# Add all files
echo "📦 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy Acadion ERP - $(date)"

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ No Git remote found. Please add your GitHub repository:"
    echo "   git remote add origin https://github.com/yourusername/acadion-erp.git"
    exit 1
fi

# Push to main branch
echo "🔄 Pushing to GitHub..."
git push origin main

echo "✅ Code pushed to GitHub!"
echo ""
echo "🌐 Next steps:"
echo "1. Go to https://vercel.com"
echo "2. Click 'New Project'"
echo "3. Import your GitHub repository"
echo "4. Deploy automatically!"
echo ""
echo "🎉 Your Acadion ERP will be live in minutes!"