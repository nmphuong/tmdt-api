import { getQuerySchema } from '../api/fetch.api'

class ProductService {
  async getAllCategory (query) {
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
      token: false,
      path: 'category/list' + queryString
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
}

export default new ProductService()
