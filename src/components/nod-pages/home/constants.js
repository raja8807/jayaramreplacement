import BannerSection from "./banner-section/banner_section";
import Courses from "./courses-section/courses_section";

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
    id: "courses",
    varient: "courses",
    name: "Courses",
    heading: "Cources We Offer",
    component: <Courses />,
    inEffect: "fade-in",
  },
];
