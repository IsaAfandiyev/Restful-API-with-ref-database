const buyerModel = require("../model/buyerModel");

class BuyerRepo {
  constructor() {
    this._buyerModel = buyerModel();
  }
  allBuyers = async (limit) => {
    let f = this._buyerModel.find();
    if (limit) {
      f = f.limit(limit);
    }
    return await f.exec();
  };
  addBuyer = async (buyerName, phoneNumber, buyerAddress) => {
    const newBuyer = this._buyerModel({
      buyerName,
      phoneNumber,
      buyerAddress,
    });
    return await newBuyer.save();
  };

  deleteBuyer = async (buyerId) => {
    return await this._buyerModel.findByIdAndDelete(buyerId).exec();
  };

  getByIdBuyer = async (id) => {
    return await this._buyerModel.findById(id).exec();
  };
}

module.exports = BuyerRepo;
