import React from "react"
import { Field } from "react-final-form"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export interface FormInputProps {
    label: string
    type: string
    name: string
}


export function FormInput({ label, type, name }: FormInputProps) {
    return (
        <Field name={name}>
            {({ input, meta }) => (
                <div className="flex flex-col gap-2">
                    <Label htmlFor={name}>{label}</Label>
                    <Input
                        {...input}
                        type={type}
                        id={name}
                    />
                    {meta.error && meta.touched && <span className="text-red-500">{meta.error}</span>}
                </div>
            )}
        </Field>
    )
}