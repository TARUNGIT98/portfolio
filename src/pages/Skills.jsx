import "../styles/skills.css";
import { FaReact, FaPython, FaAws, FaDocker } from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiOpenjdk,
  SiCss3,
  SiFlask,
  SiSpring
} from "react-icons/si";

const skillsData = [
  { name: "Java", icon: <SiOpenjdk className="skill-icon java" /> },
  { name: "Python", icon: <FaPython className="skill-icon python" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="skill-icon tensorflow" /> },
  { name: "PyTorch", icon: <SiPytorch className="skill-icon pytorch" /> },
  { name: "Spring", icon: <SiSpring className="skill-icon spring" /> },
  { name: "Flask", icon: <SiFlask className="skill-icon flask" /> },
  { name: "React", icon: <FaReact className="skill-icon react" /> },
  { name: "CSS", icon: <SiCss3 className="skill-icon css" /> },
  { name: "AWS", icon: <FaAws className="skill-icon aws" /> },
  { name: "Docker", icon: <FaDocker className="skill-icon docker" /> },
];

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="skills-heading">Technologies Most Used</h2>
      <div className="skills-scroll">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
