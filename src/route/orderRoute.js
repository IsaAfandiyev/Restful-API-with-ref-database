const express = require("express");
const initializeOrderRoute = (orderController) => {
  const router = express.Router();
  router.get("/", orderController.allOrders);
  router.post("/", orderController.addOrder);
  router.delete("/:id", orderController.deleteOrder);
  router.get("/:id", orderController.findOrderById);
  router.put("/:id", orderController.updateOrderById);

  return router;
};
module.exports = initializeOrderRoute;
