const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/crystaskill';
    const conn = await mongoose.connect(uri);
    console.log('MongoDB Connected: ' + conn.connection.host + '/' + conn.connection.name);
  } catch (error) {
    console.error('Server running without database. API calls will return errors.');
  }
};

module.exports = connectDB;
