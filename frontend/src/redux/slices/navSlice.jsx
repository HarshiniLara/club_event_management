import { createSlice } from '@reduxjs/toolkit'

export const navSlice = createSlice({
  name: 'nav',

  initialState: {
    page: "",
  },

  reducers: {
    setActive: (state, action) => {
      state.page = action.payload
      
    },
  },
})

export const { setActive } = navSlice.actions

export default navSlice.reducer