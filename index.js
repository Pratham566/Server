const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");
require("dotenv").config();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  "http://localhost:5173", // Local development
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());

const userRouter = require("./Router/userRouter");
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
