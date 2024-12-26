import Group from "../models/group.js";
import Student from "../models/student.js";

export const getAllGroups = async () => {
  return await Group.find().populate("students");
};

export const getGroupById = async (id) => {
  return await Group.findById(id).populate("students");
};

export const createGroup = async (data) => {
  const newGroup = new Group(data);
  return await newGroup.save();
};

export const updateGroup = async (id, data) => {
  return await Group.findByIdAndUpdate(id, data, { new: true });
};

export const deleteGroup = async (id) => {
  return await Group.findByIdAndDelete(id);
};

export const addStudentToGroup = async (groupId, studentId) => {
  const group = await Group.findById(groupId);
  if (!group) throw new Error("Group not found");

  if (group.students.length >= group.maxStudents) {
    throw new Error("Group is full");
  }

  const student = await Student.findById(studentId);
  if (!student) throw new Error("Student not found");

  group.students.push(student._id);
  await group.save();

  student.group = group._id;
  await student.save();

  return { message: "Student added to group" };
};