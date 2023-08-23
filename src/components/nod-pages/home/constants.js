import BannerSection from "./banner-section/banner_section";
import Courses from "./courses-section/courses_section";
import FooterSection from "./footer-section/footer-section";
import InterestSection from "./interest-section/interest-section";
import WhoAreWeSection from "./who-are-we-section/who-are-we-section";

export const HOME_SECTIONS = [
  {
    id: "home",
    varient: "banner",
    name: "Home",
    // heading: 'Hello',
    component: <BannerSection />,
    inEffect: "fade-in",
  },
  {
    id: "whoAreWe",
    varient: "white",
    name: "About Us",
    // heading: 'Who Are We?',
    component: <WhoAreWeSection />,
    inEffect: "fade-in",
  },
  {
    id: "courses",
    varient: "courses",
    name: "Courses",
    heading: "Cources We Offer",
    component: <Courses />,
    inEffect: "fade-in",
  },
  {
    id: "resgister",
    varient: "interses",
    name: "Register",
    // heading: "Cources We Offer",
    component: <InterestSection />,
    inEffect: "fade-in",
  },
  {
    id: "contact",
    varient: "contact",
    name: "Contact Us",
    // heading: "Cources We Offer",
    component: <FooterSection />,
    // inEffect: "fade-in",
  },
];

export const COURSES = [
  {
    id: "course1",
    name: "DIPLOMA IN MEDICAL LAB TECHNOLOGY",
    shortName: "Medical Lab Technology",
  },
  {
    id: "course2",
    name: " DIPLOMA IN OPERATION THEATRE TECHNOLOGY",
    shortName: "Operation Theatre Technology",
  },
  {
    id: "course3",
    name: "DIPLOMA IN CRITICAL CARE MANAGEMENT",
    shortName: "Critical Care Management",
  },
  {
    id: "course4",
    name: "DIPLOMA IN X-RAY TECHNOLOGY",
    shortName: "X-Ray Technology",
  },
  {
    id: "course5",
    name: "DIPLOMA IN PATIENT CARE",
    shortName: "Patient Care",
  },
];
