import React from "react";
import multiClassName from "@/utils/multiClassName";
import "./Button.css";

type ButtonProps = {
  /* props here */
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button className={multiClassName("MT-button", className)} {...props}>
      {children}
    </button>
  );
}
