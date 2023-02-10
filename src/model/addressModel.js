const mongoose = require("mongoose");

const addressModel = () => {
  const addressSchema = mongoose.Schema({
    streetName: String,
    city: String,
    region: String,
    postalCode: Number,
  });
  return mongoose.model("address", addressSchema);
};

module.exports = addressModel;
