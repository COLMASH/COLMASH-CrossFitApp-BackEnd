const { Schema, model } = require("mongoose");

const adminSchema = new Schema(
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

const Admin = model("Admin", adminSchema);

module.exports = Admin;
