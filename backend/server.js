const express = require("express");
const collection = require("./mongo"); 
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Root endpoint
app.get("/", cors(), (req, res) => {
    res.send("Server is running");
});

// User authentication endpoint
app.post("/", async (req, res) => {
    const { email, password } = req.body;

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            res.status(200).json("exist");
        } else {
            res.status(200).json("notexist");
        }
    } catch (e) {
        res.status(500).json("fail");
    }
});

// User signup endpoint
app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(password, 10);

        const data = {
            email: email,
            password: hashedPassword,
        };

        const check = await collection.findOne({ email: email });

        if (check) {
            res.status(200).json("exist");
        } else {
            await collection.insertMany([data]);
            res.status(201).json("notexist");
        }
    } catch (e) {
        res.status(500).json("fail");
    }
});

// Update profile endpoint
app.put("/api/auth/update", async (req, res) => {
    const { email, name, password } = req.body;

    try {
        const user = await collection.findOne({ email: email });

        if (user) {
            console.log(`Updating user: ${email}`);
            await collection.updateOne(
                { email: email },
                { $set: { name: name, password: password } }
            );
            res.status(200).json({ email: email });
        } else {
            console.log(`User not found: ${email}`);
            res.status(404).json({ message: "User not found" });
        }
    } catch (e) {
        console.error(`Error updating profile for ${email}:`, e);
        res.status(500).json({ message: "Failed to update profile" });
    }
});

// Delete profile endpoint
app.delete("/api/auth/delete", async (req, res) => {
    const { email } = req.body;

    try {
        const user = await collection.findOne({ email: email });

        if (user) {
            await collection.deleteOne({ email: email });
            res.status(200).json({ message: "Profile deleted successfully" });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (e) {
        console.error(`Error deleting profile for ${email}:`, e);
        res.status(500).json({ message: "Failed to delete profile" });
    }
});


// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
