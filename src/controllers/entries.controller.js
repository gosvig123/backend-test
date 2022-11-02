import Entry from "../models/Entry.js";

export default class EntriesController {
  static async getEntries(req, res) {
    const entries = await Entry.getAll(req.params.topicId);
    res.json(entries);
  }
}