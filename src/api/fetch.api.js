import { api } from './api'

export const getQuerySchema = async (schema) => {
  var headers = {}
  if (schema.hasOwnProperty('token') && schema.token === true) {
    headers.Authorization = "Bearer " + localStorage.getItem('j6VDAJXFnY-user-rokida')
  }
  var data = await api.get(schema.path, {
    headers: headers
  })
  return data
}
export const postQuerySchema = async (schema) => {
  var headers = {
  }
  if (schema.hasOwnProperty('token') && schema.token === true) {
    headers.Authorization = "Bearer " + localStorage.getItem('j6VDAJXFnY-user-rokida')
  }
  var data = await api.post(schema.path, schema.data, {
    headers: headers
  })
  return data
}
export const postDataSchema = async (schema) => {
  var headers = {
    "Content-Type":'multipart/form-data'
  }
  if (schema.hasOwnProperty('token') && schema.token === true) {
    headers.Authorization = "Bearer " + localStorage.getItem('j6VDAJXFnY-user-rokida')
  }
  var data = await api.post(schema.path, schema.data, {
    headers: headers
  })
  return data
}