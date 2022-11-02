import prisma from "../lib/prisma.js";

export default class Entry {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.content = data.content;
    this.type = data.type;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  static async getAll(topicId) {
    const entries = await prisma.entry.findMany({
      where: {
        topicId: parseInt(topicId),
      },
    });
    return entries;
  }

  static async getOne(id) {
    const entry = await prisma.entry.findUniqueOrThrowi({
      where: {
        id: parseInt(id),
      },
    });
    return entry;
  }
}