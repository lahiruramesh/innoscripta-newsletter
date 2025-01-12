
import { Form } from "react-final-form"
import { FORM_ERROR } from "final-form"
import { useDispatch } from "react-redux"
import { setSession } from "../features/index"
import { login } from "../service"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FormInput } from "@/components/form/FormInput"
import { FormButton } from "@/components/form/FormButton"
import { RedirectLink } from "./RedirectLink"
import { useNavigate } from "react-router"

export interface LoginFormProps {
  email: string
  password: string
}

export function LoginPage() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = async (formData: LoginFormProps) => {
    const response = await login(formData)
    if (!response.success) {
      return { [FORM_ERROR]: "Login failed. Please check your credentials and try again." }
    }
    dispatch(setSession({ isAuthenticated: true }))
    navigate("/")
  }

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitError }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                  <FormInput name="email" type="email" label="Email" />
                  <FormInput name="password" type="password" label="Password" />
                  {submitError && <div className="text-red-500">{submitError}</div>}
                  <FormButton type="submit" className="btn-primary">
                    Login
                  </FormButton>
                </div>
                <RedirectLink
                  label="Don't have an account?"
                  redirect="/auth/register"
                  text="Register"
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
