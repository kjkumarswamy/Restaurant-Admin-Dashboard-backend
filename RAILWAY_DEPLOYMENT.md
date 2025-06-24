# Railway Deployment Guide

This guide will walk you through deploying your Restaurant Billing System backend to Railway.

## Prerequisites

1. **Railway Account**: Sign up at [railway.app](https://railway.app)
2. **GitHub Repository**: Your code should be in a GitHub repository
3. **MongoDB Database**: You'll need a MongoDB database (MongoDB Atlas recommended)

## Step 1: Prepare Your Repository

Ensure your repository contains all the necessary files for Railway deployment:

- ✅ `package.json` (with engines and scripts)
- ✅ `railway.json` (Railway configuration)
- ✅ `Procfile` (Process definition)
- ✅ `index.js` (Main application file)
- ✅ All your source code files

## Step 2: Set Up MongoDB Database

1. **MongoDB Atlas Setup** (Recommended):
   - Go to [MongoDB Atlas](https://cloud.mongodb.com)
   - Create a free cluster
   - Create a database user with read/write permissions
   - Get your connection string

2. **Connection String Format**:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
   ```

## Step 3: Deploy to Railway

1. **Connect to Railway**:
   - Go to [Railway.app](https://railway.app)
   - Sign in with your GitHub account
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

2. **Configure Environment Variables**:
   - In your Railway project dashboard, go to the "Variables" tab
   - Add the following environment variables:

   ```
   CONNECTION_URL=your_mongodb_connection_string_here
   JWT_SECRET=your_secure_jwt_secret_key_here
   NODE_ENV=production
   ```

3. **Deploy**:
   - Railway will automatically detect it's a Node.js project
   - It will install dependencies and start the application
   - The deployment process will use the configuration from `railway.json`

## Step 4: Verify Deployment

1. **Check Build Logs**:
   - Go to the "Deployments" tab in Railway
   - Check that the build completed successfully
   - Look for any error messages

2. **Test Health Endpoint**:
   - Your app will be available at the provided Railway URL
   - Test the health endpoint: `https://your-app.railway.app/api/health`
   - You should see: `{"status": "OK", "message": "Server is running"}`

3. **Test Database Connection**:
   - Visit: `https://your-app.railway.app/api/db-uri`
   - Check that the database is connected

## Step 5: Configure Custom Domain (Optional)

1. **Add Custom Domain**:
   - Go to your Railway project settings
   - Click "Domains"
   - Add your custom domain
   - Configure DNS settings as instructed

## Environment Variables Reference

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `CONNECTION_URL` | MongoDB connection string | Yes | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `JWT_SECRET` | Secret key for JWT tokens | Yes | `my-super-secret-key-123` |
| `NODE_ENV` | Environment mode | No | `production` |
| `PORT` | Port number | No | Railway sets this automatically |

## Troubleshooting

### Build Failures

**Problem**: Build fails during deployment
**Solutions**:
- Check build logs in Railway dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility (>= 18.0.0)
- Check for syntax errors in your code

### Database Connection Issues

**Problem**: Application can't connect to MongoDB
**Solutions**:
- Verify your MongoDB connection string
- Ensure MongoDB Atlas allows connections from Railway's IP ranges
- Check database user permissions
- Test connection string locally first

### Application Crashes

**Problem**: Application starts but crashes
**Solutions**:
- Check application logs in Railway dashboard
- Verify all required environment variables are set
- Ensure the application listens on `0.0.0.0:PORT`
- Check for unhandled promise rejections

### Health Check Failures

**Problem**: Railway health checks fail
**Solutions**:
- Ensure `/api/health` endpoint returns 200 status
- Check that the endpoint responds quickly (< 100ms)
- Verify the response format matches expectations

## Monitoring and Logs

1. **View Logs**:
   - Go to your Railway project
   - Click on your service
   - View real-time logs in the "Logs" tab

2. **Monitor Performance**:
   - Railway provides basic metrics
   - Monitor response times and error rates
   - Set up alerts for critical issues

## Scaling (Optional)

1. **Auto-scaling**:
   - Railway can auto-scale based on traffic
   - Configure in the "Settings" tab

2. **Manual Scaling**:
   - Adjust the number of instances manually
   - Consider costs when scaling

## Security Best Practices

1. **Environment Variables**:
   - Never commit sensitive data to Git
   - Use strong, unique JWT secrets
   - Rotate secrets regularly

2. **Database Security**:
   - Use strong database passwords
   - Restrict database access to Railway IPs
   - Enable MongoDB Atlas security features

3. **API Security**:
   - Implement rate limiting
   - Use HTTPS (Railway provides this)
   - Validate all inputs

## Cost Optimization

1. **Free Tier**:
   - Railway offers a free tier
   - Monitor usage to stay within limits

2. **Resource Management**:
   - Use appropriate instance sizes
   - Scale down during low traffic periods

## Support

- **Railway Documentation**: [docs.railway.app](https://docs.railway.app)
- **Railway Discord**: [discord.gg/railway](https://discord.gg/railway)
- **GitHub Issues**: Report bugs in your repository

## Next Steps

After successful deployment:

1. **Update Frontend**: Point your frontend to the new Railway URL
2. **Test All Endpoints**: Verify all API endpoints work correctly
3. **Set Up Monitoring**: Configure alerts and monitoring
4. **Backup Strategy**: Set up database backups
5. **CI/CD**: Consider setting up automatic deployments

Your application is now live on Railway! 🚀 