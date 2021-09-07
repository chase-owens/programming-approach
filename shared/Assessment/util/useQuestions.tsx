import { useState } from "react";
import { QuestionModule } from "../models";

const useQuestions = (
  questions: QuestionModule[],
  initialQuestion: number = 0
) => {
  const [questionIndex, setQuestionIndex] = useState(initialQuestion);

  return {
    prevQuestion:
      questionIndex > 0 ? () => setQuestionIndex(questionIndex - 1) : undefined,
    question: questions[questionIndex],
    questionIndex,
    nextQuestion:
      questionIndex < questions.length - 1
        ? () => setQuestionIndex(questionIndex + 1)
        : undefined,
  };
};

export default useQuestions;
