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
    degree: "Matriculation",
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
  {
    svg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1280px-2023_Facebook_icon.svg.png",
    alt: "facebook",
    link: "https://www.facebook.com/share/17xnRsgfNx/",
  },
  {
    svg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKQ9DF_RPM7IIoXw0GtCI6RnFQV_WBwecCsQ&s",
    alt: "x",
    link: "https://x.com/ul_mastoi",
  },
  {
    svg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8qOK7A5IKaNOw-ZPeg_2OOD5ZIW3JOha8FA&s",
    alt: "instagram",
    link: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=22psmhu",
  },
  // {
  //   svg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzgXYEXEgOmxvZJoK8rAZtk0v2LipcuKRQHA&s",
  //   alt: "linkedin",
  //   link: "https://www.linkedin.com/in/muhammad-ali-mustafa-721543245/",
  // },
];

const experiences = [
  {
    id: 1,
    position: "Data entry operator",
    company: "Friends institute of Management ",
    duration: "05-jan-2015 to 30-dec-2017",
    type: "Full-Time",
     location: "Phoenix, Arizona, USA",
    // description:
    //   "Demonstrating a seamless integration of data science acumen and business consulting proficiency, effectively driving transformative initiatives and delivering strategic insights to optimize "
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