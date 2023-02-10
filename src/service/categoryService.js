class CategoryService {
  constructor(categoryRepo) {
    this._categoryRepo = categoryRepo;
  }

  allCategories = async (limit) => {
    return await this._categoryRepo.allCategories(limit);
  };

  addCategory = async (categoryName, categoryDescription) => {
    return await this._categoryRepo.addCategory(
      categoryName,
      categoryDescription
    );
  };
  deleteCategory = async (categoryId) => {
    return await this._categoryRepo.deleteCategory(categoryId);
  };

  findCategoryById = async (categoryId) => {
    return await this._categoryRepo.getByIdCategory(categoryId);
  };

  updateCategory = async (id, body) => {
    let o = await this._categoryRepo.getByIdCategory(id);
    o.categoryName = body.categoryName ? body.categoryName : o.categoryName;
    o.categoryDescription = body.categoryDescription
      ? body.categoryDescription
      : o.categoryDescription;
    o.save();
    return o;
  };
}

module.exports = CategoryService;
