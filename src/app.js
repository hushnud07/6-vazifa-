import express from "express";
import connectDB from "./config/database.js";
import studentRoutes from "./routes/student.Routes.js";
import groupRoutes from "./routes/group.Routes.js";

const app = express();
const PORT = 4000;

app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/groups", groupRoutes);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`"Server running on port ${PORT}`));
});
