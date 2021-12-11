import axios, { AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
  baseURL: '/api',
  withCredentials: true
}

const ax = axios.create(config)

export default ax
