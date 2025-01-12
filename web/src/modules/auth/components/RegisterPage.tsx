import { Form } from "react-final-form"
import { useNavigate } from 'react-router'
import { FORM_ERROR } from "final-form"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FormInput } from "@/components/form/FormInput"
import { FormButton } from "@/components/form/FormButton"
import { RedirectLink } from "./RedirectLink"

import { register } from "../service"
import { ERROR_BAD_REQUEST } from "@/constants"

export interface RegisterFormProps {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export function RegisterPage() {
  const navigate = useNavigate()
  const onSubmit = async (formData: RegisterFormProps) => {
    const response = await register(formData)
    if (!response.success) {
      // TODO: Handle field validation errors
      //if (response.message == ERROR_BAD_REQUEST) return response?.errors
      return { [FORM_ERROR]: response.message }
    }
    navigate("/auth/login")
  }

  return (
    <div className={"flex flex-col gap-6"}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Register for a new account to access the application.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitError }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                  <FormInput name="name" type="text" label="Name" />
                  <FormInput name="email" type="email" label="Email" />
                  <FormInput name="password" type="password" label="Password" />
                  <FormInput name="password_confirmation" type="password" label="Confirm Password" />
                  {submitError && <div className="text-red-500">{submitError}</div>}
                  <FormButton type="submit" className="btn-primary">
                    Register
                  </FormButton>
                </div>
                <RedirectLink
                  label="Already have an account?"
                  redirect="/auth/login"
                  text="Login"
                  className="mt-4"
                />
              </form>
            )}
          />
        </CardContent>
      </Card>
    </div>
  )
}
