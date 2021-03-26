import shippingService from '../services/shipping.service'

class ShippingStore {
  async getAllShipping () {
    var data = await shippingService.getAllShipping()
    return data
  }
  async activeShipping (id) {
    var data = await shippingService.activeShipping(id)
    return data
  }
  async codShipping (id) {
    var data = await shippingService.codShipping(id)
    return data
  }
  async prioritizeShipping (id) {
    var data = await shippingService.prioritizeShipping(id)
    return data
  }
  async getShippingShop (id) {
    var data = await shippingService.getShippingShop(id)
    return data
  }
}

export default new ShippingStore()