// In the file where you want to handle the '/foodData' route

const express = require("express");
const router = express.Router();
const { food_items, foodCategory } = require('../db'); // Replace 'previousFile' with the actual filename where these variables are exported

router.get('/foodData', (req, res) => {
    try {
        console.log(food_items);
        const responseData = [food_items, foodCategory];

        console.log(responseData);
        res.send(responseData);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error :(');
    }
});

module.exports = router;
