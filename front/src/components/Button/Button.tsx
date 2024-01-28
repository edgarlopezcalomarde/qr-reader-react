import { HTMLAttributes } from "react";
import "./Button.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button type="button" {...props} className="button bg-white">
      {children}
    </button>
  );
}

export default Button;
