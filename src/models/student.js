import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  image: { type: String },
  address: { type: String },
  birthDate: { type: Date },
  group: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
  paymentStatus: { type: Boolean, default: false },
});

export default mongoose.model("Student", studentSchema);
