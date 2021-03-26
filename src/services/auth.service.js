import { getQuerySchema, postQuerySchema } from '../api/fetch.api'

class AuthService {
  async login (query) {
    var data = await postQuerySchema({
      token: false,
      data: {
        phone: query.phone,
        password: query.password
      },
      path: 'login'
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async updateEmail (email) {
    var data = await postQuerySchema({
      token: true,
      data: {
        email: email,
      },
      path: 'update-email'
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async checkPhoneExists (phone) {
    var data = await postQuerySchema({
      token: false,
      data: {
        phone: phone,
      },
      path: 'check-phone-number'
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async register (query) {
    var data = await postQuerySchema({
      token: false,
      data: {
        phone: query.phone,
        password: query.password,
        name: query.name
      },
      path: 'register'
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async getProfile () {
    var data = await getQuerySchema({
      token: true,
      path: 'profile'
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
}

export default new AuthService()
