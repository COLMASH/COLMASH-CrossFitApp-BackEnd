const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Admin = require("../models/admin.model");

module.exports = {
  async list(req, res) {
    try {
      const admins = await Admin.find();
      res.status(200).json(admins);
    } catch (err) {
      res.status(400).json({ message: "Error en la obtención de los datos." });
    }
  },

  async show(req, res) {
    try {
      const { adminId } = req;
      const admin = await Admin.findById(adminId);
      res.status(200).json(admin);
    } catch (err) {
      res.status(404).json({ message: "Error en la obtención de los datos" });
    }
  },

  async update(req, res) {
    try {
      const {
        params: { adminId },
        body,
      } = req;
      const admin = await Admin.findByIdAndUpdate(adminId, body, { new: true });
      res.status(200).json(admin);
    } catch (err) {
      res.status(400).json({ message: "Error actuallizando los datos" });
    }
  },

  async destroy(req, res) {
    try {
      const { adminId } = req.params;
      console.log(adminId);
      const admin = await Admin.findByIdAndDelete(adminId);
      res.status(200).json(admin);
    } catch (err) {
      res.status(400).json({ message: "Error eliminando los datos" });
    }
  },

  async signup(req, res) {
    try {
      const { body } = req;
      const admin = await Admin.create(body);
      const token = jwt.sign({ adminId: admin._id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24 * 365,
      });
      res.status(201).json({ token });
    } catch (error) {
      res.status(400).json("Error registrando un administrador");
    }
  },

  async signin(req, res) {
    try {
      const { email, password } = req.body;
      const admin = await Admin.findOne({ email });

      if (!admin) {
        throw new Error("Contraseña o correo inválidos");
      }
      const isValid = await bcrypt.compare(password, admin.password);
      if (!isValid) {
        throw new Error("Contraseña o correo inválidos");
      }
      const token = jwt.sign({ adminId: admin._id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24 * 365,
      });
      res.status(201).json({
        token,
        admin: {
          name: admin.name,
          lastname: admin.lastname,
          dniType: admin.dniType,
          email: admin.email,
          phone: admin.phone,
          birthday: admin.birthday,
        },
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
