import "./TextInput.css";

interface TextInputProps {
  label?: string;
}

export default function TextInput({
  label,
  //
  className,
  ...props
}: TextInputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={`MT-textinput-root ${className || ""}`}>
      {label && <label className="MT-textinput-label"> {label} </label>}
      <input className={`MT-textinput`} {...props} />
    </div>
  );
}
