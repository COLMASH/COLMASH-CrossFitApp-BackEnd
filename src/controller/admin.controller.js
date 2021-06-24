const Admin = require("../models/admin.model");

module.exports = {
  async create(req, res) {
    try {
      const { body } = req;

      const admin = await Admin.create(body);
      res.status(201).json(admin);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  async list(req, res) {
    try {
      const admins = await Admin.find();
      res.status(200).json(admins);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  async show(req, res) {
    try {
      const { adminId } = req.params;
      const admin = await Admin.findById(adminId);
      res.status(200).json(admin);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  },

  async update(req, res) {
    try {
      const {
        params: { adminId },
        body,
      } = req;
      const admin = await Admin.findByIdAndUpdate(adminId, body, { new: true });
      res.status(200).json(admin);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async destroy(req, res) {
    try {
      const { adminId } = req.params;
      const admin = await Admin.findByIdAndDelete(adminId);
      res.status(200).json(admin);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};
