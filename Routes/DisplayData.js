const express = require("express");
const router = express.Router();

let food_items = []; // Initialize as empty arrays
let foodCategory = []; // Initialize as empty arrays

router.get('/foodData', async (req, res) => {
    try {
        // Wait until both food_items and foodCategory are populated with data
        while (food_items.length === 0 || foodCategory.length === 0) {
            await new Promise(resolve => setTimeout(resolve, 100)); // Wait for 100ms before checking again
        }

        const responseData = [food_items, foodCategory];
        console.log(responseData); // Log the response data for debugging

        res.status(200).json(responseData); // Send the response as JSON
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error :(');
    }
});

// Simulate data fetching from the database (Replace this with your actual database query)
// Assuming these arrays are populated asynchronously from a database or an API
async function fetchDataFromDatabase() {
    // Simulate data population after some delay
    await new Promise(resolve => setTimeout(resolve, 5000)); // Simulating a delay of 5 seconds (replace with actual DB query)
    food_items = [/* Your fetched food items array */];
    foodCategory = [/* Your fetched food categories array */];
}

// Call the function to fetch data when the server starts or at a specific endpoint
fetchDataFromDatabase();

module.exports = router;
