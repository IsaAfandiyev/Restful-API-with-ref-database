const parseDate = require("../utils/date");

class OrderController {
  constructor(orderService) {
    this._orderService = orderService;
  }

  allOrders = async (req, res) => {
    let limit = req.query.limit;
    if (isNaN(parseInt(limit))) {
      limit = null;
    }
    let sort = req.query.sort;
    if (!(sort === "asc" || sort === "desc")) {
      sort = null;
    }
    let startDateString = req.query.startDate;
    let startDate = parseDate(startDateString);
    if (!startDate) {
      startDate = null;
    }
    let endDateString = req.query.endDate;
    let endDate = parseDate(endDateString);
    if (!endDate) {
      endDate = null;
    }
    let orders = await this._orderService.allOrders(limit, sort, {
      startDate,
      endDate,
    });

    res.send(orders);
  };

  addOrder = async (req, res) => {
    //TODO: add validation
    let productName = req.body.productName;
    let categoryID = req.body.categoryID;
    let productPrice = req.body.productPrice;
    let productDescription = req.body.productDescription;
    let buyerID = req.body.buyerID;
    let newOrder = await this._orderService.addOrder(
      productName,
      categoryID,
      productPrice,
      productDescription,
      buyerID
    );
    res.send(newOrder);
  };

  deleteOrder = async (req, res) => {
    await this._orderService.deleteOrder(req.params.id);
    res.status(204).send("");
  };

  findOrderById = async (req, res) => {
    res.send(await this._orderService.findOrderById(req.params.id));
  };

  updateOrderById = async (req, res) => {
    res.send(await this._orderService.updateOrder(req.params.id, req.body));
  };
}

module.exports = OrderController;
