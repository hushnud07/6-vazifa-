import GroupModel from "../models/group.js";

class GroupService {
  constructor() {
    this.groupModel = GroupModel;
  }
  async createGroup(body) {
    const group = await this.groupModel.create({ ...body });
    return group;
  }
  async getAllGroup() {
    const group = await this.groupModel.find();
    return group;
  }
  async findGroupbyId(id) {
    const group = await this.groupModel.findById(id);
    if (group) {
      return group;
    } else {
      throw new Error("Bunday id li group topilmadi");
    }
  }
  async updateGroupById(id) {
    const group = await this.groupModel.findByIdAndUpdate(id);
    if (!group) {
      throw new Error("xatolik yuz berdi ");
    } else {
      return group;
    }
  }
  async deleteGroupById(id) {
    const group = await this.groupModel.findByIdAndDelete(id);
    if (!group) {
      throw new Error("xatolik yuz berdi ");
    } else {
      return group;
    }
  }
 async 
}
export default GroupService;
