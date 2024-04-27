import "./textarea.css";

interface ButtonProps {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

// TODO: add sizes

export default function RoundTextarea({ placeholder, onChange }: ButtonProps) {
  return (
    <textarea
      className={"round-textarea"}
      placeholder={placeholder}
      onChange={onChange ? onChange : () => {}}
    />
  );
}
