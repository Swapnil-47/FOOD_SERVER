// db.js
const mongoose = require("mongoose");

const password = "fhioQ3bpMkUhrvju";
const MONGO_URL = `mongodb+srv://Mario44:${password}@cluster0.zasthev.mongodb.net/gofood_mern?retryWrites=true&w=majority`;

let food_items = [];
let foodCategory = [];

const mongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
    console.log("Connected to DB :)");

    const fetched_data_cursor = mongoose.connection.db.collection("Sample").find({});
    const data = await fetched_data_cursor.toArray();
    food_items = data;

    const foodCategory_cursor = mongoose.connection.db.collection("Category").find({});
    const catData = await foodCategory_cursor.toArray();
    foodCategory = catData;

  } catch (error) {
    console.error("Error connecting to MongoDB :( \n:", error);
  }
};

module.exports = { mongoDB, food_items, foodCategory };
