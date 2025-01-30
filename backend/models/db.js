// db.js
const mongoose = require('mongoose');

// Using async function to handle connection with try-catch
async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://ishita20jan:ishita12345@cluster0.ysumo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

connectDB();

module.exports = mongoose; // Export the mongoose instance
