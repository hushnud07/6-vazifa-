import express from "express";
import GroupController from "../controllers/group.Controller.js";

const groupRouter = express.Router();
const groupControl = new GroupController();

groupRouter.post("/group", (req, res) =>
  groupControl.createGroupController(req, res)
);
groupRouter.get("/group", (req, res) => groupControl.getAllGroup(req, res));
groupRouter.get("/group/:id", (req, res) =>
  groupControl.findGroupById(req, res)
);
groupRouter.put("/group/:id", (req, res) =>
  groupControl.updateGroupById(req, res)
);
groupRouter.delete("/group/:id", (req, res) =>
  groupControl.deleteByIdGroup(req, res)
);
groupRouter.post("/:id/students", (req, res) =>
  groupControl.addStudentToGroup(req, res)
);
export default groupRouter;
