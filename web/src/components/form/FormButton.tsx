import React from "react"
import { Button } from "@/components/ui/button"

export interface FormButtonProps {
    type: "submit" | "reset" | "button"
    className?: string
    children: React.ReactNode
}

export function FormButton({ type, className, children }: FormButtonProps) {
    return (
        <Button type={type} className={`btn ${className}`}>
            {children}
        </Button>
    )
}