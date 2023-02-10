const express = require("express");
const initializeBuyerRoute = (buyerController) => {
  const router = express.Router();
  router.get("/", buyerController.allBuyers);
  router.post("/", buyerController.addBuyer);
  router.delete("/:id", buyerController.deleteBuyer);
  router.get("/:id", buyerController.findBuyerById);
  router.put("/:id", buyerController.updateBuyerById);

  return router;
};
module.exports = initializeBuyerRoute;
