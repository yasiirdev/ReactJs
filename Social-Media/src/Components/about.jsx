import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCrown,
  FaCode,
  FaLaptop,
  FaRocket,
  FaUser,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaStar,
  FaAward,
  FaBriefcase,
} from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

export default function About() {
  const [activeTab, setActiveTab] = useState("about");
  const navigate = useNavigate();

  const skills = [
    { name: "React", level: 95, category: "Frontend" },
    { name: "JavaScript", level: 98, category: "Core" },
    { name: "Bootstrap", level: 90, category: "Frontend" },
    { name: "Redux", level: 85, category: "State Management" },
    { name: "Vite", level: 88, category: "Build Tools" },
    { name: "Responsive Design", level: 94, category: "Frontend" },
    { name: "Git", level: 87, category: "Tools" },
  ];

  const achievements = [
    {
      icon: <FaAward className="text-warning" />,
      title: "5+ Projects",
      desc: "Completed professional projects",
    },
    {
      icon: <FaRocket className="text-success" />,
      title: "High Performance",
      desc: "Optimized & fast applications",
    },
    {
      icon: <FaLaptop className="text-info" />,
      title: "Responsive",
      desc: "Mobile-first design approach",
    },
    {
      icon: <FaStar className="text-danger" />,
      title: "Clean Code",
      desc: "Best practices & standards",
    },
  ];

  const experience = [
    {
      period: "2024 - Present",
      role: "Full Stack Developer",
      company: "React Projects",
      desc: "Building modern web applications with React and Bootstrap",
    },
    {
      period: "2023 - 2024",
      role: "Frontend Developer",
      company: "Web Development",
      desc: "Specialized in responsive design and JavaScript optimization",
    },
    {
      period: "2022 - 2023",
      role: "Junior Developer",
      company: "Learning Phase",
      desc: "Mastered HTML, CSS, JavaScript fundamentals",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/yasiirdev",
      external: true,
    },
    {
      icon: <TbBrandLeetcode />,
      name: "LinkedIn",
      url: "https://leetcode.com/u/yasiirdev/",
      external: true,
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "https://twitter.com/yasiirdev",
      external: true,
    },
  ];

  return (
    <div className="min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      {/* Hero Section */}
      <div
        className="py-5 text-white"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div
                  className="rounded-circle bg-warning"
                  style={{
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                  }}
                >
                  <FaCrown />
                </div>
                <div>
                  <small className="text-warning">Welcome to</small>
                  <h2 className="m-0 fw-bold">VIP Portfolio</h2>
                </div>
              </div>
              <h1 className="display-5 fw-bold mb-3">Muhammad Yasir</h1>
              <h3 className="h5 text-warning mb-3">
                Professional Frontend Developer & Creative Designer
              </h3>
              <p className="lead mb-4">
                Crafting beautiful, responsive, and high-performance web
                applications. Specialized in React, Bootstrap & modern
                JavaScript.
              </p>
              <div className="d-flex gap-2">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                    className="btn btn-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px" }}
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="bg-white rounded-4 p-4 shadow-lg"
                style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
              >
                <div className="row text-center">
                  <div className="col-6 mb-3">
                    <h3 className="text-primary fw-bold">5+</h3>
                    <small className="text-muted">Projects Completed</small>
                  </div>
                  <div className="col-6 mb-3">
                    <h3 className="text-success fw-bold">100%</h3>
                    <small className="text-muted">Client Satisfaction</small>
                  </div>
                  <div className="col-6">
                    <h3 className="text-warning fw-bold">8+</h3>
                    <small className="text-muted">Tech Skills</small>
                  </div>
                  <div className="col-6">
                    <h3 className="text-danger fw-bold">1+</h3>
                    <small className="text-muted">Years Experience</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mt-5">
        <div className="d-flex gap-2 mb-4 flex-wrap">
          {[
            { id: "about", label: "About", icon: <FaUser /> },
            { id: "skills", label: "Skills", icon: <FaCode /> },
            { id: "experience", label: "Experience", icon: <FaBriefcase /> },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`btn btn-lg d-flex align-items-center gap-2 ${
                activeTab === tab.id ? "btn-primary" : "btn-outline-secondary"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* About Tab */}
        {activeTab === "about" && (
          <div className="row mb-5">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg p-4">
                <h3 className="fw-bold mb-3">About Me</h3>
                <p className="text-muted mb-3">
                  Hi! I'm Yasiirdev, a passionate full-stack developer with a
                  focus on creating beautiful, user-friendly web experiences.
                  With expertise in React, JavaScript, Bootstrap , Tailwind ,
                  nodejs , shadcn and leetcode , I build responsive applications that
                  solve real-world problems.
                </p>
                <p className="text-muted mb-3">
                  I'm dedicated to writing clean, maintainable code and staying
                  updated with the latest web technologies. My approach combines
                  technical excellence with creative problem-solving to deliver
                  exceptional results.
                </p>
                <p className="text-muted">
                  When I'm not coding, I'm exploring new technologies, learning
                  new frameworks, and contributing to the developer community.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row g-3">
                {achievements.map((achievement, idx) => (
                  <div key={idx} className="col-12">
                    <div className="card border-0 shadow-sm p-3 text-center h-100">
                      <div className="mb-2" style={{ fontSize: "2rem" }}>
                        {achievement.icon}
                      </div>
                      <h6 className="fw-bold">{achievement.title}</h6>
                      <small className="text-muted">{achievement.desc}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === "skills" && (
          <div className="row mb-5">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg p-4">
                <h3 className="fw-bold mb-4">Professional Skills</h3>
                {skills.map((skill, idx) => (
                  <div key={idx} className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div>
                        <h6 className="fw-bold mb-0">{skill.name}</h6>
                        <small className="text-muted">{skill.category}</small>
                      </div>
                      <span className="badge bg-primary">{skill.level}%</span>
                    </div>
                    <div className="progress" style={{ height: "8px" }}>
                      <div
                        className="progress-bar bg-success"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow-lg p-4 bg-light">
                <h5 className="fw-bold mb-3">
                  <FaCrown className="text-warning me-2" />
                  Expertise Summary
                </h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <FaStar className="text-warning me-2" />
                    <strong>Frontend:</strong> 95%
                  </li>
                  <li className="mb-2">
                    <FaStar className="text-warning me-2" />
                    <strong>JavaScript:</strong> 98%
                  </li>
                  <li className="mb-2">
                    <FaStar className="text-warning me-2" />
                    <strong>Responsive:</strong> 94%
                  </li>
                  <li>
                    <FaStar className="text-warning me-2" />
                    <strong>Tools:</strong> 88%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === "experience" && (
          <div className="row mb-5">
            <div className="col-lg-8">
              <h3 className="fw-bold mb-4">Professional Journey</h3>
              {experience.map((exp, idx) => (
                <div key={idx} className="card border-0 shadow-lg p-4 mb-3">
                  <div className="d-flex gap-3">
                    <div
                      className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        minWidth: "50px",
                      }}
                    >
                      <FaBriefcase />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-bold mb-1">{exp.role}</h5>
                      <small className="text-warning fw-bold">
                        {exp.period}
                      </small>
                      <p className="text-muted mb-0 mt-1">{exp.company}</p>
                      <p className="text-muted small mt-2">{exp.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow-lg p-4 bg-info text-white">
                <h5 className="fw-bold mb-3">
                  <FaCrown className="me-2" />
                  Career Highlights
                </h5>
                <ul className="list-unstyled">
                  <li className="mb-2">⭐ Full-stack development expertise</li>
                  <li className="mb-2">⭐ 100% project delivery rate</li>
                  <li className="mb-2">⭐ Continuous learner</li>
                  <li>⭐ Team collaboration specialist</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div
        className="py-5 text-white text-center mb-5"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="container">
          <h3 className="fw-bold mb-3">Ready to Collaborate?</h3>
          <p className="lead mb-4">
            Let's build something amazing together. Get in touch today!
          </p>
          <button
            className="btn btn-warning btn-lg px-5 fw-bold"
            onClick={() => navigate("/create-post")}
            title="Navigate to create post page"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}
