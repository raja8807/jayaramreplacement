const { default: NodLogo } = require("../nod-ui/nod-logo/nod_logo");
import { useState } from "react";
import Nodbutton from "../nod-ui/nod-button/nod_button";
import styles from "./header.module.scss";
import HeaderDrawer from "./header-drawer/header_drawer";
import { useRouter } from "next/router";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { HOME_SECTIONS } from "../nod-pages/home/constants";
import { List } from "react-bootstrap-icons";

const NodHeader = (props) => {
  const { currentSection, setCurrentSection } = props;


  const [showDrawer, setShowDrawer] = useState(false);
  // const router = useRouter();

  return (
    <>
      <header className={styles.nod_header_wrap}>
        <Container className={styles.nod_header}>
          <div className={styles.header_logo}>
            <NodLogo />
            <p>Institute Name</p>
          </div>
          <nav className={styles.nav}>
            {/* <Link href="#" className={`${styles.nav_link} ${styles.active}`}>
              Home
            </Link>
            <Link href="#" className={`${styles.nav_link} `}>
              Home
            </Link>
            <Link href="#" className={`${styles.nav_link}`}>
              Home
            </Link> */}
            
            {HOME_SECTIONS.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
          
         

              className={`${styles.nav_link} ${currentSection?.includes(section.id) && styles.active}`}
     
            >
              <p>{section.name}</p>
            </Link>
          ))}
          </nav>
          <nav className={styles.menu_toogle}>
            <List
            onClick={()=>{
              setShowDrawer(true);
            }}
            />
          </nav>
        </Container>
      </header>
      <HeaderDrawer
        show={showDrawer}
        setShow={setShowDrawer}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </>
  );
};
export default NodHeader;
