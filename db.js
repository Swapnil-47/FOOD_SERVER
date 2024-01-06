// db.js
const mongoose = require("mongoose");

const password = "fhioQ3bpMkUhrvju";
const MONGO_URL = `mongodb+srv://Mario44:${password}@cluster0.zasthev.mongodb.net/gofood_mern?retryWrites=true&w=majority`;

const connectToDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
    console.log("Connected to DB :)");

    // Fetch data from Sample collection using Mongoose queries and exec()
    const fetchedData = await mongoose.connection.db.collection("Sample").find({}).toArray();
    // console.log('Data fetched:', fetchedData);

    // Fetch data from Category collection using Mongoose queries and exec()
    const categoryData = await mongoose.connection.db.collection("Category").find({}).toArray();
    // console.log('Categories fetched:', categoryData);

    global.food_items = fetchedData;
    global.foodCategory = categoryData;
    return fetchedData
  } catch (error) {
    console.error("Error connecting to MongoDB :( \n:", error);
  }
};

module.exports = connectToDB;
