import express from "express";
import StudentController from "../controllers/student.Controller.js";

const studentRouter = express.Router();

const studentControl = new StudentController();

studentRouter.post("/students", (req, res) =>
  studentControl.createStudentController(req, res)
);
studentRouter.put("/students/:id", (req, res) =>
  studentControl.updateStudent(req, res)
);

studentRouter.get("/students", (req, res) =>
  studentControl.getAllStudents(req, res)
);
studentRouter.get("/students/:id", (req, res) =>
  studentControl.getByIdStudents(req, res)
);
studentRouter.delete("/students/:id", (req, res) =>
  studentControl.deleteByIdStudents(req, res)
);
studentRouter.post("/students/:studentId/groups", (req, res) =>
  studentControl.joinGroupController(req, res)
);

export default studentRouter;
