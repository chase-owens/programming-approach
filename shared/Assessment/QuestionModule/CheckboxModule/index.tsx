import cc from "classcat";
import { FC } from "react";
import Heading from "../Heading";
import { CheckboxQuestion } from "../../models";
import styles from "./CheckboxModule.module.scss";

const CheckboxModule: FC<CheckboxQuestion> = ({
  id,
  options,
  question,
  type,
}) => {
  return (
    <div className={styles.checkboxes}>
      <Heading heading={question} />
      <ul>
        {options.map((option) => (
          <li className={styles.checkbox} key={option.label}>
            <input id={id} name={id} type={type} value={option.label} />
            <label
              className={cc([
                styles.checkboxLabel,
                { [styles.code]: option.code },
              ])}
            >
              {option.label}
            </label>
          </li>
        ))}
      </ul>
      <span>Select all that apply</span>
    </div>
  );
};

export default CheckboxModule;
