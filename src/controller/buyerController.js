class BuyerController {
  constructor(buyerService) {
    this._buyerService = buyerService;
  }

  allBuyers = async (req, res) => {
    let limit = req.query.limit;
    if (isNaN(parseInt(limit))) {
      limit = null;
    }

    let buyers = await this._buyerService.allBuyers(limit);
    res.send(buyers);
  };

  addBuyer = async (req, res) => {
    //TODO: add validation
    let buyerName = req.body.buyerName;
    let buyerDescription = req.body.buyerDescription;
    let newBuyer = await this._buyerService.addBuyer(
      buyerName,
      buyerDescription
    );
    res.send(newBuyer);
  };

  deleteBuyer = async (req, res) => {
    await this._buyerService.deleteBuyer(req.params.id);
    res.status(204).send("");
  };

  findBuyerById = async (req, res) => {
    res.send(await this._buyerService.findBuyerById(req.params.id));
  };

  updateBuyerById = async (req, res) => {
    res.send(await this._buyerService.updateBuyer(req.params.id, req.body));
  };
}

module.exports = BuyerController;
