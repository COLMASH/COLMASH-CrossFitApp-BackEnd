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
    active: Boolean, 
    password: String, 
    profilePicture: String, 
  },
  {
    timestamps: true,
  }
);

const Admin = model("Admin", adminSchema);

module.exports = Admin;
