import { NavLink } from "react-router"

interface RedirectLinkProps {
    label: string
    redirect: string
    text: string
    className?: string
}

export function RedirectLink({ label, redirect, text, className }: RedirectLinkProps) {
    return (
        <div className={`text-center text-sm ${className}`}>
            {`${label} `}
            <NavLink to={redirect} className="underline underline-offset-4">
                {text}
            </NavLink>
        </div>
    )
}