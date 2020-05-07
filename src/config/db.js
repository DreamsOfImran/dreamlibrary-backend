const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "library",
});

const db = mongoose.connection;

db.on("error", (error) => console.log("Something went wrong!"));

module.exports = db;
