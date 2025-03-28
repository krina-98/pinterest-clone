import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

const port = process.env.PORT;

// using middleware
app.use(express.json());
app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

//importing routes
import userRoutes from "./routes/userRoutes.js";

// using routes
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDB();
});
