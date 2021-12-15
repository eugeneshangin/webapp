import { Mutations as BaseMutations } from 'vuex-smart-module'
import State from './state'
import { User } from './types'

export default class Mutations extends BaseMutations<State> {
  setUser (user: User): void {
    this.state.user = user
  }
  setIsPreloaded (value: boolean): void {
    this.state.isPreloaded = value
  }
}
