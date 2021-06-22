const { Schema, model } = require("mongoose");

const wodSchema = new Schema(
  {
    dni: Number,
    program: String,
    date: Date,
    schedule: Date,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Wod = model("Wod", wodSchema);

module.exports = Wod;
