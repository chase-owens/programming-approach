import cc from "classcat";
import { FC } from "react";
import styles from "./Heading.module.scss";
import { Question } from "../../models";

interface HeaderProps {
  heading: Question[];
}

const Heading: FC<HeaderProps> = ({ heading }) => {
  return (
    <div className={styles.headingWrapper}>
      <h2 className={styles.heading}>
        {heading.map(({ type, value }, index) => (
          <span
            className={cc({ [styles.code]: !!type })}
            key={`${value}-${index}`}
          >
            {value}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default Heading;
