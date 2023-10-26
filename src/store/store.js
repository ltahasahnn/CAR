import { configureStore } from "@reduxjs/toolkit"
import UserManagement from "./features/UserManagement"

export const store = configureStore({
  reducer: {
    UserManagement: UserManagement
  }
})
