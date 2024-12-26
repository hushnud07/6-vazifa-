import Group from "../models/group.js";
import Student from "../models/student.js";

export const getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find().populate("students");
    res.json(groups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getGroupById = async (req, res) => {
  try {
    const group = await Group.findById(req.params.id).populate("students");
    if (!group) return res.status(404).json({ message: "Group not found" });
    res.json(group);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createGroup = async (req, res) => {
  try {
    const newGroup = new Group(req.body);
    await newGroup.save();
    res.status(201).json(newGroup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateGroup = async (req, res) => {
  try {
    const updatedGroup = await Group.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedGroup)
      return res.status(404).json({ message: "Group not found" });
    res.json(updatedGroup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteGroup = async (req, res) => {
  try {
    const deletedGroup = await Group.findByIdAndDelete(req.params.id);
    if (!deletedGroup)
      return res.status(404).json({ message: "Group not found" });
    res.json({ message: "Group deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addStudentToGroup = async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);
    if (!group) return res.status(404).json({ message: "Group not found" });

    if (group.students.length >= group.maxStudents) {
      return res.status(400).json({ message: "Group is full" });
    }

    const student = await Student.findById(req.body.studentId);
    if (!student) return res.status(404).json({ message: "Student not found" });

    group.students.push(student._id);
    await group.save();

    student.group = group._id;
    await student.save();

    res.json({ message: "Student added to group" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
