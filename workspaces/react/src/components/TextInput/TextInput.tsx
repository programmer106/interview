import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

export const TextInput: React.FC<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = ({
    ...props
}) => {
    return <input {...props}/>
}