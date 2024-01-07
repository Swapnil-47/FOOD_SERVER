// db.js
const mongoose = require("mongoose");

const password = "fhioQ3bpMkUhrvju";
const MONGO_URL = `mongodb+srv://Mario44:${password}@cluster0.zasthev.mongodb.net/gofood_mern?retryWrites=true&w=majority`;

let foodItems = [];
let foodCategory = [];

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
    console.log("Connected to DB :)");

    const fetchedDataCursor = await mongoose.connection.db.collection("Sample").find({});
    foodItems = await fetchedDataCursor.toArray();
    console.log('Data fetched:', foodItems);

    const foodCategoryCursor = await mongoose.connection.db.collection("Category").find({});
    foodCategory = await foodCategoryCursor.toArray();
    console.log('Categories fetched:', foodCategory);

  } catch (error) {
    console.error("Error connecting to MongoDB :( \n:", error);
  }
};

module.exports = { connectDB, foodItems, foodCategory };
