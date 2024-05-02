import "./Input.css";

interface ButtonProps {
  placeholder: string;
}

// TODO: add sizes

export default function RoundSquareInput({ placeholder }: ButtonProps) {
  return <input className="round-square-input" placeholder={placeholder} />;
}
