import { AxiosError } from "axios"

import { publicAPI } from "@/lib/axios-instance"
import { LoginFormProps } from "../components/LoginPage"
import { RegisterFormProps } from "../components/RegisterPage"
import { handleAPIError, setLocalStorage, ValidationErrorResponse } from "@/lib/utils"
import { LOCAL_STORAGE_TOKEN_KEY } from "@/constants"

export const register = async (data: RegisterFormProps) => {
    try {
        const response = await publicAPI.post("/register", data)
        return {
            success: true,
            message: response.data.message
        }
    } catch (error) {
        return handleAPIError(error as AxiosError<ValidationErrorResponse>)
    }
}

export const login = async (data: LoginFormProps) => {
    try {
        const response = await publicAPI.post("/login", data)
        if (response.data.token) {
            setLocalStorage(LOCAL_STORAGE_TOKEN_KEY, response.data.token)
        }
        return {
            success: true,
            message: response.data.message
        }
    } catch (error) {
        return handleAPIError(error as AxiosError<ValidationErrorResponse>)
    }
}

