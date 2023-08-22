import { Col, Image, Row } from "react-bootstrap";
import styles from "./who-are-we-section.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const WhoAreWeSection = () => {
  return (
    <div className={styles.about_us}>
      <div className={styles.cards_wrapper}>
        <CustomContainer>
          <Row>
            <Col xs={12} md={6}>
              <div className={styles.card} data-aos="fade-right">
                <div className={styles.left}>5</div>
                <div>
                  <p className={styles.head}>Courses</p>
                  <p className={styles.details}>We Currently offer 5 courses</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className={styles.card} data-aos="fade-left">
                <div className={styles.left}>5</div>
                <div>
                  <p className={styles.head}>Courses</p>
                  <p className={styles.details}>We Currently offer 5 courses</p>
                </div>
              </div>
            </Col>
          </Row>
        </CustomContainer>
      </div>

      <div className={styles.about}>
        <CustomContainer>
          <div className={styles.box}>
            <div className={styles.img} data-aos="flip-left">
              <Image src="/images/sq.png" fluid alt="sq"/>
            </div>

            <div className={styles.right}>
              <p className={styles.name} data-aos="fade-left">Jaya Ram</p>
              <p data-aos="fade-left">auiefa oefaeiugfaoe f</p>
              <p data-aos="fade-left">auiefa oefaeiugfaoe f</p>
              <p data-aos="fade-left">auiefa oefaeiugfaoe f</p>
            </div>

            <div className={styles.details}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              dignissimos, rerum itaque odio impedit dicta doloremque beatae
              accusamus eaque, perferendis sed libero quis assumenda, nulla
              laudantium illo omnis dolorum iste!
            </div>
          </div>
        </CustomContainer>
      </div>
    </div>
  );
};

export default WhoAreWeSection;
