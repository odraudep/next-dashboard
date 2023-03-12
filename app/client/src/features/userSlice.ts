import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '@/interfaces/IUser'

const initialState = {
  data: {
    firstName: 'Eduardo',
    lastName: 'Pinheiro',
    email: 'eduardo@email.com',
    avatar: 'https://github.com/odraudep.png',
    isAdmin: true,
  } as IUser,
  isLogged: true,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export const userReducer = userSlice.reducer
