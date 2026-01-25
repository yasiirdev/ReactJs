import AppContext from "./ContextApi";

const Navigation = [
  { name: "Home", link: "#home" },
  { name: "Profile", link: "#pf" },
  { name: "Experience", link: "#exp" },
  { name: "Education", link: "#ed" },
  { name: "Skills", link: "#sk" },
];

const educationData = [
  {
    id: 1,
    degree: "Mutriculation",
    institution: "Bise Bahawalpur",
    duration: "2011 - 2012",
    location: "Bahawalpur, Pakistan ",
    gpa: "591/1050",
    highlights: [
      "Dean's List - All semesters",
      "Major GPA: 4.0",
      "Relevant Coursework: Machine Learning, Statistics, Big Data Analytics",
    ],
    description:
      "Comprehensive program focused on data science, statistical analysis, and machine learning with hands-on project experience.",
  },
  {
    id: 2,
    degree: "I.com",
    institution: "Bise Bahawalpur",
    duration: "2014",
    location: "Bahawalpur, Pakistan",
    gpa: "611/1100",
    highlights: [
      "Specialization: Business Analytics",
      "Scholarship Recipient",
      "Thesis: Advanced Data-Driven Decision Making",
    ],
    description:
      "Advanced business education combining technical expertise with strategic management and leadership principles.",
  },
  {
    id: 3,
    degree: "Bachelor's (HONS) statistics",
    institution: "the islamia university of bahawalpur",
    duration: "2019 - Present",
    location: "bahawalpur, Pakistan",
    gpa: " 3.13/4.00",
    highlights: [
      "Google Cloud Professional Data Engineer",
      "AWS Certified Solutions Architect",
      "Data Science Professional Certificate",
    ],
    description:
      "Continuous professional development through industry-recognized certifications and specialized courses.",
  },
];

const workSvg = [
  { svg: "https://tailkits.com/ui/iframe/assets/img/logo-2.svg", alt: "logo" },
  { svg: "https://tailkits.com/ui/iframe/assets/img/logo-3.svg", alt: "logo" },
  { svg: "https://tailkits.com/ui/iframe/assets/img/logo-4.svg", alt: "logo" },
  { svg: "https://tailkits.com/ui/iframe/assets/img/logo-5.svg", alt: "logo" },
  { svg: "https://tailkits.com/ui/iframe/assets/img/logo-6.svg", alt: "logo" },
];

const experiences = [
  {
    id: 1,
    position: "Data entry operator",
    company: "Friends institute of Management ",
    duration: "05-jan-2015 to 30-dec-2017",
    type: "Full-Time",
    location: "Phoenix, Arizona, USA",
    description:
      "Demonstrating a seamless integration of data science acumen and business consulting proficiency, effectively driving transformative initiatives and delivering strategic insights to optimize "
  }

];

function ContextProvider({ children }) {
  return (
    <AppContext value={{ Navigation, educationData, workSvg, experiences }}>
      {children}
    </AppContext>
  );
}

export default ContextProvider;