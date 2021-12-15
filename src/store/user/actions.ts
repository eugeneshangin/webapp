import { Actions as BaseActions } from 'vuex-smart-module'
import Getters from './getters'
import Mutations from './mutations'
import State from './state'
import api from 'src/api'
import { Auth, User } from './types'
import { SessionStorage } from 'quasar'
import { setAuthToken } from 'src/api'

export default class Actions extends BaseActions<
  State,
  Getters,
  Mutations,
  Actions
  > {
  async auth (p: Auth): Promise<void> {
    let user: User
    try {
      user = await api.auth.login(p)
    } catch (e) {
      return Promise.reject(e)
    }
    await this.actions.setUser(user)
  }
  async loadMe (): Promise<void> {
    let user: User
    try {
      user = await api.user.load()
    } catch (e) {
      console.error('Error load user')
      return
    }
    await this.actions.setUser(user)
  }

  setUser (user: User): Promise<void> {
    this.mutations.setUser(user)
    SessionStorage.set('authorization', user.token)
    setAuthToken(user.token)
    return Promise.resolve()
  }
}
