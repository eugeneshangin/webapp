import ax from 'src/api/axios'

export const message = {
  baseURL: '/message',
  send: async (msg: { text: string }): Promise<void> => {
    await ax.post(message.baseURL, msg)
  }
}
