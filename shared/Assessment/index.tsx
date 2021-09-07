import { FC, useEffect, useState } from "react";
import Button from "../../shared/Button";
import useModalState from "../../util/useModalState";
import BreadCrumb from "../Breadcrumb";
import Modal from "react-modal";
import styles from "./Assessment.module.scss";
import QuestionModule from "./QuestionModule";
import { QuestionModule as Question } from "./models";
import useAssessment, { AsessmentAction } from "./util/useAssessment";

interface AssessmentProps {
  questions: Question[];
}

const Assessment: FC<AssessmentProps> = ({ questions }) => {
  const {
    dispatch,
    state: { doesAnswerMeetCriteria, questionIndex },
  } = useAssessment(questions);

  const question = questions[questionIndex];

  const [code, setCode] = useState("");

  const { closeModal, isOpen, openModal } = useModalState();

  useEffect(() => {
    if (doesAnswerMeetCriteria === null) {
      return;
    }
    openModal();
  }, [doesAnswerMeetCriteria]);

  useEffect(() => {
    setCode("");
  }, [questionIndex]);

  const handleSubmitAnswer = () =>
    dispatch({ type: AsessmentAction.submit, payload: code });

  const handleGoBack = () => dispatch({ type: AsessmentAction.previous });

  const handleCloseModal = () => {
    if (doesAnswerMeetCriteria) {
      dispatch({ type: AsessmentAction.next });
    } else {
      dispatch({ type: AsessmentAction.tryAgain });
    }

    closeModal();
  };

  return (
    <section className={styles.assessment}>
      <BreadCrumb
        breadcrumbs={questions.map((question) => question.skills)}
        stepIndex={questionIndex}
      />
      <QuestionModule module={question} onChange={setCode} value={code} />
      {questionIndex > 0 && (
        <span className={styles.prevNextLink} onClick={handleGoBack}>
          Previous
        </span>
      )}
      <Button onClick={handleSubmitAnswer}>Submit</Button>
      <Modal
        className={styles.modal}
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        overlayClassName={styles.modalOverlay}
      >
        <div className={styles.modalInner}>
          {doesAnswerMeetCriteria
            ? question.successMessage
            : question.errorMessage}
        </div>
      </Modal>
    </section>
  );
};

export default Assessment;
