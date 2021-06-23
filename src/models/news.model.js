const { Schema, model } = require("mongoose");

const newsSchema = new Schema(
  {
    title: String,
    content: String,
    date: Date,
  },
  {
    timestamps: true,
  }
);

const News = model("News", newsSchema);

module.exports = News;
