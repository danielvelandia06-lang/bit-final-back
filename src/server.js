import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";
import tareasrouter from "./routers/tareas.js";

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use("/tareas", tareasrouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
