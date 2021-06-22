const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    dni: Number,
    dniType: String,
    name: String,
    lastname: String,
    birthday: Date,
    email: String,
    address: String,
    neighborhood: String,
    phone: Number,
    height: Number,
    weight: Number,
    active: Boolean, //Nuevo atributo
    password: String, //Temporal
    profilePicture: String, //Temporal
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
