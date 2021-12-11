import { Actions as BaseActions } from 'vuex-smart-module'
import Getters from './getters'
import Mutations from './mutations'
import State from './state'
import { works } from 'src/api'
import { WorkExample } from './types'

export default class Actions extends BaseActions<
  State,
  Getters,
  Mutations,
  Actions
  > {
  async loadWorks (): Promise<void> {
    let examples: WorkExample[]
    try {
      examples = await works.getWorks()
    } catch (e) {
      return Promise.reject(e)
    }

    this.mutations.setIsPreloaded(true)
    this.mutations.setWorks(examples)
  }

  async addWorkExample (work: WorkExample): Promise<void> {
    try {
      await works.addWorkExample(work)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
