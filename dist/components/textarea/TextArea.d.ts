import React from "react";
import "./TextArea.css";
interface TextAreaProps {
    label?: string;
    resizable?: boolean;
}
export default function TextArea({ label, resizable, className, ...props }: TextAreaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>): React.JSX.Element;
export {};
