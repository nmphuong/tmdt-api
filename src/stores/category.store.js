import categoryService from '../services/category.service'

class CategoryStore {
  async getAllCategory (query) {
    var data = await categoryService.getAllCategory(query)
    return data
  }
}

export default new CategoryStore()