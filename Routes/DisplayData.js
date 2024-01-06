const express = require("express");
const router = express.Router();

// Assuming food_items and foodCategory are populated with actual data
const food_items = [/* Your food items array */];
const foodCategory = [/* Your food categories array */];

router.get('/foodData', (req, res) => {
    try {
        // Simulate a delay of 1 second (1000 milliseconds)
        setTimeout(() => {
            // Ensure food_items and foodCategory are populated with data
            const responseData = [food_items, foodCategory];
            console.log(responseData); // Log the response data for debugging

            res.status(200).json(responseData); // Send the response as JSON
        }, 1000); // Adjust the delay time as needed
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error :(');
    }
});

module.exports = router;
