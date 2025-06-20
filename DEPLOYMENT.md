# Deploying to Vercel

This guide will help you deploy your restaurant billing system backend to Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Vercel CLI**: Install globally with `npm i -g vercel`
3. **Git Repository**: Your code should be in a Git repository (GitHub, GitLab, etc.)

## Environment Variables Setup

Before deploying, you need to set up your environment variables in Vercel:

### Required Environment Variables:
- `CONNECTION_URL`: Your MongoDB connection string
- `JWT_SECRET`: Your JWT secret key
- `NODE_ENV`: Set to "production"

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub/GitLab**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel Dashboard**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your Git repository

3. **Configure Project Settings**
   - **Framework Preset**: Node.js
   - **Root Directory**: `./` (leave empty if backend is in root)
   - **Build Command**: `npm run build`
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`

4. **Add Environment Variables**
   - In the project settings, go to "Environment Variables"
   - Add the following:
     - `CONNECTION_URL`: Your MongoDB connection string
     - `JWT_SECRET`: Your JWT secret
     - `NODE_ENV`: production

5. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your application

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Set up environment variables when prompted

## Post-Deployment

### Verify Deployment
1. Check your deployment URL (provided by Vercel)
2. Test the health endpoint: `https://your-app.vercel.app/api/health`
3. Test your API endpoints

### Environment Variables in Production
Make sure to add your environment variables in the Vercel dashboard:
- Go to your project settings
- Navigate to "Environment Variables"
- Add all required variables

## Important Notes

### File Uploads
- The `/uploads` directory is served statically
- For production, consider using cloud storage (AWS S3, Cloudinary, etc.) instead of local file storage

### MongoDB Connection
- Ensure your MongoDB Atlas cluster allows connections from all IPs (0.0.0.0/0) or add Vercel's IP ranges
- Use environment variables for sensitive connection strings

### CORS Configuration
- Update your CORS settings to allow your frontend domain
- Consider using environment variables for allowed origins

## Troubleshooting

### Common Issues:

1. **Build Failures**
   - Check that all dependencies are in `package.json`
   - Ensure `vercel.json` is properly configured

2. **Database Connection Issues**
   - Verify MongoDB connection string
   - Check network access settings in MongoDB Atlas

3. **Environment Variables**
   - Ensure all required variables are set in Vercel dashboard
   - Check variable names match your code

4. **File Upload Issues**
   - Local file storage won't persist on Vercel
   - Consider migrating to cloud storage

## API Endpoints

Your deployed API will be available at:
- Base URL: `https://your-app.vercel.app`
- Health Check: `https://your-app.vercel.app/api/health`
- Auth: `https://your-app.vercel.app/api/auth`
- Menu: `https://your-app.vercel.app/api/menu`
- Categories: `https://your-app.vercel.app/api/categories`
- Orders: `https://your-app.vercel.app/api/orders`

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify environment variables
3. Test locally with production environment variables
4. Check MongoDB connection and permissions 