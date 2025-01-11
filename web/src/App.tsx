import { Routes, Route } from "react-router"

import { LoginPage } from "@/modules/auth/components/LoginPage"
import { AuthLayout } from "./layouts/authLayout/AuthLayout"
import { RegisterPage } from "./modules/auth/components/RegisterPage"


function App() {

  return (
    <>
      <Routes>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        
      </Routes>
    </>
  )
}

export default App
