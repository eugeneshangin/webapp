import { createStore, Module } from 'vuex-smart-module'
import { worksModule } from './works'
import { userModule } from './user'


const store = createStore(
  new Module({
    modules: {
      works: worksModule,
      user: userModule
    },
  }),
)

export const worksStore = worksModule.context(store)
export const userStore = userModule.context(store)
export default store
