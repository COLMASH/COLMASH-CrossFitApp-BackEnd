const { Schema, model } = require("mongoose");

const coachSchema = new Schema(
  {
    dni: Number,
    dniType: String,
    name: String,
    lastname: String,
    birthday: Date,
    email: String,
    phone: Number,
    active: Boolean, //Nuevo atributo
    password: String, //Temporal
    profilePicture: String, //Temporal
  },
  {
    timestamps: true,
  }
);

const Coach = model("Coach", coachSchema);

module.exports = Coach;
