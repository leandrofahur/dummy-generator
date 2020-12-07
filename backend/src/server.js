const connectDB = require("../config/db");
const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json({ extended: false }));
const PORT = process.env.PORT || 3000;

// connect to the db:
connectDB();

// Configure routes:
app.use("/api/profile", require("./routes/api/profile"));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("API request");
});

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
