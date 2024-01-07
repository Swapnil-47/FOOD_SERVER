// db.js
const express = require('express');
const mongoose = require('mongoose');

const password = "fhioQ3bpMkUhrvju";
const MONGO_URL = `mongodb+srv://Mario44:${password}@cluster0.zasthev.mongodb.net/gofood_mern?retryWrites=true&w=majority`;

const router = express.Router(); // Create an Express router

let foodItems = [];
let foodCategory = [];

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
    console.log("Connected to DB :)");

    const fetchedDataCursor = connection.connection.db.collection("Sample").find({});
    foodItems = await fetchedDataCursor.toArray();
    console.log('Data fetched:', foodItems);

    const foodCategoryCursor = connection.connection.db.collection("Category").find({});
    foodCategory = await foodCategoryCursor.toArray();
    console.log('Categories fetched:', foodCategory);

  } catch (error) {
    console.error("Error connecting to MongoDB :( \n:", error);
  }
};

// Define a route for /api/foodData
router.get('/foodData', async (req, res) => {
  try {
    // Send the data fetched from the database as a response
    res.json({ foodItems, foodCategory });
  } catch (err) {
    console.log("Error:", err.message);
    res.status(500).send('Server Error :(');
  }
});

module.exports = { connectDB, router };
