import { Routes, Route } from "react-router"

import { AuthLayout } from "@/layouts/authLayout/AuthLayout"
import { AppLayout } from "@/layouts/appLayout/AppLayout"

import { RegisterPage } from "@/modules/auth/components/RegisterPage"
import { LoginPage } from "@/modules/auth/components/LoginPage"


function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/onboarding" element={<LoginPage />} />
          </Route>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        
      </Routes>
    </>
  )
}

export default App
