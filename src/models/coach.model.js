const { Schema, model, models } = require("mongoose");
const bcrypt = require("bcrypt");

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const coachSchema = new Schema({
		dni: {
      type: String,
      required: [true, 'El campo dni es requerido'],
    },
		dniType: {
      type: String,
    },
		name: {
      type: String,
      required: [true, 'El campo nombre es requerido'],
    },
		lastname: {
      type: String,
      required: [true, 'El campo apellido es requerido'],
    },
		birthday: Date,
		email: {
      type: String,
      required: [true, 'El campo email es requerido'],
      match: [emailRegex, 'Email invalido'],
      validate: [
        {
          validator(email) {
            return models.Coach.findOne({ email })
              .then(coach => !coach)
              .catch(() => false)
          },
          message: 'Elcorreo esta en uso'
        }
      ]
    },
		phone: {
      type: String,
      required: [true, 'El campo teléfono es requerido'],
    },
		active: {
      type: Boolean,
      default: true,
    },
		password: {
      type: String,
      required: [true, 'El campo contraseña es requerido'],
    },
		profilePicture: {
      type: String,
    },
	},
	{
		timestamps: true,
	}
);

coachSchema.pre("save", function (next) {
  var user = this;
  if (!user.isModified("password")) return next();
  bcrypt.genSalt(5, async function (err, salt) {
    if (err) return next(err);
    await bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

const Coach = model("Coach", coachSchema);

module.exports = Coach;
