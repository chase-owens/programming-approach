import styles from "./AccomplishmentsAndGoals.module.scss";

export interface AccomplishmentsAndGoalsProps {
  accomplishments: string[];
}

const AccomplishmentsAndGoals = ({
  accomplishments,
}: AccomplishmentsAndGoalsProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>What will you be able to accomplish?</h2>
      <ul>
        {accomplishments.map((accomplishment) => (
          <li key={accomplishment}>{accomplishment}</li>
        ))}
      </ul>
    </div>
  );
};

export default AccomplishmentsAndGoals;
