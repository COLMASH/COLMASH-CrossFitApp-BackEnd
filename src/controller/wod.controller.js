const Wod = require("../models/wod.model");
const Coach = require("../models/coach.model");
const jwt = require("jsonwebtoken");

module.exports = {
  async list(req, res) {
    try {
      const wod = await Wod.findById().populate("creator", "name");
      res.status(200).json(wod);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  async show(req, res) {
    try {
      const { coachId } = req;
      const wod = await Wod.find({ creator: coachId });
      res.status(200).json(wod);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  async update(req, res) {
    try {
      const { wodId } = req.body;
      const wod = await Wod.findByIdAndUpdate(wodId, req.body, {
        new: true,
      });
      res.status(200).json(wod);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async destroy(req, res) {
    try {
      const { wodId } = req.body;
      const wod = await Wod.findByIdAndDelete(wodId);
      res.status(200).json(wod);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async create(req, res) {
    try {
      const { body, coachId } = req;
      const coach = await Coach.findById(coachId);
      if (!coach) {
        throw new Error("El entrenador no existe");
      }
      const wod = await Wod.create({ ...body, creator: coachId });
      coach.wods.push(wod._id);
      res.status(201).json(wod);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
