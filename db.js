const mongoose = require("mongoose");

var db = mongoose.connect("mongodb://localhost:27017/user",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.then(() => {
  console.log("Connected to mongoDB");
}).catch((err) => {
  console.log(err);
});

module.exports = db;
