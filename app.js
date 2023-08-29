const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
require("./cronjobs")

//Middle ware
app.use(bodyParser.json());

//Import routes
const route = require("./api/routes/air_quality.route");

app.use("/api/v1", route);

// Connect to Mongo db
mongoose
.connect(process.env.DB_URL)
.then(() => console.log("connected to the DB"));

// Create a listerning port
const PORT = process.env.PORT || 8080;

// Run the server
const server = app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));

module.exports = server;