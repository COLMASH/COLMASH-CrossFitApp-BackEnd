const mongoose = require("mongoose");

function connect() {
  const mongoURI = "mongodb://localhost:27017/crossfitapp";
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(mongoURI, options);

  const { connection } = mongoose;

  connection.once("open", () => {
    console.log("Connection established successfully");
  });
  connection.on("error", (err) => {
    console.log("Something went wrong", err);
  });

  return connection;
}

module.exports = connect;
