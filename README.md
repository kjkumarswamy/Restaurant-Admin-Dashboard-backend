# Restaurant Billing System Backend

A Node.js backend API for a restaurant billing system with authentication, menu management, and order processing.

## Features

- User authentication with JWT
- Menu and category management
- Order processing
- File uploads for menu items
- MongoDB database integration
- RESTful API endpoints

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Multer** - File uploads
- **bcryptjs** - Password hashing

## Prerequisites

- Node.js (>= 18.0.0)
- npm (>= 8.0.0)
- MongoDB database

## Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd restaurant-admin/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   CONNECTION_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   PORT=5000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create a new category (protected)
- `PUT /api/categories/:id` - Update category (protected)
- `DELETE /api/categories/:id` - Delete category (protected)

### Menu
- `GET /api/menu` - Get all menu items
- `POST /api/menu` - Create a new menu item (protected)
- `PUT /api/menu/:id` - Update menu item (protected)
- `DELETE /api/menu/:id` - Delete menu item (protected)

### Orders
- `GET /api/orders` - Get all orders (protected)
- `POST /api/orders` - Create a new order
- `PUT /api/orders/:id` - Update order status (protected)

### Utility
- `GET /api/health` - Health check endpoint
- `GET /api/seed` - Seed database with sample data

## Railway Deployment

### Prerequisites
- Railway account
- MongoDB database (MongoDB Atlas recommended)
- Git repository

### Deployment Steps

1. **Prepare Your Repository**
   - Ensure all changes are committed to your Git repository
   - The repository should include all the files created for Railway deployment

2. **Connect to Railway**
   - Go to [Railway.app](https://railway.app)
   - Sign in with your GitHub account
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository

3. **Configure Environment Variables**
   In Railway dashboard, go to your project → Variables tab and add:
   ```
   CONNECTION_URL=your_mongodb_connection_string
   JWT_SECRET=your_secure_jwt_secret
   NODE_ENV=production
   ```

4. **Deploy**
   - Railway will automatically detect it's a Node.js project
   - It will install dependencies and start the application
   - The deployment will use the configuration from `railway.json`

5. **Get Your Domain**
   - Once deployed, Railway will provide a public URL
   - You can also configure a custom domain in the Settings tab

### Environment Variables for Railway

| Variable | Description | Required |
|----------|-------------|----------|
| `CONNECTION_URL` | MongoDB connection string | Yes |
| `JWT_SECRET` | Secret key for JWT tokens | Yes |
| `NODE_ENV` | Environment (production) | No |
| `PORT` | Port number (Railway sets this) | No |

### Health Check

Railway will automatically monitor your application using the health check endpoint:
- URL: `/api/health`
- Expected response: `{"status": "OK", "message": "Server is running"}`

### Troubleshooting

1. **Build Failures**
   - Check the build logs in Railway dashboard
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

2. **Database Connection Issues**
   - Verify your MongoDB connection string
   - Ensure your MongoDB cluster allows connections from Railway's IP ranges
   - Check if the database user has proper permissions

3. **Application Crashes**
   - Check the application logs in Railway dashboard
   - Verify all environment variables are set correctly
   - Ensure the application starts properly on port 0.0.0.0

## File Structure

```
backend/
├── config/
│   └── db.js              # Database configuration
├── controllers/
│   ├── auth.controller.js
│   ├── category.controller.js
│   ├── menu.controller.js
│   └── orderController.js
├── middleware/
│   ├── auth.middleware.js
│   └── db.middleware.js
├── models/
│   ├── category.model.js
│   ├── menu.model.js
│   ├── menuItem.model.js
│   ├── Order.js
│   └── user.model.js
├── routes/
│   ├── auth.routes.js
│   ├── category.routes.js
│   ├── menu.routes.js
│   └── order.js
├── uploads/               # File uploads directory
├── index.js              # Main application file
├── package.json
├── railway.json          # Railway configuration
├── Procfile             # Railway process file
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License. 