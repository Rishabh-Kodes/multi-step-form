import React from "react";
import { cn } from "../../utils/cn";
import styles from "./checkbox.module.scss";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {};

const Checkbox: React.FC<CheckboxProps> = ({ className, ...rest }) => {
  return (
    <input
      className={cn(styles["checkbox"], className)}
      {...rest}
      type="checkbox"
    />
  );
};

export default Checkbox;
