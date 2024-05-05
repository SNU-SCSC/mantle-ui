import React from "react";
import "./Button.css";
import Colors from "@/utils/colors";
interface ButtonProps {
    color?: Colors;
    accent?: boolean;
}
export default function Button({ color, accent, children, className, ...props }: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>): React.JSX.Element;
export {};
