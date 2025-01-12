import axios from "axios"
import { API_URL } from "@/configs/config"
import { store } from "@/store"
import { resetSession } from "@/modules/auth/features"
import { getLocalStorage, removeLocalStorage } from "./utils"
import { LOCAL_STORAGE_TOKEN_KEY } from "@/constants"

const publicAPI = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
})

const token = getLocalStorage(LOCAL_STORAGE_TOKEN_KEY)

const privateAPI = axios.create({
    baseURL: API_URL,
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
})

privateAPI.interceptors.request.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            removeLocalStorage(LOCAL_STORAGE_TOKEN_KEY)
            store.dispatch(resetSession({ isAuthenticated: false }))
            window.location.href = "/auth/login"
        }
        return Promise.reject(error)
    }
)

export { publicAPI, privateAPI }