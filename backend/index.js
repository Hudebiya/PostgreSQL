import express from "express";
import cors from "cors";
import { connectToDatabase } from "./db/db.js";
import userRoutes from "./routes/routes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoutes);

connectToDatabase();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});