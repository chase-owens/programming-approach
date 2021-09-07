import { FC, useEffect } from "react";
import Editor from "react-simple-code-editor";
import Heading from "../Heading";
import { CodeEditorQuestion } from "../../models";
import styles from "./CodeEditor.module.scss";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";

interface CodeEditorProps extends CodeEditorQuestion {
  code?: string;
  onChange: (code: string) => void;
}

const CodeEditor: FC<CodeEditorProps> = ({
  code,
  initialDeclarations,
  onChange,
  question,
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className={styles.container}>
      <Heading heading={question} />
      <Editor
        highlight={(code) => Prism.highlight(code, Prism.languages.js, "js")}
        value={code || initialDeclarations}
        onValueChange={onChange}
        key={initialDeclarations}
        padding={24}
        spellCheck
        style={{
          marginBottom: "2rem",
          minHeight: 300,
          backgroundColor: "#151515",
          color: "#fff",
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14,
        }}
      />
    </div>
  );
};

export default CodeEditor;
