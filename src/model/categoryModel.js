const mongoose = require("mongoose");

const categoryModel = () => {
  const categorySchema = mongoose.Schema({
    categoryName: String,
    categoryDescription: String,
  });
  return mongoose.model("category", categorySchema);
};

module.exports = categoryModel;
