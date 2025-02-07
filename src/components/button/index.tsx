import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "../../utils/cn";
import styles from "./button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: "primary" | "ghost";
};

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  return (
    <button
      className={cn(styles["button"], styles[`button--${variant}`], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
