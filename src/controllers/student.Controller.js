import Student from "../models/student.js";
export const createStudent = async (data) => {
  const newStudent = new Student(data);
  return await newStudent.save();
};

export const getAllStudents = async () => {
  return await Student.find().populate("group");
};

export const getStudentById = async (id) => {
  return await Student.findById(id).populate("group");
};


export const updateStudent = async (id, data) => {
  return await Student.findByIdAndUpdate(id, data, { new: true });
};

export const deleteStudent = async (id) => {
  return await Student.findByIdAndDelete(id);
};