const News = require("../models/news.model");

module.exports = {
  create(req, res) {
    const { body } = req;

    News.create(body)
      .then((news) => {
        res.status(201).json(news);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  },

  list(req, res) {
    News.find()
      .then((news) => {
        res.status(200).json(news);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  },

  destroy(req, res) {
    const { newsId } = req.params;

    News.findByIdAndDelete(newsId)
      .then((news) => {
        res.status(200).json(news);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  },
};
