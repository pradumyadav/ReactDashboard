import express from "express";
import UserData from "../model/dataModel.js";
import fakeData from "../generateFakeData.js";
// import fakeData from "../generateFakeData.js"; // Adjust the path

const router = express.Router();

router.post("/postdata", async (req, res) => {
    try {
        const result = await UserData.insertMany(fakeData, { ordered: false });

        res.status(201).json({
            message: "Data successfully posted to database",
            insertedCount: result.length,
            collectedData: {
                totalUsers: fakeData.length,
                newUsersInserted: result.length
            }
        });
    } catch (error) {
        console.error("Error posting data:", error);

        res.status(500).json({
            message: "Error posting data to database",
            error: error.message,
            collectedData: {
                totalUsers: fakeData.length
            }
        });
    }
});


// GET endpoint to retrieve all data from the database
router.get("/getdata", async (req, res) => {
    try {
        const users = await UserData.find(); // Retrieve all users from the database

        res.status(200).json({
            message: "Data successfully retrieved from database",
            data: users
        });
    } catch (error) {
        console.error("Error retrieving data:", error);

        res.status(500).json({
            message: "Error retrieving data from database",
            error: error.message
        });
    }
});

export default router;
