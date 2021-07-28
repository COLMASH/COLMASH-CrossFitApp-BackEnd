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
    exercice1: {
      type: String,
      required: [true, "Al menos un ejercicio debe ser seleccionado"],
    },
    exercice2: String,
    exercice3: String,
    startDate: {
      type: Date,
      required: [true, "La fecha inicial del Wod es requerida"],
    },
    endDate: {
      type: Date,
      required: [true, "La fecha final del Wod es requerida"],
    },
    repetition1: {
      type: Number,
      required: [true, "Las repeticiones del ejercicio son requeridas"],
    },
    repetition2: String,
    repetition3: String,
    capacity: {
      type: Number,
      required: [true, "La capacidad máxima de estudiantes es requerida"],
    },
    availableCapacity: Number,
    creator: {
      type: Schema.Types.ObjectId,
      ref: "Coach",
      required: true,
    },
    notes: String,
    users: {
      type: [{ type: Schema.Types.ObjectId, ref: "User" }],
    },
  },
  {
    timestamps: true,
  }
);

const Wod = model("Wod", wodSchema);

module.exports = Wod;
