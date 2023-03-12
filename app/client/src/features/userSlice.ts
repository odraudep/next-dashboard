import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '@/interfaces/IUser'

const initialState = {
  data: {
    firstName: 'Ling',
    lastName: 'Pinheiro',
    email: 'ling.pinheiro@email.com',
    avatar:
      'https://petz.com.br/blog/wp-content/uploads/2020/08/calopsita-no-cio.jpg',
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
