import axios from 'axios'

const headers = axios.create({
  baseURL: 'https://parallelum.com.br/fipe/api/v1/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export default headers