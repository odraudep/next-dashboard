export interface IUser {
  firstName: string
  lastName: string
  email: string
  avatar?: string
  isAdmin: boolean
  device?: 'mobile' | 'desktop'
  country?: string
}
