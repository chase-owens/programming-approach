import router from "next/router";
import Button from "../../shared/Button";
import AccomplishmentsAndGoals from "./AccomplishmentsAndGoals";
import EnablingRepertoires from "./EnablingRepertoires";
import styles from "./ProgramInfo.module.scss";

interface ProgramInfoProps {
  accomplishments: string[];
  courseId: string;
  enablingRepertoires: string[];
  programSteps?: string[];
}

const ProgramInfo = ({
  accomplishments,
  courseId,
  enablingRepertoires,
}: ProgramInfoProps) => {
  const handleAssessmentClick = () => {
    router.push({
      pathname: `/course/[courseId]/assessment`,
      query: { courseId },
    });
  };

  return (
    <section className={styles.container}>
      <Button isStrong onClick={handleAssessmentClick}>
        Begin Assessment
      </Button>
      <div className={styles.containerContent}>
        <AccomplishmentsAndGoals accomplishments={accomplishments} />
        <EnablingRepertoires enablingRepertoires={enablingRepertoires} />
      </div>
    </section>
  );
};

export default ProgramInfo;
