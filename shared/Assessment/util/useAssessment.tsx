import { useReducer } from "react";
import { Assessment, QuestionModule } from "../models";

export enum AsessmentAction {
  next = "next",
  previous = "previous",
  submit = "submitAnswer",
  tryAgain = "tryAgain",
}

interface DispatchAction {
  type: AsessmentAction;
  payload?: any;
}

function reducer(state: Assessment, action: DispatchAction) {
  const { questions, questionIndex } = state;

  switch (action.type) {
    case AsessmentAction.next: {
      return {
        ...state,
        doesAnswerMeetCriteria: null,
        hasCompleted: questionIndex === questions.length - 1,
        questionIndex: Math.min(questionIndex + 1, questions.length - 1),
      };
    }
    case AsessmentAction.previous: {
      return { ...state, questionIndex: questionIndex - 1 };
    }
    case AsessmentAction.submit: {
      const { targetAnswer } = questions[questionIndex];
      return {
        ...state,
        doesAnswerMeetCriteria: action.payload.includes(targetAnswer),
      };
    }
    case AsessmentAction.tryAgain: {
      return {
        ...state,
        doesAnswerMeetCriteria: null,
      };
    }
    default:
      return state;
  }
}

const useAssessment = (
  questions: QuestionModule[],
  initialQuestion: number = 0,
  hasCompleted: boolean = false
) => {
  const [state, dispatch] = useReducer(reducer, {
    doesAnswerMeetCriteria: null,
    hasCompleted,
    questionIndex: initialQuestion,
    questions,
  });

  return { state, dispatch };
};

export default useAssessment;
