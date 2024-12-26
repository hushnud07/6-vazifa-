import express from "express";
import * as groupController from "../controllers/group.Controller.js";

const router = express.Router();

router.get("/", groupController.getAllGroups);
router.get("/:id", groupController.getGroupById);
router.post("/", groupController.createGroup);
router.put("/:id", groupController.updateGroup);
router.delete("/:id", groupController.deleteGroup);
router.post("/:id/students", groupController.addStudentToGroup);

export default router;
