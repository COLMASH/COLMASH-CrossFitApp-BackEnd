const { Schema, model, models } = require("mongoose");

const exerciseSchema = new Schema(
  {
    exercise: {
      type: String,
      required: [true, "El nombre del ejercicio es requerido."],
    },
    unitMeasurement: {
      type: String,
    },
    video: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Exercise = model("Exercise", exerciseSchema);

module.exports = Exercise;
