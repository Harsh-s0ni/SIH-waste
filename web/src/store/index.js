import { configureStore } from '@reduxjs/toolkit'
import Signin  from './Signin/reducer'

export const store = configureStore({
  reducer: {
    User: Signin
  },
})