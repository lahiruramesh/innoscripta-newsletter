import { get } from "lodash"
import { RootState } from "@/store"

export const getSession = (state: RootState) => get(state, "auth.isAuthenticated", false)