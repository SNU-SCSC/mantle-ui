import "./button.css";

interface ButtonProps {
  innerText: string;
  buttonSize: "large" | "medium" | "small";
  isPrimary: boolean;
  color: "blue" | "black";
  onClick?: () => void;
}

// disabled 기능 넣기

export default function RoundSquareButton({
  innerText,
  buttonSize,
  isPrimary,
  color,
  onClick,
}: ButtonProps) {
  return (
    <div
      className={`button-wrapper ${buttonSize} ${isPrimary ? "primary" : "secondary"}-${color}`}
      onClick={onClick}
    >
      {innerText}
    </div>
  );
}
