import styles from "./Introduction.module.scss";

export default function Introduction() {
  return (
    <div className={styles.introduction}>
      <h2>Scientific Approach</h2>
      <p className={styles.introductionContent}>
        We use advanced insructional design technology to designin each course.
        We identified exemplary skillsets, their component foundations, and take
        a programming approach to teaching those skills. Learners acquire
        advanced repertoires that are readily available long after program
        completion.
      </p>
      <h2>Accomplishment Based</h2>
      <p className={styles.introductionContent}>
        The learning objectives and activities are based on what learners will
        be able to accomplish upon completion of each course. Our goal is to
        provide high quality instructional programs that build robust and
        enduring repertoires that enable learners to solve whatever problems are
        presented.
      </p>
      <h2>Meaningful Practice</h2>
      <p className={styles.introductionContent}>
        A programming approach goes beyond the{" "}
        <span className={styles.introductionHighlight}>
          information-presentation
        </span>{" "}
        and <span className={styles.introductionHighlight}>follow-along</span>{" "}
        models. Each course has clear objectives and isntructional sequences
        that have resulted in meeting those objectives and not because the
        answer was provided.
      </p>
    </div>
  );
}
