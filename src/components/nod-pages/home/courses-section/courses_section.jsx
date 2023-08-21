import { Container } from "react-bootstrap";
import styles from "./courses_section.module.scss";
import CourseCard from "./course-card/course_card";

const Courses = () => {
  return (
    <div className={styles.courses_section}>
      <Container className={styles.courses}>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit autem
          ratione sint doloremque enim assumenda id delectus rerum. Tenetur,
          quaerat?
        </h5>

        <div className={styles.cards}>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
        </div>
      </Container>
    </div>
  );
};

export default Courses;
