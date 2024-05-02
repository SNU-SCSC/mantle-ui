import React from "react";
import "./Button.css";
import Colors from "@/utils/colors";

interface ButtonProps {
  color?: Colors;
  accent?: boolean;
}

export default function Button({
  color,
  accent = false,
  //
  children,
  className,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className={`MT-button-root ${className || ""}`}>
      <button
        className={`MT-button MT-color-${color || ""} ${accent ? "MT-accent" : ""}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
