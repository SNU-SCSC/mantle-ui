/// <reference types="react" />
import "./TextInput.css";
interface TextInputProps {
    label?: string;
}
export default function TextInput({ label, className, ...props }: TextInputProps & React.InputHTMLAttributes<HTMLInputElement>): import("react").JSX.Element;
export {};
