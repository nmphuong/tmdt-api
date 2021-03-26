import productService from '../services/product.service'

class ProductStore {
  async getAllProduct (query) {
    var data = await productService.getAllProduct(query)
    return data
  }
  async getActiveProduct (query) {
    var data = await productService.getActiveProduct(query)
    return data
  }
  async getSoldoutProduct (query) {
    var data = await productService.getSoldoutProduct(query)
    return data
  }
  async getUnlistedProduct (query) {
    var data = await productService.getUnlistedProduct(query)
    return data
  }
  async getAllProductBannedAction (query) {
    var data = await productService.getAllProductBannedAction(query)
    return data
  }
  async getAllProductBannedDeleted (query) {
    var data = await productService.getAllProductBannedDeleted(query)
    return data
  }
  async addProduct (product) {
    var data = await productService.addProduct(product)
    return data
  }
  async updateProduct (product, id) {
    var data = await productService.updateProduct(product, id)
    return data
  }
  async getDetailProduct (id) {
    var data = await productService.getDetailProduct(id)
    return data
  }
  async regimeProduct (id) {
    var data = await productService.regimeProduct(id)
    return data
  }
  async deletedProduct (id) {
    var data = await productService.deletedProduct(id)
    return data
  }
}

export default new ProductStore()