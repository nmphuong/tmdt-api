import { getQuerySchema, postDataSchema } from '../api/fetch.api'

class BankService {
  async addCard (bank) {
    let formData = new FormData()
    var keys = Object.keys(bank)
    keys.forEach(key => {
      if (bank[key] !== null) {
        formData.append(key, bank[key])
      }
    })
    var data = await postDataSchema({
      token: true,
      data: formData,
      path: 'finance/add-cards'
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async getMyCards () {
    var data = await getQuerySchema({
      token: true,
      path: 'finance/my-cards'
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async deleteCard (id) {
    var data = await getQuerySchema({
      token: true,
      path: 'finance/delete-card/' + id
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async defaultCard (id) {
    var data = await getQuerySchema({
      token: true,
      path: 'finance/default-card/' + id
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
}

export default new BankService()
