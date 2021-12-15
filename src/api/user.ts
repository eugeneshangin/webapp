import ax from 'src/api/axios'
import { User } from 'src/store/user/types'

export const user = {
  baseURL: '/me',
  load: async (): Promise<User> => {
    const r = await ax.get<User>(user.baseURL)
    return r.data
  }
}
