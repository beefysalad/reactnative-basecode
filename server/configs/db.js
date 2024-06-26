const mongoose = require("mongoose");

const connect = async () => {
  mongoose.connect(
    "mongodb+srv://patrick123:johnpatrick@cluster0.udls2.mongodb.net/reactnative?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", () => {
    console.log("Database connected");
  });
};

module.exports = {
  connect,
};