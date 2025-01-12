import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { set } from "lodash"

export interface User {
    id: string
    name: string
    email: string
    isOnboarded: boolean
}

export interface AuthState {
    isAuthenticated: boolean
}

const initialState: AuthState = {
    isAuthenticated: false,
}

export const STATE_AUTH = "auth"

const authSlice = createSlice({
    name: STATE_AUTH,
    initialState,
    reducers: {
        setSession(state, action: PayloadAction<AuthState>) {
            set(state, "isAuthenticated", action.payload.isAuthenticated)
        },
        resetSession(state, action: PayloadAction<AuthState>) {
            set(state, "isAuthenticated", action.payload.isAuthenticated)
        },
    },
})

export const { setSession, resetSession } = authSlice.actions

export default authSlice.reducer