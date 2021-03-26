import axios from 'axios'
import { ROOT_URL } from '../constant/constant'
export const api = axios.create({
  baseURL: ROOT_URL
})