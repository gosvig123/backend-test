import { Prisma } from "@prisma/client";
import Topic from "../models/Topic.js";

export default class TopicController {
  static async getAll(_, res) {
    const topics = await Topic.getAll();
    res.json(topics);
  }

  static async getOne(req, res) {
    try {
      const topic = await Topic.getOne(req.params.id);
      res.json(topic);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  }

  static async create(req, res) {
    try {
      if (req.body.name === undefined) {
        throw new Error("Name is required");
      }
      const topic = await Topic.create(req.body);
      res.json(topic);
    } catch (e) {
      console.log(e)
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          res.status(400).json({ error: 'Constraint Violation', meta: e.meta })
        }
      }
      res.status(400).json({ error: e.message });
    }
  }
}