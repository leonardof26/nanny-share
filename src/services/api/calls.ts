import { api } from './index'

type newsLetterUser = {
  name: string
  email: string
}

export const newsLetter = {
  saveNewUser: (body: newsLetterUser) => api.post('challenge-newsletter', body),
}
