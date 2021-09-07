import { FC } from "react";
import RegExAssessment from "../../../../courses/regex/assessment";

interface AssessmentProps {
  courseId: string;
}

const Assessment: FC<AssessmentProps> = ({ courseId }) => {
  switch (courseId.toString()) {
    case "regex":
      return <RegExAssessment />;
    default:
      return <div>no course setup</div>;
  }
};

export default Assessment;

interface RouteParams {
  params: {
    courseId: string;
  };
}

export function getStaticProps({ params: { courseId } }: RouteParams) {
  return { props: { courseId: courseId } };
}

export const getStaticPaths = async () => {
  const courseId = "regex";

  return {
    paths: [{ params: { courseId } }],
    fallback: false,
  };
};
