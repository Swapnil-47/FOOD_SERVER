// db.js
const mongoose = require("mongoose");

const password = "fhioQ3bpMkUhrvju";
const MONGO_URL = `mongodb+srv://Mario44:${password}@cluster0.zasthev.mongodb.net/gofood_mern?retryWrites=true&w=majority`;

let food_items = ""
let foodCategory =""
const mongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
    console.log("Connected to DB :)");

    const fetched_data_cursor = mongoose.connection.db.collection("Sample").find({});
    const data = await fetched_data_cursor.toArray();
    // console.log('Data fetched:', data);

    const foodCategory_cursor = mongoose.connection.db.collection("Category").find({});
    const catData = await foodCategory_cursor.toArray();
    // console.log('Categories fetched:', catData);

    // global.food_items = data;
    // global.foodCategory = catData;
     food_items = data;
     foodCategory = catData;

  } catch (error) {
    console.error("Error connecting to MongoDB :( \n:", error);
  }
};

// DisplayData.js
const express = require("express");
const router = express.Router();

router.get('/foodData', (req, res) => {
    try {
        // console.log("Global Food Items:", global.food_items);
        // console.log("Global Food Category:", global.foodCategory);

        // const { food_items, foodCategory } = global;
        const responseData = [food_items, foodCategory];

        console.log("Response Data:", responseData);
        res.send(responseData);
    } catch (err) {
        console.log("Error:", err.message);
        res.status(500).send('Server Error :(');
    }
});

module.exports = router;
module.exports = mongoDB;
