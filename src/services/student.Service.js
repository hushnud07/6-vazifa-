import StudentModel from "../models/student.js";
import GroupModel from "../models/group.js";
import MembersModel from "../models/members.js";
class StudentService {
  constructor() {
    this.studentModel = StudentModel;
    this.groupModel = GroupModel;
    this.membersModel = MembersModel;
  }
  async createStudent(body) {
    const student = await this.studentModel.create({ ...body });
    return student;
  }
  async updateStudents(body) {
    const student = await this.studentModel.updateOne({ ...body });
    if (student.acknowledged) {
      return student;
    } else {
      throw new Error("xatolik yuz berdi ");
    }
  }
  async getAllStudents() {
    const student = await this.studentModel.find();
    if (student.length >= 1) {
      return student;
    } else {
      throw new Error("Studentlar mavjud emas");
    }
  }
  async getFindByIdStudents(id) {
    const student = await this.studentModel.findById(id);
    if (student) {
      return student;
    } else {
      throw new Error("Bunday id li student topilmadi");
    }
  }
  async deleteByIdStudents(id) {
    const student = await this.studentModel.findByIdAndDelete(id);
    if (!student) {
      throw new Error("Bunday id li foydalanuvchi allaqachon mavjud emas");
    } else {
      return student;
    }
  }
  async joinGroup(studentId, { group_id }) {
    const members = await this.membersModel.find({
      group_id: group_id,
      student_id: studentId,
    });
    if (members.length == 0) {
      const member = await this.membersModel.create({
        student_id: studentId,
        group_id: group_id,
      });
      return member
    } else {
      throw new Error("Student already joined this group");
    }
  }
}
export default StudentService;
