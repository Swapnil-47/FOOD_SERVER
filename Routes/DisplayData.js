const express = require("express");
const router = express.Router();
const { foodItems, foodCategory } = require('../db');

router.get('/foodData', async (req, res) => {
    try {
        console.log("Food Items:", foodItems);
        console.log("Food Category:", foodCategory);

        const responseData = [foodItems, foodCategory];

        console.log("Response Data:", responseData);
        res.send(responseData);
    } catch (err) {
        console.log("Error:", err.message);
        res.status(500).send('Server Error :(');
    }
});

module.exports = router;
