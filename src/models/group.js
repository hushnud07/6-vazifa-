import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  teacherName: { type: String, required: true },
  classTime: { type: String, required: true },
  maxStudents: { type: Number, default: 15 },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  status: { type: String, enum: ["active", "completed"], default: "active" },
});

export default mongoose.model("Group", groupSchema);
