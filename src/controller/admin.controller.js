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
};
