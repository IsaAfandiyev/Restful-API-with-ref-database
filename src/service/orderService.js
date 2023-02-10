class OrderService {
  constructor(orderRepo) {
    this._orderRepo = orderRepo;
  }

  allOrders = async (limit, sort, { startDate, endDate }) => {
    return await this._orderRepo.allOrders(limit, sort, { startDate, endDate });
  };

  addOrder = async (
    productName,
    categoryID,
    productPrice,
    productDescription,
    buyerID
  ) => {
    return await this._orderRepo.addOrder(
      productName,
      categoryID,
      productPrice,
      productDescription,
      buyerID
    );
  };
  deleteOrder = async (orderId) => {
    return await this._orderRepo.deleteOrder(orderId);
  };

  findOrderById = async (orderId) => {
    return await this._orderRepo.getByIdOrder(orderId);
  };

  updateOrder = async (id, body) => {
    let o = await this._orderRepo.getByIdOrder(id);
    o.productName = body.productName ? body.productName : o.productName;
    o.productPrice = body.productPrice ? body.productPrice : o.productPrice;
    o.productDescription = body.productDescription
      ? body.productDescription
      : o.productDescription;
    o.save();
    return o;
  };
}

module.exports = OrderService;
