import styles from "./Question.module.scss";
import { QuestionModule as QuestionProps, QuestionType } from "../models";
import CheckboxModule from "./CheckboxModule";
import CodeEditorModule from "./CodeEditorModule";

interface QuestionModuleProps {
  module: QuestionProps;
  onChange: (code: string) => void;
  value?: string;
}

const QuestionModule = ({ module, onChange, value }: QuestionModuleProps) =>
  (() => {
    switch (module.type) {
      case QuestionType.Checkbox:
        return <CheckboxModule {...module} />;
      case QuestionType.CodeEditor:
        return (
          <CodeEditorModule code={value} {...module} onChange={onChange} />
        );
      case QuestionType.Radio:
        return <div className={styles.editor}>Editor</div>;
    }
  })();
export default QuestionModule;
