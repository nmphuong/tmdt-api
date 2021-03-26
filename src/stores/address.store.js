import addressService from '../services/address.service'

class AddressStore {
  async addAddress (addess) {
    var data = await addressService.addAddress(addess)
    return data
  }
  async getAllAddress () {
    var data = await addressService.getAllAddress()
    return data
  }
  async updateAddress (addess, id) {
    var data = await addressService.updateAddress(addess, id)
    return data
  }
  async deleteAddress (id) {
    var data = await addressService.deleteAddress(id)
    return data
  }
}

export default new AddressStore()