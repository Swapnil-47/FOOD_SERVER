// DisplayData.js
const express = require("express");
const router = express.Router();

router.get('/foodData', (req, res) => {
    try {
        const responseData = [food_items, foodCategory];

        console.log("Response Data:", responseData);
        res.send(responseData);
    } catch (err) {
        console.log("Error:", err.message);
        res.status(500).send('Server Error :(');
    }
});

module.exports = router;
