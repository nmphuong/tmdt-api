import { getQuerySchema, postDataSchema } from '../api/fetch.api'

class ProductService {
  async getAllProduct (query) {
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
      path: 'product/list/all' + queryString
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async getActiveProduct (query) {
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
      path: 'product/list/action' + queryString
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async getSoldoutProduct (query) {
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
      path: 'product/list/soldout' + queryString
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async getUnlistedProduct (query) {
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
      path: 'product/list/unlisted' + queryString
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async getAllProductBannedAction (query) {
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
      path: 'product/banned/action' + queryString
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async getAllProductBannedDeleted (query) {
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
      path: 'product/banned/deleted' + queryString
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async addProduct(product) {
    var keys = Object.keys(product)
    let formData = new FormData()
    keys.forEach(key => {
      if (key === 'thumb' || key === 'image' || key === 'img_user_manual' || key === 'imgSize' || key === 'classify_key' || key === 'classify_value' || key === 'classify_warehouse' || key === 'classify_price' || key === 'classify_sku' || key === 'classify_image' || key === 'discount_from' || key === 'discount_to' || key === 'discount_price' || key === 'fees' || key === 'ship_channel_id') {
        if (product[key].length !== 0) {
          for(var i = 0; i < product[key].length; i++) {
            formData.append(key + '[' + i + ']', product[key][i])
          }
        }
      } else {
        // if (product[key] !== null) {
          formData.append(key, product[key])
        // }
      }
    })
    var data = await postDataSchema({
      token: true,
      data: formData,
      path: 'product/add-product'
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async updateProduct(product, id) {
    // console.log(product)
    var keys = Object.keys(product)
    let formData = new FormData()
    keys.forEach(key => {
      if (key === 'thumb' || key === 'image' || key === 'img_user_manual' || key === 'imgSize' || key === 'classify_key' || key === 'classify_value' || key === 'classify_warehouse' || key === 'classify_price' || key === 'classify_sku' || key === 'classify_image' || key === 'discount_from' || key === 'discount_to' || key === 'discount_price' || key === 'fees' || key === 'ship_channel_id') {
        if (product[key].length !== 0) {
          for(var i = 0; i < product[key].length; i++) {
            formData.append(key + '[' + i + ']', product[key][i])
          }
        }
      } else {
        // if (product[key] !== null) {
          formData.append(key, product[key])
        // }
      }
    })
    var data = await postDataSchema({
      token: true,
      data: formData,
      path: 'product/update-product/' + id
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async getDetailProduct (id) {
    var data = await getQuerySchema({
      token: true,
      path: 'product/detail/' + id
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async regimeProduct (id) {
    var data = await getQuerySchema({
      token: true,
      path: 'product/show-hide-product/' + id
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async deletedProduct (id) {
    var data = await getQuerySchema({
      token: true,
      path: 'product/delete-product/' + id
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
}

export default new ProductService()
