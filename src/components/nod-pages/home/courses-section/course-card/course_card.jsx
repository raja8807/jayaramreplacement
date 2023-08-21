import { Image } from "react-bootstrap";
import styles from "./course-card.module.scss";
import CustomButton from "@/components/ui/custom-button/custom_button";
import { ArrowRight } from "react-bootstrap-icons";

const CourseCard = () => {
  return (
    <div className={styles.course_card}>
      <div className={styles.course_img}>
        <Image src="/images/courses/course1.jpg" fluid alt="img"/>
      </div>
      <div>
        <div className={styles.course_details}>
          <p className={styles.head}>Lorem ipsum dolor sit.</p>
          <p className={styles.detail}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            accusantium illo odit placeat totam aspernatur incidunt doloremque
            nobis maiores iusto.
          </p>
        </div>
      </div>
      <div className={styles.control}>
        <CustomButton>
          Enroll Now &nbsp;
          <ArrowRight />
        </CustomButton>
      </div>
    </div>
  );
};

export default CourseCard;
