import React from "react";
import { cn } from "../../utils/cn";
import styles from "./switch.module.scss";

type SwitchProps = React.InputHTMLAttributes<HTMLInputElement> & {};

const Switch: React.FC<SwitchProps> = ({ className, ...rest }) => {
  return (
    <input
      className={cn(styles["switch"], className)}
      {...rest}
      type="checkbox"
    />
  );
};

export default Switch;
