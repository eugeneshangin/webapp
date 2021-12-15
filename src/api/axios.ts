import axios, { AxiosRequestConfig } from 'axios'
import { SessionStorage } from 'quasar'

const config: AxiosRequestConfig = {
  baseURL: '/api',
  withCredentials: true,
  headers: {
    authorization: SessionStorage.getItem('authorization') ?? ''
  }
}

const ax = axios.create(config)

ax.interceptors.response.use(
  r => r,
  e => {
    if (axios.isAxiosError(e)) {
      const r = e.response
      if (r && r.status === 401) {
        window.location.href = window.location.origin + '/login'
      }
    }
    return
  }
)

function setAuthToken (token: string): void {
  ax.defaults.headers = {
    authorization: token
  }
}

export default ax

export {
  setAuthToken
}
