import "./TextInput.css";
import React from "react";
interface TextInputProps {
    label?: string;
}
export default function TextInput({ label, className, ...props }: TextInputProps & React.InputHTMLAttributes<HTMLInputElement>): React.JSX.Element;
export {};
