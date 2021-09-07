export interface QuestionPropsBase {
  errorMessage: string;
  id: string;
  question: Question[];
  skills: string[];
  successMessage: string;
  targetAnswer: string;
  type: string;
}

export interface Question {
  value: string;
  type?: "code";
}

export interface CodeEditorQuestion extends QuestionPropsBase {
  type: QuestionType.CodeEditor;
  initialDeclarations: string;
}

export interface VariableBase {
  keyword: "const" | "let";
  name: string;
  value?: string;
}

export interface CheckboxQuestion extends QuestionPropsBase {
  type: QuestionType.Checkbox;
  options: Option[];
}

export interface RadioQuestion extends QuestionPropsBase {
  type: QuestionType.Radio;
  options: Option[];
}

export interface Option {
  optionId: string;
  label: string;
  code?: boolean;
}

export enum QuestionType {
  Checkbox = "checkbox",
  CodeEditor = "code",
  Radio = "radio",
}

export type QuestionModule =
  | CodeEditorQuestion
  | CheckboxQuestion
  | RadioQuestion;

export interface Assessment {
  doesAnswerMeetCriteria: boolean | null;
  hasCompleted: boolean;
  questionIndex: number;
  questions: QuestionModule[];
}
