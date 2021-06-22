const Coach = require("../models/coach.model");

module.exports = {
  create(req, res) {
    const { body } = req;

    Coach.create(body)
      .then((coach) => {
        res.status(201).json(coach);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  },
};
