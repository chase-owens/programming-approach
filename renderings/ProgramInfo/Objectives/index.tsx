import styles from "./Objectives.module.scss";

interface ObjectivesProps {
  objectives: string[];
}

const Objectives = ({ objectives }: ObjectivesProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>How will you get there?</h2>
      <ul>
        {objectives.map((objective) => (
          <li key={objective}>{objective}</li>
        ))}
      </ul>
    </div>
  );
};

export default Objectives;
