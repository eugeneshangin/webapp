import { createStore, Module } from 'vuex-smart-module'
import { worksModule } from './works'


const store = createStore(
  new Module({
    modules: {
      works: worksModule,
    },
  }),
)

export const worksStore = worksModule.context(store)
export default store
