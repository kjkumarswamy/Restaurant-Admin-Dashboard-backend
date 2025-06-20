const mongoose = require('mongoose');

const mongooseOptions = {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

async function connectDB(MONGODB_URI) {
  try {
    await mongoose.connect(MONGODB_URI, mongooseOptions);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

module.exports = connectDB; 