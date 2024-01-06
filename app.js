const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const { connectToDB, router } = require('./db');

app.use(express.json());
app.use(cors());

// Routes
const CreateUser = require("./Routes/CreateUser");
const orderData = require('./Routes/OrderData');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

connectToDB()
  .then(() => {
    app.use('/api', CreateUser);
    app.use('/api', router); // Use the router from db.js for /foodData route
    app.use('/api', orderData);

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch(error => {
    console.error('Failed to start the server:', error);
  });

module.exports = app;
