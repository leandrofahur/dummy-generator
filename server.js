const connectDB = require("./config/db");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// connect to the db:
connectDB();

app.get("/", (req, res) => {
  res.status(200).send("API request");
});

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
