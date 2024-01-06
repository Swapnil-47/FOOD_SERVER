// app.js
const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
const DB = require('./db');
 const result = DB(); 
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  );
  next();
})

// Routes
const CreateUser = require("./Routes/CreateUser")
const DisplayData = require('./Routes/DisplayData')
const orderData = require('./Routes/OrderData')
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use(cors());
app.use('/api',CreateUser)
app.use('/api',DisplayData)
app.use('/api',orderData)
app.listen(port, () => {
  
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
