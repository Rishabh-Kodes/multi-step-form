import React from "react";
import { cn } from "../../utils/cn";

import styles from "./input.module.scss";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  errorText?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  name,
  className,
  errorText,
  ...props
}) => {
  return (
    <div className={styles["input"]}>
      <div className={styles["input__label-wrapper"]}>
        <label htmlFor={name} className={styles["input__label"]}>
          {label}
        </label>
        <span className={styles["input__error-text"]}>{errorText}</span>
      </div>
      <input
        name={name}
        className={cn(
          styles["input__control"],
          errorText ? styles["input__control--error"] : "",
          className
        )}
        autoComplete="off"
        {...props}
      />
    </div>
  );
};

export default Input;
