const Modality = require("../models/modality.model");

module.exports = {
  async create(req, res) {
    try {
      const { body } = req;
      const modality = await Modality.create(body);
      res.status(201).json(modality);
    } catch (error) {
      res.status(400).json("Error registrando una modalidad");
    }
  },

  async list(req, res) {
    try {
      const modalities = await Modality.find();
      res.status(200).json(modalities);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  async destroy(req, res) {
    try {
      const { modalityId } = req.body;
      const modality = await Modality.findByIdAndDelete(modalityId);
      res.status(200).json(modality);
    } catch (err) {
      res.status(400).json({ message: "Error eliminando los datos" });
    }
  },
};
