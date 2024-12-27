import GroupService from "../services/group.Service.js";

class GroupController {
  constructor() {
    this.groupService = new GroupService();
  }
  async createGroupController(req, res) {
    try {
      const body = req.body;
      const data = await this.groupService.createGroup(body);
      res.statusCode = 201;
      res.send({ message: "Group successfuly created", group: data });
    } catch (error) {
      console.error(error.message);
    }
  }
  async getAllGroup(req, res) {
    try {
      const body = req.body;
      const data = await this.groupService.getAllGroup(body);
      res.statusCode = 201;
      res.send(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  async findGroupById(req, res) {
    try {
      const { id } = req.params;
      const data = await this.groupService.findGroupbyId(id);
      res.statusCode = 201;
      res.send(data);
    } catch (error) {
      res.statusCode = 400;
      console.error({ message: error, message });
    }
  }
  async updateGroupById(req, res) {
    try {
      const { id } = req.params;
      const data = await this.groupService.updateGroupById(id);
      res.statusCode = 201;
      res.send({ message: "Gruppa muofaqayatli yagnilandi" });
    } catch (error) {
      res.statusCode = 400;
      console.error({ message: error.message });
    }
  }
  async deleteByIdGroup(req, res) {
    try {
      const { id } = req.params;
      const data = await this.groupService.deleteGroupById(id);
      res.statusCode = 201;
      res.send({ message: "Gruppa mofaqayatli ochirildi" });
    } catch (error) {
      res.statusCode = 400;
      res.send({ message: error, message });
    }
  }
}
export default GroupController;
