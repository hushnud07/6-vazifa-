import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    teacherName: { type: String, required: true },
    classTime: { type: String, required: true },
    maxStudents: { type: Number, default: 15 },
    status: { type: String, enum: ["active", "completed"], default: "active" },
  },
  {
    versionKey: false,
  }
);

const GroupModel = mongoose.model("groups", groupSchema);
export default GroupModel;
