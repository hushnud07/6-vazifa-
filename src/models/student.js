import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    image: { type: String },
    address: { type: String },
    birthDate: { type: Date },
    paymentStatus: { type: Boolean, default: false },
  },
  {
    versionKey: false,
  }
);

const StudentModel = mongoose.model("students", studentSchema);
export default StudentModel;
