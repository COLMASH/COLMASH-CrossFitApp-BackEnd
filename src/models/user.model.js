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
    active: Boolean, 
    password: String, 
    profilePicture: String, 
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
