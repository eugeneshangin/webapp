import ax from 'src/api/axios'
import { Auth, User } from 'src/store/user/types'

export const auth = {
  baseURL: '/auth',
  login: async (p: Auth): Promise<User> => {
    const r = await ax.post<User>(auth.baseURL, p)
    return r.data
  }
}
