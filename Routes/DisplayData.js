const express = require("express");
const router = express.Router();

router.get('/foodData', (req, res) => {
    try {
        console.log(global.food_items)
        const { food_items, foodCategory } = global;
        const responseData = [food_items,foodCategory]

        console.log(responseData);
        res.send(responseData);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error :(');
    }
});

module.exports = router;


