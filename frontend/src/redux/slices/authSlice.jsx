import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',

  initialState: {
    isSignedIn: false,
    user: {},
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload,
      state.isSignedIn= true
    },
    logout: (state) => {
      state.user = null,
      state.isSignedIn = false
    }
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer