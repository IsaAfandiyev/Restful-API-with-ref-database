const categoryModel = require("../model/categoryModel");

class CategoryRepo {
  constructor() {
    this._categoryModel = categoryModel();
  }
  allCategories = async (limit) => {
    let f = this._categoryModel.find();
    if (limit) {
      f = f.limit(limit);
    }
    return await f.exec();
  };
  addCategory = async (categoryName, categoryDescription) => {
    const newCategory = this._categoryModel({
      categoryName,
      categoryDescription,
    });
    return await newCategory.save();
  };

  deleteCategory = async (categoryId) => {
    return await this._categoryModel.findByIdAndDelete(categoryId).exec();
  };

  getByIdCategory = async (id) => {
    return await this._categoryModel.findById(id).exec();
  };
}

module.exports = CategoryRepo;
