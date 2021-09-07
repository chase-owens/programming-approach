import { QuestionType } from "../shared/Assessment/models";

export const problems = () => {
  const q1 = {
    answer: {
      keyword: "const",
      name: "lowerCaseShipName",
    },
    id: "regex-assessment-q1",
    initialDeclarations: [
      {
        id: "q1",
        keyword: "const",
        name: "shipName",
        value: '"HMS Beagle"',
      },
    ],
    question: [
      {
        value: "Complete the declaration of",
      },
      {
        type: "code",
        value: "lowerCaseShipName",
      },
      {
        value: ", and use a string method on",
      },
      {
        type: "code",
        value: "shipName",
      },
      {
        value: "so that the value of",
      },
      {
        type: "code",
        value: "lowerCaseShipName",
      },
      {
        value: "has only lowercase characters.",
      },
    ],
    type: QuestionType.CodeEditor,
  };

  const q2 = {
    id: "regex-assessment-q2",
    options: [
      {
        label: 'const darwin = "Charles Darwin"',
        optionId: "string",
        code: true,
      },
      {
        label: "const wallace = 'Alfred Wallace'",
        optionId: "string",
        code: true,
      },
      {
        label: "const selection = ['selection']",
        optionId: "array",
        code: true,
      },
      {
        label: "const reproduction = /Reproduction/",
        optionId: "string",
        code: true,
      },
      {
        label: "const variability = variability",
        optionId: "error",
        code: true,
      },
      { label: "const meaningOfLife = '42'", optionId: "string", code: true },
    ],
    question: [
      {
        value:
          "Select all of the strings. Don't select numbers or string arrays",
      },
    ],
    type: QuestionType.Checkbox,
  };

  return;
};
