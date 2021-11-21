export interface User {
  id: UniqueId
  nickname: string
  email: Email
}

export type UserCredentials = {
  email: Email
  password: string
}
