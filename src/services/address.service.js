import { getQuerySchema, postDataSchema } from '../api/fetch.api'

class AddressService {
  async addAddress (address) {
    let formData = new FormData()
    var keys = Object.keys(address)
    keys.forEach(key => {
      if (address[key] !== null) {
        formData.append(key, address[key])
      }
    })
    var data = await postDataSchema({
      token: true,
      data: formData,
      path: 'address/add-address'
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async getAllAddress () {
    var data = await getQuerySchema({
      token: true,
      path: 'address/my-address'
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async updateAddress (address, id) {
    let formData = new FormData()
    var keys = Object.keys(address)
    keys.forEach(key => {
      if (address[key] !== null) {
        formData.append(key, address[key])
      }
    })
    var data = await postDataSchema({
      token: true,
      data: formData,
      path: 'address/update-address/' + id
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
  async deleteAddress (id) {
    var data = await getQuerySchema({
      token: true,
      path: 'address/delete-address/' + id
    })
    if (data.data.code !== 200) {
      return data
    } else {
      return data.data
    }
  }
}

export default new AddressService()
