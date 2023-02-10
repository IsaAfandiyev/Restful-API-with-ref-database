class BuyerService {
  constructor(buyerRepo) {
    this._buyerRepo = buyerRepo;
  }

  allBuyers = async (limit) => {
    return await this._buyerRepo.allBuyers(limit);
  };

  addBuyer = async (buyerName, phoneNumber, buyerAddress) => {
    return await this._buyerRepo.addBuyer(buyerName, phoneNumber, buyerAddress);
  };
  deleteBuyer = async (buyerId) => {
    return await this._buyerRepo.deleteBuyer(buyerId);
  };

  findBuyerById = async (buyerId) => {
    return await this._buyerRepo.getByIdBuyer(buyerId);
  };

  updateBuyer = async (id, body) => {
    let o = await this._buyerRepo.getByIdBuyer(id);
    o.buyerName = body.buyerName ? body.buyerName : o.buyerName;
    o.phoneNumber = body.phoneNumber ? body.phoneNumber : o.phoneNumber;
    o.buyerAddress = body.buyerAddress ? body.buyerAddress : o.buyerAddress;
    o.save();
    return o;
  };
}

module.exports = BuyerService;
