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
    active: Boolean, 
    password: String, 
    profilePicture: String, 
  },
  {
    timestamps: true,
  }
);

const Coach = model("Coach", coachSchema);

module.exports = Coach;
