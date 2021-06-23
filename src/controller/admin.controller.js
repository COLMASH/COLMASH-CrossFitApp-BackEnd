const Admin = require("../models/admin.model");

module.exports = {
  create(req, res) {
    const { body } = req;

    Admin.create(body)
      .then((admin) => {
        res.status(201).json(admin);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  },

  list(req, res) {
    Admin.find()
      .then((admin) => {
        res.status(200).json(admin);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  },

  show(req, res) {
    const { adminId } = req.params;

    Admin.findById(adminId)
      .then((admin) => {
        res.status(200).json(admin);
      })
      .catch((err) => {
        res.status(404).json({ message: err.message });
      });
  },

  update(req, res) {
    const {
      params: { adminId },
      body,
    } = req;

    Admin.findByIdAndUpdate(adminId, body, { new: true })
      .then((admin) => {
        res.status(200).json(admin);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  },

  destroy(req, res) {
    const { adminId } = req.params;

    Admin.findByIdAndDelete(adminId)
      .then((admin) => {
        res.status(200).json(admin);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  },
};
