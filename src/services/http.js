import axios from 'axios'
import baseURL from './url'

export default axios.create({
  baseURL
})