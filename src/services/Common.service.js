// eslint-disable-next-line
import http from './http'

class CommonService {
  static sendForm = async (payload) => {
    const url = `/feedback.php`
    const { data } = await http.post(url, payload)
    return data
  }
  static getReviews = async () => {
    const url = `/reviews.json`
    const { data } = await http.get(url)
    return data
  }
  static getTimeTabs = async () => {
    const url = `/time.json`
    const { data } = await http.get(url)
    return data
  }
}

export default CommonService