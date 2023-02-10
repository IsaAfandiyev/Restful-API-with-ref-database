const mongoose = require("mongoose");

const userModel = () => {
  const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
  });
  return mongoose.model("user", userSchema);
};

module.exports = userModel;
