const errorHandler = require("./middleware/errorHandler");
const productRoutes = require("./routes/productRoutes");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use("/api/products", productRoutes);
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected ✅"))
.catch((err) => console.log(err));

// Test route
app.get("/", (req, res) => {
    res.send("Store Management API is running 🚀");
});

// Start server
const PORT = 5000;
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});