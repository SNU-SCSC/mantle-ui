import "./button.css";

interface ButtonProps {
  innerText: string;
  buttonSize: "large" | "medium" | "small";
  isPrimary: boolean;
  color: "blue" | "black";
}

// TODO: add sizes

export default function RoundSquareButton({
  innerText,
  buttonSize,
  isPrimary,
  color,
}: ButtonProps) {
  return (
    <div className={`button-wrapper ${buttonSize} ${isPrimary ? "primary" : "secondary"}-${color}`}>{innerText}</div>
  );
}
