// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/TacticalTilesDB');

// module.exports = mongoose.connection;

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/TacticalTilesDB';

    console.log('Attempting to connect to MongoDB Atlas with URI:', uri); // Log the URI for debugging

    await mongoose.connect(uri);

    console.log('MongoDB connected successfully');

  } catch (err) {

    console.error('MongoDB connection error:', err.message);

    process.exit(1); // Exit the process with failure
  }
};

// Call the connectDB function when your application starts
connectDB();

module.exports = mongoose.connection;

