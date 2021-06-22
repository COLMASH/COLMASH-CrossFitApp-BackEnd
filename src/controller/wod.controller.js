const Wod = require("../models/wod.model");

module.exports = {
  create(req, res) {
    const { body } = req;

    Wod.create(body)
      .then((wod) => {
        res.status(201).json(wod);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  },
};
