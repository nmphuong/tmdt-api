import bankService from '../services/bank.service'

class BankStore {
  async addCard (bank) {
    var data = await bankService.addCard(bank)
    return data
  }
  async getMyCards () {
    var data = await bankService.getMyCards()
    return data
  }
  async deleteCard (id) {
    var data = await bankService.deleteCard(id)
    return data
  }
  async defaultCard (id) {
    var data = await bankService.defaultCard(id)
    return data
  }
}

export default new BankStore()