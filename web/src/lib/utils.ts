import { AxiosError } from "axios"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { ERROR_BAD_REQUEST } from "@/constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ValidationErrorResponse {
  errors?: Record<string, string[]>;
  success: boolean;
  message: string;
}

export function handleAPIError(error: AxiosError<ValidationErrorResponse>) {
  if (error.code === ERROR_BAD_REQUEST) {
    if (error.response?.data?.errors) {
      const errors = error.response.data.errors
      const fieldErrors: Record<string, string> = {}
      Object.keys(errors).forEach(field => {
        fieldErrors[field] = errors[field][0] // Get first error message
      })

      return {
        success: false,
        message: ERROR_BAD_REQUEST,
        errors: fieldErrors,
      }

    }
  }
  return {
    success: false,
    message: error.message,
  }
}

export function setLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value)
}

export function getLocalStorage(key: string) {
  return localStorage.getItem(key)
}

export function removeLocalStorage(key: string) {
  localStorage.removeItem(key)
}
