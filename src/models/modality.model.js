const { Schema, model, models } = require("mongoose");

const modalitySchema = new Schema(
  {
    modality: {
      type: String,
      required: [true, "El nombre de la modalidad es requerido"],
    },
  },
  {
    timestamps: true,
  }
);

const Modality = model("Modality", modalitySchema);

module.exports = Modality;
