import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '@/interfaces/IUser'

const initialState = [
  {
    firstName: 'Eduardo',
    lastName: 'Pinheiro',
    email: 'eduardo@email.com',
    avatar: 'https://github.com/odraudep.png',
    isAdmin: true,
    device: 'mobile',
    country: 'Brazil',
  },
  {
    firstName: 'Gustavo',
    lastName: 'Silva',
    email: 'gustavo@email.com',
    avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    isAdmin: true,
    device: 'desktop',
    country: 'Brazil',
  },
  {
    firstName: 'Kevin',
    lastName: 'Petters',
    email: 'kevin.petters@email.com',
    avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    isAdmin: true,
    device: 'desktop',
    country: 'USA',
  },
] as IUser[]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export const usersReducer = usersSlice.reducer
