import authService from '../services/auth.service'

class AuthStore {
  async login (query) {
    var data = await authService.login(query)
    return data
  }
  async register (query) {
    var data = await authService.register(query)
    return data
  }
  async checkPhoneExists (phone) {
    var data = await authService.checkPhoneExists(phone)
    return data
  }
  async getProfile () {
    var data = await authService.getProfile()
    return data
  }
  async updateEmail (email) {
    var data = await authService.updateEmail(email)
    return data
  }
}

export default new AuthStore()