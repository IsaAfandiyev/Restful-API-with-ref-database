const mongoose = require("mongoose");
const addressModel = require("./addressModel");

const buyerModel = () => {
  const buyerSchema = mongoose.Schema({
    buyerName: String,
    phoneNumber: String,
    buyerAddress: { type: mongoose.ObjectId, ref: "address" },
  });
  return mongoose.model("buyer", buyerSchema);
};

module.exports = buyerModel;
