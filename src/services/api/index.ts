import axios from 'axios'

const baseURL = 'https://api.jungledevs.com/api/v1'

const api = axios.create({
  baseURL,
})

export { api }
