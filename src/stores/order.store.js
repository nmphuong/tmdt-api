import orderService from '../services/order.service'

class OrderStore {
  async getAllOrder (query) {
    var data = await orderService.getAllOrder(query)
    return data
  }
  async getOrderUnpaid (query) {
    var data = await orderService.getOrderUnpaid(query)
    return data
  }
  async getToShipOrder (query) {
    var data = await orderService.getToShipOrder(query)
    return data
  }
  async getShippingOrder (query) {
    var data = await orderService.getShippingOrder(query)
    return data
  }
  async getCompletedOrder (query) {
    var data = await orderService.getCompletedOrder(query)
    return data
  }
  async getCancelOrder (query) {
    var data = await orderService.getCancelOrder(query)
    return data
  }
  async cancelAllOrder () {
    var data = await orderService.cancelAllOrder()
    return data
  }
  async deliveryOrder (id) {
    var data = await orderService.deliveryOrder(id)
    return data
  }
  async getDetailOrder (id) {
    var data = await orderService.getDetailOrder(id)
    return data
  }
  async cancelOrder (id) {
    var data = await orderService.cancelOrder(id)
    return data
  }
  async acceptOrder (id) {
    var data = await orderService.acceptOrder(id)
    return data
  }
}

export default new OrderStore()