const mongoose = require("mongoose");

const orderModel = () => {
  const orderSchema = mongoose.Schema({
    productName: String,
    categoryID: { type: mongoose.ObjectId, ref: "category" },
    productPrice: Number,
    productDescription: String,
    buyerID: { type: mongoose.ObjectId, ref: "buyer" },
    orderDate: Date,
  });
  return mongoose.model("order", orderSchema);
};

module.exports = orderModel;
