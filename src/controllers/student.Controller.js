import studentRouter from "../routes/student.Routes.js";
import StudentService from "../services/student.Service.js";

class StudentController {
  constructor() {
    this.studentService = new StudentService();
  }
  async createStudentController(req, res) {
    try {
      const body = req.body;
      const data = await this.studentService.createStudent(body);
      res.statusCode = 201;
      res.send({
        message: "Student successfully created",
        student: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  }
  async updateStudent(req, res) {
    try {
      const body = req.body;
      const data = await this.studentService.updateStudents(body);
      res.statusCode = 201;
      res.send({ message: "Student successfuly update" });
    } catch (error) {
      res.statusCode = 400;

      res.send({ message: error.message });
    }
  }
  async getAllStudents(req, res) {
    try {
      const body = req.body;
      const data = await this.studentService.getAllStudents(body);
      res.statusCode = 201;
      res.send(data);
    } catch (error) {
      res.statusCode = 400;
      res.send({ message: error.message });
    }
  }
  async getByIdStudents(req, res) {
    try {
      const { id } = req.params;
      const data = await this.studentService.getFindByIdStudents(id);
      res.statusCode = 201;
      res.send(data);
    } catch (error) {
      res.statusCode = 400;
      res.send({ message: error.message });
    }
  }
  async deleteByIdStudents(req, res) {
    try {
      const { id } = req.params;
      const data = await this.studentService.deleteByIdStudents(id);
      res.send({ message: "Foydalanuvchi ochirib tashlandi " });
      res.statusCode = 201;
    } catch (error) {
      res.statusCode = 400;
      res.send({ message: error.message });
    }
  }
  async joinGroupController(req, res) {
    try {
      const { studentId } = req.params;
      const body = req.body;
      const data = await this.studentService.joinGroup(studentId, body);
      if (data) {
        res.statusCode = 200;
        res.send({
          message: "Successfully joined",
          success: true,
        });
      }
    } catch (error) {
      res.statusCode = 400;
      res.send({
        message: error.message,
        success: false,
      });
    }
  }
}

export default StudentController;
