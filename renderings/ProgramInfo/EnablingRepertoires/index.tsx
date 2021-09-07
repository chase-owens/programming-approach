import styles from "./EnablingRepertoires.module.scss";

interface EnablingRepertoiresProps {
  enablingRepertoires: string[];
}

const EnablingRepertoires = ({
  enablingRepertoires,
}: EnablingRepertoiresProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        What skills are needed before you begin?
      </h2>
      <ul>
        {enablingRepertoires.map((enablingRepertoire) => (
          <li key={enablingRepertoire}>{enablingRepertoire}</li>
        ))}
      </ul>
    </div>
  );
};

export default EnablingRepertoires;
