const { Schema, model, models } = require("mongoose");

const wodSchema = new Schema(
  {
    activity: {
      type: String,
      required: [true, "La actividad es requerida."],
    },
    modality: {
      type: String,
      required: [true, "La modalidad del Wod es requerida."],
    },
    exercices: {
      type: String,
      required: [true, "Los ejercicios del Wod son requeridos"],
    },
    date: {
      type: Date,
      required: [true, "La fecha del Wod es requerida"],
    },
    repetitions: {
      type: Number,
      required: [true, "Las repeticiones del ejercicio son requeridas"],
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "Coach",
      required: true,
    },
    notes: String,
  },
  {
    timestamps: true,
  }
);

const Wod = model("Wod", wodSchema);

module.exports = Wod;
