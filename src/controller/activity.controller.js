const Activity = require("../models/activity.model");

module.exports = {
  async create(req, res) {
    try {
      const { body } = req;
      const activity = await Activity.create(body);
      res.status(201).json(activity);
    } catch (error) {
      res.status(400).json("Error registrando una actividad");
    }
  },

  async list(req, res) {
    try {
      const activities = await Activity.find();
      res.status(200).json(activities);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  async destroy(req, res) {
    try {
      const { activityId } = req.body;
      const activity = await Activity.findByIdAndDelete(activityId);
      res.status(200).json(activity);
    } catch (err) {
      res.status(400).json({ message: "Error eliminando los datos" });
    }
  },
};
