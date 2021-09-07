import {
  QuestionModule,
  QuestionType,
} from "../../../shared/Assessment/models";

const questions: QuestionModule[] = [
  {
    errorMessage:
      "You have not demonstrated mastery of using string methods. This course requires fluency in using JavaScript's native methods.",
    id: "regex-assessment-q1",
    initialDeclarations: `const hominids = "Homo heidelbergensis, Homo erectus, Homo neanderthalensis, Homo sapiens";\nconst searchText = 'Homo erectus';\nconst hasHomoErectus = `,
    question: [
      {
        value: "Complete the declaration of ",
      },
      {
        type: "code",
        value: "hasHomoErectus",
      },
      {
        value: " using a string method on ",
      },
      {
        type: "code",
        value: "hominids",
      },
      {
        value: " that determines whether ",
      },
      {
        type: "code",
        value: "hominids",
      },
      {
        value: " includes ",
      },
      {
        type: "code",
        value: " searchText",
      },
      {
        value: ".",
      },
    ],
    skills: ["Use string method to inspect string"],
    successMessage:
      "Nice job! You've demonstrated mastery using native string methods.",
    targetAnswer: "const hasHomoErectus = hominids.includes(searchText)",
    type: QuestionType.CodeEditor,
  },
  {
    errorMessage:
      "You have not demonstrated mastery of using string methods. This course requires fluency in using JavaScript's native methods.",
    id: "regex-assessment-q2",
    initialDeclarations: `const hominids = "Homo heidelbergensis, Homo erectus, Homo neanderthalensis, Homo sapiens";\nconst searchText = 'homo erectus';\nconst hasHomoErectus = hominids.includes(searchText)`,
    question: [
      {
        value: "Modify ",
      },
      {
        type: "code",
        value: "hasHomoErectus",
      },
      {
        value: " and call ",
      },
      {
        type: "code",
        value: "toUpperCase",
      },
      {
        value: " on ",
      },
      {
        type: "code",
        value: "hominids",
      },
      {
        value: " and ",
      },
      {
        type: "code",
        value: "searchText",
      },
      {
        value: "so that the search ignores the letter casing.",
      },
    ],
    skills: ["Use string method to transform string", "Chain methods"],
    successMessage:
      "Nice job!. You've demonstrated mastery transforming strings and chaining methods.",
    targetAnswer:
      "const hasHomoErectus = hominids.toUpperCase().includes(searchText.toUpperCase())",
    type: QuestionType.CodeEditor,
  },
  {
    errorMessage:
      "You have not demonstrated mastery of using string methods. This course requires fluency in using JavaScript's native methods.",
    id: "regex-assessment-q3",
    initialDeclarations: `const hominids = "Homo heidelbergensis,Homo erectus,Homo neanderthalensis";`,
    question: [
      {
        value: "Replace each comma in ",
      },
      {
        type: "code",
        value: "hominids",
      },
      {
        value: " with a JavaScript",
      },
      {
        type: "code",
        value: "newline",
      },
      {
        value: " character.",
      },
    ],
    skills: ["Use escape character"],
    successMessage:
      "Nice job! You've demonstrated mastery using the escape character.",
    targetAnswer: `const hominids = "Homo heidelbergensis\\nHomo erectus\\nHomo neanderthalensis";`,
    type: QuestionType.CodeEditor,
  },
];

export default questions;
