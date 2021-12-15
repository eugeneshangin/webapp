import { Module } from 'vuex-smart-module'
import Actions from './actions'
import Getters from './getters'
import Mutations from './mutations'
import State from './state'

export const userModule = new Module({
  state: State,
  getters: Getters,
  mutations: Mutations,
  actions: Actions,
})
