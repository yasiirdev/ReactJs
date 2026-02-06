import AppContext from "./ContextApi";
import certification from "../assets/certification.png";
const Navigation = [
  { name: "Home", link: "#home" },
  { name: "Profile", link: "#pf" },
  { name: "Experience", link: "#exp" },
  { name: "Education", link: "#ed" },
  { name: "Skills", link: "#sk" },
];

  const skillCategories = [
    {
      category: "Technical Skills",
      skills: [
        { name: "Ms Window", level: 90 },
        { name: "Ms Office", level: 92 },
        { name: "Internet email", level: 90 },
        { name: "composing (english + urdu)", level: 88 },
        { name: "typing speed (W.P.M)", level: 40 },
      ],
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "Marketing & Advertising",
      issuer: "e-Rozgaar",
      image: certification,
    },
  ];

const educationData = [
  {
    id: 1,
    degree: "Matriculation",
    institution: "Bise Bahawalpur",
    duration: "2011 - 2012",
    location: "Bahawalpur, Pakistan ",
    gpa: "591/1050",
  },
  {
    id: 2,
    degree: "I.com",
    institution: "Bise Bahawalpur",
    duration: "2014",
    location: "Bahawalpur, Pakistan",
    gpa: "611/1100",
  },
  {
    id: 3,
    degree: "Bachelor's (HONS) statistics",
    institution: "the islamia university of bahawalpur",
    duration: "2019 - Present",
    location: "Bahawalpur, Pakistan",
    gpa: " 3.13/4.00",
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
     location: "Punjab, bahawalpur, Pakistan",
    description:
      "- Managed and organized data entry tasks, ensuring accuracy and efficiency in processing large volumes of information.\n- Utilized various software tools to input, update, and maintain data records, contributing to streamlined operations and improved data integrity.\n- Collaborated with team members to meet deadlines and achieve departmental goals, demonstrating strong communication and teamwork skills.",
  }

];

function ContextProvider({ children }) {
  return (
    <AppContext value={{ Navigation, educationData, workSvg, experiences, skillCategories , certifications }}>
      {children}
    </AppContext>
  );
}

export default ContextProvider;