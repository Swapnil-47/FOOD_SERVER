const express = require("express");
const router = express.Router();

router.get('/foodData', (req, res) => {
    try {
        console.log("Global Food Items:", global.food_items);
        console.log("Global Food Category:", global.foodCategory);

        const { food_items, foodCategory } = global;
        const responseData = [food_items, foodCategory];

        console.log("Response Data:", responseData);
        res.send(responseData);
    } catch (err) {
        console.log("Error:", err.message);
        res.status(500).send('Server Error :(');
    }
});

module.exports = router;