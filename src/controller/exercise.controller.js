const Exercise = require("../models/exercise.model");

module.exports = {
  async create(req, res) {
    try {
      const { body } = req;
      const exercise = await Exercise.create(body);
      res.status(201).json(exercise);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async list(req, res) {
    try {
      const exercises = await Exercise.find();
      res.status(200).json(exercises);
    } catch (err) {
      res.status(400).json({ message: "Error en la obtención de los datos." });
    }
  },

  async destroy(req, res) {
    try {
      const { exerciseId } = req.body;
      const exercise = await Exercise.findByIdAndDelete(exerciseId);
      res.status(200).json(exercise);
    } catch (err) {
      res.status(400).json({ message: "Error eliminando los datos." });
    }
  },
};
