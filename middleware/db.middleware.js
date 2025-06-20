const mongoose = require('mongoose');

const checkDBConnection = (req, res, next) => {
  // Skip database check for health endpoint
  if (req.path === '/api/health' || req.path === '/api/db-uri') {
    return next();
  }

  // Check if database is connected
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      success: false,
      message: 'Database connection not available',
      error: 'Service temporarily unavailable'
    });
  }

  next();
};

module.exports = checkDBConnection; 