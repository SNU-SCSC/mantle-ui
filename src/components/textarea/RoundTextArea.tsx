import "./textarea.css";

interface ButtonProps {
  placeholder: string;
}

// TODO: add sizes

export default function RoundTextarea({ placeholder }: ButtonProps) {
  return (
    <textarea className={"round-textarea"} placeholder={placeholder} />
  );
}
