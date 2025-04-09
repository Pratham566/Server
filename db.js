const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_URL;

mongoose
  .connect(uri)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));
