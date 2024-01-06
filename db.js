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

    const fetched_data_cursor = mongoose.connection.db.collection("Sample").find({});
    const data = await fetched_data_cursor.toArray();
    console.log('Data fetched:', data);

    const foodCategory_cursor = mongoose.connection.db.collection("Category").find({});
    const catData = await foodCategory_cursor.toArray();
    console.log('Categories fetched:', catData);

    // Store the data in variables or process it further as needed
    // global.food_items = data;
    // global.foodCategory = catData;

  } catch (error) {
    console.error("Error connecting to MongoDB :( \n:", error);
  }
};

module.exports = mongoDB;
