const express = require("express");
const initializeCategoryRoute = (categoryController) => {
  const router = express.Router();
  router.get("/", categoryController.allCategories);
  router.post("/", categoryController.addCategory);
  router.delete("/:id", categoryController.deleteCategory);
  router.get("/:id", categoryController.findCategoryById);
  router.put("/:id", categoryController.updateCategoryById);

  return router;
};
module.exports = initializeCategoryRoute;
