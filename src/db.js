const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect("mongodb://localhost:27017/crossfitapp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connection established successfully"))
    .catch((err) => console.log("Something went wrong", err));
}

module.exports = connect;
