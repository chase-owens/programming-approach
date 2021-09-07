import cc from "classcat";
import Link from "next/link";
import styles from "./Card.module.scss";

export interface CardProps {
  className?: string;
  description: string;
  heading: string;
  onClick?: () => void;
  to?: string;
}

export default function Card({
  className,
  description,
  heading,
  onClick,
  to,
}: CardProps) {
  return to ? (
    <Link href={to}>
      <a className={cc([styles.card, className])}>
        <h2 className={styles.heading}>
          {heading} <span className={styles.headingArrow}>&rarr;</span>
        </h2>
        <p>{description}</p>
      </a>
    </Link>
  ) : (
    <a className={cc([styles.card, className])} onClick={onClick}>
      <h2 className={styles.heading}>
        {heading} <span className={styles.headingArrow}>&rarr;</span>
      </h2>
      <p>{description}</p>
    </a>
  );
}
