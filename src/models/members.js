import mongoose from "mongoose";

const MembersSchema = new mongoose.Schema(
  {
    group_id: {
      type: mongoose.Types.ObjectId,
      ref: "groups",
    },
    student_id: {
      type: mongoose.Types.ObjectId,
      ref: "students",
    },
  },
  {
    versionKey: false,
  }
);

const MembersModel = mongoose.model("members", MembersSchema);
export default MembersModel;
