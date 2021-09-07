import { FC } from "react";
import Main from "../../../layouts/Main";
import Assessment from "../../../shared/Assessment";
import questions from "./questions";

const RegExAssessment: FC = () => (
  <Main heading="Regular Expressions">
    <Assessment questions={questions} />
  </Main>
);

export default RegExAssessment;
