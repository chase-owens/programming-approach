import { FC } from "react";
import styles from "./BreadCrumb.module.scss";
import Crumb from "./Crumb";

interface BreadCrumbProps {
  breadcrumbs: string[][];
  stepIndex: number;
}

const BreadCrumb: FC<BreadCrumbProps> = ({ breadcrumbs, stepIndex }) => (
  <div className={styles.journey}>
    {breadcrumbs.map((crumbs, index) => (
      <div className={styles.journeyCrumbs} key={crumbs[0]}>
        {index !== stepIndex ? (
          crumbs.map((crumb) => (
            <Crumb
              isComplete={index < stepIndex}
              description={crumb}
              key={crumb}
            />
          ))
        ) : (
          <div>
            <div className={styles.questionProgress}>
              <div
                className={styles.questionProgressAmount}
                style={{
                  flexBasis: `${Math.round(
                    (stepIndex / breadcrumbs.length) * 100
                  )}%`,
                }}
              />
            </div>
            {crumbs.map((crumb) => (
              <Crumb description={crumb} key={crumb} />
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
);

export default BreadCrumb;
