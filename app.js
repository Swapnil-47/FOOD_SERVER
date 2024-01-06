const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const DB = require('./db');

app.use(express.json());
app.use(cors());

// Routes
const CreateUser = require("./Routes/CreateUser");
const DisplayData = require('./Routes/DisplayData');
const orderData = require('./Routes/OrderData');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

DB().then(() => {
  // Start server after DB connection and data fetch
  app.use('/api', CreateUser);
  app.use('/api', DisplayData); // This line mounts the DisplayData route

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}).catch(error => {
  console.error('Failed to start the server:', error);
});

module.exports = app;
