import "../../styles/button.css";

interface ButtonProps {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  variant: "cancel" | "save";
  clickHandler?: () => void;
  label?: string;
}

const Button = ({ type, variant, clickHandler, label }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={clickHandler}
      className={`btn btn--${variant}`}
    >
      {label}
    </button>
  );
};

export default Button;
