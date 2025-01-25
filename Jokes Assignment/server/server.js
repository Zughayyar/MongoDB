require("dotenv").config();
const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

// Database configuration
require("./config/mongoose.config");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRoutes = require("./routes/joke.routes");
userRoutes(app);

// Start the server
app.listen(port, () => console.log(`Server is running on port: ${port}`));