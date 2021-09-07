import { FC } from "react";
import Regex from "../../courses/regex";

interface CourseProps {
  courseId: string;
}

const Course: FC<CourseProps> = ({ courseId }) => {
  switch (courseId.toString()) {
    case "regex":
      return <Regex />;
    default:
      return <div>no course setup</div>;
  }
};

export default Course;

interface RouteParams {
  params: {
    courseId: string;
  };
}

export function getStaticProps({ params: { courseId } }: RouteParams) {
  return { props: { courseId } };
}

export const getStaticPaths = async () => {
  const courseId = "regex";

  return {
    paths: [{ params: { courseId } }],
    fallback: false,
  };
};
