import { useEffect, useState } from "react"
import { Outlet, useNavigate, useLocation } from "react-router"
import { useSelector } from "react-redux"
import { getSession } from "@/modules/auth/selectors"
import { Header } from "./Header"
import { Footer } from "./Footer"

const PUBLIC_ROUTES = ['/auth/login', '/auth/register']

export function AppLayout() {
    const navigate = useNavigate()
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(true)
    const isAuthenticated = useSelector(getSession)
    console.log(isAuthenticated)
    useEffect(() => {
        const isPublicRoute = PUBLIC_ROUTES.includes(location.pathname)
        
        if (!isAuthenticated && !isPublicRoute) {
            navigate("/auth/login", { replace: true })
        } else if (isAuthenticated && isPublicRoute) {
            navigate("/", { replace: true })
        }
        
        setIsLoading(false)
    }, [isAuthenticated, location.pathname])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-1 overflow-y-auto p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}