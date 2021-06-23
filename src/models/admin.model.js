const { Schema, model } = require("mongoose");

const adminSchema = new Schema(
  {
    userTypeCode: String,
    dni: String,
    dniType: String,
    name: String,
    lastname: String,
    birthday: Date,
    email: String,
    phone: String,
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
