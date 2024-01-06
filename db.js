const mongoose = require("mongoose");

const username = "Mario44";
const password = "fhioQ3bpMkUhrvju";
const clusterName = "ac-kfirdtb";
const databaseName = "gofood_mern";

const MONGO_URL = `mongodb://${username}:${password}@${clusterName}-shard-00-00.zasthev.mongodb.net:27017,
                   ${clusterName}-shard-00-01.zasthev.mongodb.net:27017,
                   ${clusterName}-shard-00-02.zasthev.mongodb.net:27017/${databaseName}?ssl=true&replicaSet=atlas-12xiu2-shard-0&authSource=admin&retryWrites=true&w=majority`;

const mongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
    console.log("Connected to DB :)");

    const fetchedData = await mongoose.connection.db.collection("Sample").find({}).toArray();
    console.log('Data fetched:', fetchedData);

    const categoryData = await mongoose.connection.db.collection("Category").find({}).toArray();
    console.log('Categories fetched:', categoryData);

    // Store the data in variables or process it further as needed
    // global.food_items = fetchedData;
    // global.foodCategory = categoryData;

  } catch (error) {
    console.error("Error connecting to MongoDB :( \n:", error);
  }
};

module.exports = mongoDB;
