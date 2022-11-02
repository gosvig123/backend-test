import prisma from "../lib/prisma.js";

export default class Topic {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  static async getAll() {
    const topics = await prisma.topic.findMany();
    return topics;
  }

  static async getOne(id) {
    const topic = await prisma.topic.findUniqueOrThrow({
      where: {
        id: parseInt(id),
      }
    });
    return topic;
  }

  static async create(data) {
    const topic = await prisma.topic.create({
      data,
    });
    return topic;
  }
}