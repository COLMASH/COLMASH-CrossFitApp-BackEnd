const Plan = require("../models/plan.model");

module.exports = {
  async create(req, res) {
    try {
      const { body } = req;
      const plan = await Plan.create(body);
      res.status(201).json(plan);
    } catch (err) {
      res.status(400).json({ message: "Error en la creación del plan" });
    }
  },

  async list(req, res) {
    try {
      const plans = await Plan.find();
      res.status(200).json(plans);
    } catch (err) {
      res.status(400).json({ message: "Error en la obtención de los datos." });
    }
  },

  async update(req, res) {
    try {
      const { planId, body } = req;
      const plan = await Plan.findByIdAndUpdate(planId, body, { new: true });
      res.status(200).json(plan);
    } catch (err) {
      res.status(400).json({ message: "Error actualizando los datos." });
    }
  },

  async destroy(req, res) {
    try {
      const { planId } = req.body;
      const plan = await Plan.findByIdAndDelete(planId);
      res.status(200).json(plan);
    } catch (err) {
      res.status(400).json({ message: "Error eliminando los datos." });
    }
  },
};
