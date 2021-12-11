import { Mutations as BaseMutations } from 'vuex-smart-module'
import State from './state'
import { WorkExample } from './types'

export default class Mutations extends BaseMutations<State> {
  setIsPreloaded (value: boolean): void {
    this.state.isPreloaded = value
  }

  setWorks (works: WorkExample[]): void {
    this.state.works = works
  }
}
