import cc from "classcat";
import { FC } from "react";
import styles from "./Crumb.module.scss";

interface CrumbProps {
  description: string | string[];
  isComplete?: boolean;
}

const Crumb: FC<CrumbProps> = ({ description, isComplete = false }) => {
  return (
    <p className={cc([styles.crumb, { [styles.isCompleted]: isComplete }])}>
      {description}
      {isComplete && <span className={styles.checkmark}>&#10003;</span>}
    </p>
  );
};

export default Crumb;
