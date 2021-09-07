import { ReactNode } from "react";
import Card, { CardProps } from "../../shared/Card/index";
import styles from "./Cards.module.scss";

interface CardsProps {
  cards?: CardProps[];
  children?: ReactNode;
}

export default function Cards({ cards, children }: CardsProps) {
  return (
    <div className={styles.grid}>
      {cards?.map(({ description, heading, to }) => (
        <Card
          className={styles.card}
          description={description}
          heading={heading}
          key={`${description}`}
          to={to}
        />
      ))}
      {children && children}
    </div>
  );
}
