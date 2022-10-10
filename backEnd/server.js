const app = require("./app");
const connectDatabase = require("./config/database");
const path = require("path");
const express = require("express");
const port = process.env.PORT || 4000;

// connect db
connectDatabase();

// deployement

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("server is working fine on" + port);
});
