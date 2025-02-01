const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const PORT = 5000;
const JWT_SECRET = "your_super_secret_key"; // Replace with a strong key

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/auth-demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// User Schema and Model
const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
});

const User = mongoose.model("User", UserSchema);

// Routes
app.post("/api/signup", async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).send({ error: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).send({ message: "User created successfully" });
    } catch (error) {
        res.status(400).send({ error: "Error creating user: " + error.message });
    }
});

app.post("/api/signin", async (req, res) => {
    const { email, password } = req.body;
    console.log("Request received:", req.body);

    if (!email || !password) {
        console.log("SignIn Error: Missing email or password");
        return res.status(400).send({ error: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
        console.log("SignIn Error: User not found for email:", email);
        return res.status(404).send({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("Password comparison result:", isPasswordValid);

    if (!isPasswordValid) {
        console.log("SignIn Error: Invalid password for email:", email);
        return res.status(401).send({ error: "Invalid credentials" });
    }

    const payload = {
        id: user._id,
        email: user.email,
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

    console.log("SignIn Success for user:", email);
    return res.status(200).send({ message: "Sign in successful", token });

    
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
