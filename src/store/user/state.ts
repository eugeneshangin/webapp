import { User } from './types'

export default class State {
  user: User | null = null
  isPreloaded = false
}
