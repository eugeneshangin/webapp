import ax from 'src/api/axios'
import { WorkExample } from 'src/store/works/types'

export const works = {
  baseURL: '/works',

  getWorks: async (): Promise<WorkExample[]> => {
    const r = await ax.get(works.baseURL)
    return r.data as WorkExample[]
  }
}
