const { Schema, model, models } = require("mongoose");

const exerciseSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre del ejercicio es requerido."],
    },
    category: {
      type: String,
    },
    linkVideo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Exercise = model("Exercise", exerciseSchema);

module.exports = Exercise;
