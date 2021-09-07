import cc from "classcat";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode | string;
  className?: string;
  isStrong?: boolean;
  onClick?: () => void;
  tabIndex?: number;
  to?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  className,
  onClick,
  isStrong,
  tabIndex,
  to,
  type,
}: ButtonProps) {
  return to ? (
    <Link href={to}>
      <a
        className={cc([
          styles.button,
          className,
          { [styles.strong]: isStrong },
        ])}
      >
        {children}
      </a>
    </Link>
  ) : (
    <button
      className={cc([
        styles.button,
        className,
        {
          [styles.strong]: isStrong,
        },
      ])}
      onClick={onClick}
      tabIndex={tabIndex}
      type={type}
    >
      {children}
    </button>
  );
}
