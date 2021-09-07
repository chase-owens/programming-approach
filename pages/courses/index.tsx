import { useRouter } from "next/router";
import { useAuth } from "../../contexts/AuthContext/Provider";
import { useCourses } from "../../contexts/CoursesContext/Provider";
import Cards from "../../layouts/Cards";
import Main from "../../layouts/Main";
import Card from "../../shared/Card";
import styles from "./Courses.module.scss";

export default function Courses() {
  const router = useRouter();
  const coursesContext = useCourses();
  const authContext = useAuth();

  const handleClickCourse = (courseId: string) => {
    router.push({
      pathname: `course/[courseId]`,
      query: { courseId },
    });
  };

  return (
    <Main heading="Courses">
      <section className={styles.courses}>
        <h2 className={styles.coursesHeading}>Assessment</h2>
        <p className={styles.coursesContent}>
          An assessment is provided prior to each course to identify your
          current repertoire relevant to the course content and to position you
          at the appropriate place in your learning path.
        </p>
        <h2 className={styles.coursesHeading}>Revision</h2>
        <p className={styles.coursesContent}>
          Courses are under constant construction. Course participation and
          progress are evaluated and instructional sequences are adjusted when
          they fail to meet course objectives.
        </p>
        <Cards>
          {Array.from(coursesContext.values()).map((course) => (
            <Card
              className={styles.card}
              description={course.description}
              heading={course.name}
              key={course.name}
              onClick={() => handleClickCourse(course.id)}
            />
          ))}
        </Cards>
      </section>
    </Main>
  );
}
