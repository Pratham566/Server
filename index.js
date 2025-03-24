const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

const PORT = process.env.PORT || 3000; // Use dynamic port

const allowedOrigins = [
  "http://localhost:5173", // Local development
  "https://client-ashen-xi.vercel.app/", // Update with actual frontend Vercel URL
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
