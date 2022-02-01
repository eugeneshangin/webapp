import { worksModule } from './index'
import { createStore } from 'vuex'
import { registerModule } from 'vuex-smart-module'
import api from 'src/api'

const mockStore = createStore({})

registerModule(mockStore, 'works', 'works/', worksModule)

jest.mock('src/api', () => ({
  ...{},
  works: {
    getWorks: jest.fn(() => {
      return [{
        url: 'url'
      }]
    }),
    addWorkExample: jest.fn()
  }
}))

const worksStore = worksModule.context(mockStore)

beforeEach(() => {
  jest.clearAllMocks()
  worksStore.state.isPreloaded = false
  worksStore.state.works = []
})

describe('Works actions tests', () => {
  it('Load works', async () => {
    expect.hasAssertions()
    expect(worksStore.state.isPreloaded).toBeFalsy()
    expect(worksStore.state.works).toHaveLength(0)
    await worksStore.actions.loadWorks()
    expect(api.works.getWorks).toBeCalledTimes(1)
    expect(worksStore.state.isPreloaded).toBeTruthy()
    expect(worksStore.state.works).toHaveLength(1)
  })

  it('Add works', async () => {
    expect.hasAssertions()
    expect(api.works.addWorkExample).toBeCalledTimes(0)
    await worksStore.actions.addWorkExample({ url: 'url' })
    expect(api.works.addWorkExample).toBeCalledTimes(1)
  })
})
