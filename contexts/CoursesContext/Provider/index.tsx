import React, { FC, useContext } from "react";
import { Course, CoursesContext } from "..";

const coursesMap = new Map<string, Course>([
  [
    "regex",
    {
      description:
        "Search, validate, and process strings with Regular Expressions.",
      id: "regex",
      name: "RegEx",
    },
  ],
  [
    "react-spring",
    {
      description: "Learn how to make animations with React Spring!",
      id: "react-spring",
      name: "React Spring",
    },
  ],
  [
    "web-ar",
    {
      description:
        "Create immersive 3D experiences with React 360 & AR Studio!",
      id: "web-ar",
      name: "Web AR",
    },
  ],
  [
    "react-hooks",
    {
      description: "Learn why, how, and when to use React's navite hooks.",
      id: "react-hooks",
      name: "React Hooks",
    },
  ],
  [
    "d3",
    {
      description: "Learn how to create graphs and other visualizations.",
      id: "d3",
      name: "D3",
    },
  ],
]);

const CoursesProvider: FC = ({ children }) => {
  return (
    <CoursesContext.Provider value={coursesMap}>
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesProvider;

export const useCourses = () => useContext(CoursesContext);
