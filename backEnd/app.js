const express = require("express");
const app = express();

app.use(express.json());

// Route Imports

const images = require("./routes/imgRoute");

app.use("/api/v1", images);

module.exports = app;
