/// <reference types="react" />
import "./TextArea.css";
interface TextAreaProps {
    label?: string;
    resizable?: boolean;
}
export default function TextArea({ label, resizable, className, ...props }: TextAreaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>): import("react").JSX.Element;
export {};
