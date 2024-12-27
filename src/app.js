import express, { Router } from "express";
import connectDB from "./config/database.js";
import Routes from "./routes/routes.js";

const app = express();
const PORT = 4000;

app.use(express.json());

app.use("/api", ...Routes());
app.use("/api", ...Routes());
connectDB().then(() => {
  app.listen(PORT, () => console.log(`"Server running on port ${PORT}`));
});
