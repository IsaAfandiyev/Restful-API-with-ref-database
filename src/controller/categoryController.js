class CategoryController {
  constructor(categoryService) {
    this._categoryService = categoryService;
  }

  allCategories = async (req, res) => {
    let limit = req.query.limit;
    if (isNaN(parseInt(limit))) {
      limit = null;
    }

    let categorys = await this._categoryService.allCategories(limit);
    res.send(categorys);
  };

  addCategory = async (req, res) => {
    //TODO: add validation
    let categoryName = req.body.categoryName;
    let categoryDescription = req.body.categoryDescription;
    let newCategory = await this._categoryService.addCategory(
      categoryName,
      categoryDescription
    );
    res.send(newCategory);
  };

  deleteCategory = async (req, res) => {
    await this._categoryService.deleteCategory(req.params.id);
    res.status(204).send("");
  };

  findCategoryById = async (req, res) => {
    res.send(await this._categoryService.findCategoryById(req.params.id));
  };

  updateCategoryById = async (req, res) => {
    res.send(
      await this._categoryService.updateCategory(req.params.id, req.body)
    );
  };
}

module.exports = CategoryController;
