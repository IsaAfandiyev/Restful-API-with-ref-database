const orderModel = require("../model/orderModel");

class OrderRepo {
  constructor() {
    this._orderModel = orderModel();
  }
  allOrders = async (limit, sort, { startDate, endDate }) => {
    let f = this._orderModel.find();
    if (limit) {
      f = f.limit(limit);
    }
    if (sort) {
      f = f.sort({ orderDate: sort });
    }
    if (startDate) {
      f = f.where("orderDate").gt(startDate);
    }
    if (endDate) {
      f = f.where("orderDate").lt(endDate);
    }

    return await f.exec();
  };
  addOrder = async (
    productName,
    categoryID,
    productPrice,
    productDescription,
    buyerID
  ) => {
    const newOrder = this._orderModel({
      productName,
      categoryID,
      productPrice,
      productDescription,
      buyerID,
      orderDate: Date.now(),
    });
    return await newOrder.save();
  };

  deleteOrder = async (orderId) => {
    return await this._orderModel.findByIdAndDelete(orderId).exec();
  };

  getByIdOrder = async (id) => {
    return await this._orderModel.findById(id).exec();
  };
}

module.exports = OrderRepo;
