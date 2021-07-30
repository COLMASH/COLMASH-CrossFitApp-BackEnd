const { Schema, model, models } = require("mongoose");

const activitySchema = new Schema(
  {
    activity: {
      type: String,
      required: [true, "El nombre de la actividad es requerido"],
    },
  },
  {
    timestamps: true,
  }
);

const Activity = model("Activity", activitySchema);

module.exports = Activity;
