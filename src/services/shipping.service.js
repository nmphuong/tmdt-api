import { getQuerySchema, postDataSchema } from '../api/fetch.api'

class ShippingService {
  async getAllShipping () {
    var data = await getQuerySchema({
      token: true,
      path: 'shipping/all'
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }

  async activeShipping (id) {
    let formData = new FormData()
    formData.append('active', true)
    var data = await postDataSchema({
      token: true,
      data: formData,
      path: 'shipping/add-shipping/' + id
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }

  async codShipping (id) {
    let formData = new FormData()
    formData.append('cod', true)
    var data = await postDataSchema({
      token: true,
      data: formData,
      path: 'shipping/add-shipping/' + id
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }

  async prioritizeShipping (id) {
    let formData = new FormData()
    formData.append('prioritize', true)
    var data = await postDataSchema({
      token: true,
      data: formData,
      path: 'shipping/add-shipping/' + id
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }

  async getShippingShop () {
    var data = await getQuerySchema({
      token: true,
      path: 'shipping/my-shipping'
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
}

export default new ShippingService()
