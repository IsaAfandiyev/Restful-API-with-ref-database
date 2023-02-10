const express = require("express");
let cors = require("cors");
//
const OrderController = require("./src/controller/orderController");
const initializeOrderRoute = require("./src/route/orderRoute");
const OrderService = require("./src/service/orderService");
const OrderRepo = require("./src/repository/orderRepo");
//
const CategoryController = require("./src/controller/categoryController");
const initializeCategoryRoute = require("./src/route/categoryRoute");
const CategoryService = require("./src/service/categoryService");
const CategoryRepo = require("./src/repository/categoryRepo");
//
const BuyerController = require("./src/controller/buyerController");
const initializeBuyerRoute = require("./src/route/buyerRoute");
const BuyerService = require("./src/service/buyerService");
const BuyerRepo = require("./src/repository/buyerRepo");
//
const mongoose = require("mongoose");
const app = express();
const port = 8080;
require("dotenv").config();
mongoose
  .connect(process.env.CONNECTAPI)
  .then(() => console.log("connected to Mongoose!"));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());
//
let orderRepo = new OrderRepo();
let orderService = new OrderService(orderRepo);
let orderController = new OrderController(orderService);
let orderRouter = initializeOrderRoute(orderController);
//
let categoryRepo = new CategoryRepo();
let categoryService = new CategoryService(categoryRepo);
let categoryController = new CategoryController(categoryService);
let categoryRouter = initializeCategoryRoute(categoryController);
//
let buyerRepo = new BuyerRepo();
let buyerService = new BuyerService(buyerRepo);
let buyerController = new BuyerController(buyerService);
let buyerRouter = initializeBuyerRoute(buyerController);

app.use("/api/orders", orderRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/buyers", buyerRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
