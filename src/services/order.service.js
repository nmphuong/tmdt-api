import { getQuerySchema } from '../api/fetch.api'

class OrderService {
  async getAllOrder (query) {
    var queryString = ''
    var keys = Object.keys(query)
    if (keys.length > 0) {
      keys.forEach(key => {
        if (keys.indexOf(key) === 0) {
          queryString = queryString + '?'
        }
        queryString = queryString + key + '=' + query[key]
        if (keys.indexOf(key) < keys.length - 1) {
          queryString = queryString + '&'
        }
      })
    }
    var data = await getQuerySchema({
      token: true,
      path: 'order/list/all' + queryString
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async getOrderUnpaid (query) {
    var queryString = ''
    var keys = Object.keys(query)
    if (keys.length > 0) {
      keys.forEach(key => {
        if (keys.indexOf(key) === 0) {
          queryString = queryString + '?'
        }
        queryString = queryString + key + '=' + query[key]
        if (keys.indexOf(key) < keys.length - 1) {
          queryString = queryString + '&'
        }
      })
    }
    var data = await getQuerySchema({
      token: true,
      path: 'order/list/unpaid' + queryString
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async getToShipOrder (query) {
    var queryString = ''
    var keys = Object.keys(query)
    if (keys.length > 0) {
      keys.forEach(key => {
        if (keys.indexOf(key) === 0) {
          queryString = queryString + '?'
        }
        queryString = queryString + key + '=' + query[key]
        if (keys.indexOf(key) < keys.length - 1) {
          queryString = queryString + '&'
        }
      })
    }
    var data = await getQuerySchema({
      token: true,
      path: 'order/list/toship' + queryString
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async getShippingOrder (query) {
    var queryString = ''
    var keys = Object.keys(query)
    if (keys.length > 0) {
      keys.forEach(key => {
        if (keys.indexOf(key) === 0) {
          queryString = queryString + '?'
        }
        queryString = queryString + key + '=' + query[key]
        if (keys.indexOf(key) < keys.length - 1) {
          queryString = queryString + '&'
        }
      })
    }
    var data = await getQuerySchema({
      token: true,
      path: 'order/list/shipping' + queryString
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async getCompletedOrder (query) {
    var queryString = ''
    var keys = Object.keys(query)
    if (keys.length > 0) {
      keys.forEach(key => {
        if (keys.indexOf(key) === 0) {
          queryString = queryString + '?'
        }
        queryString = queryString + key + '=' + query[key]
        if (keys.indexOf(key) < keys.length - 1) {
          queryString = queryString + '&'
        }
      })
    }
    var data = await getQuerySchema({
      token: true,
      path: 'order/list/completed' + queryString
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async getCancelOrder (query) {
    var queryString = ''
    var keys = Object.keys(query)
    if (keys.length > 0) {
      keys.forEach(key => {
        if (keys.indexOf(key) === 0) {
          queryString = queryString + '?'
        }
        queryString = queryString + key + '=' + query[key]
        if (keys.indexOf(key) < keys.length - 1) {
          queryString = queryString + '&'
        }
      })
    }
    var data = await getQuerySchema({
      token: true,
      path: 'order/list/canceled' + queryString
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async cancelAllOrder () {
    var data = await getQuerySchema({
      token: true,
      path: 'order/refuse-all-orders'
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async deliveryOrder (id) {
    var data = await getQuerySchema({
      token: true,
      path: 'order/delivery/' + id
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async getDetailOrder (id) {
    var data = await getQuerySchema({
      token: true,
      path: 'order/detail-order/' + id
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async cancelOrder (id) {
    var data = await getQuerySchema({
      token: true,
      path: 'order/cancel-order/' + id
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async acceptOrder (id) {
    var data = await getQuerySchema({
      token: true,
      path: 'order/accept-order/' + id
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
}

export default new OrderService()
