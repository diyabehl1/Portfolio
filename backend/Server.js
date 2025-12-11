const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const users = require("./User.js");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log("mongodb connection error", err));



app.post("/submit", async (req, res) => {
  try {
    console.log("received form data", req.body);

    const newform = new users(req.body);
    await newform.save();

    res.json({ success: true, message: "form submitted successfully" });
  } catch (err) {
    console.error("error occurred ", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});


