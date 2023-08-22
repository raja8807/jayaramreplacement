import BannerSection from "./banner-section/banner_section";
import Courses from "./courses-section/courses_section";
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
    component:<WhoAreWeSection/>,
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
    component: <InterestSection/>,
    inEffect: "fade-in",
  },
];
