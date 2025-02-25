import "../styles/skills.css";
import { FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { 
  SiTensorflow, 
  SiPytorch, 
  SiOpenjdk, 
  SiHtml5, 
  SiCss3, 
  SiGithub
} from "react-icons/si";

const skillsData = [
  { name: "Java", icon: <SiOpenjdk className="skill-icon java" /> },
  { name: "Python", icon: <FaPython className="skill-icon python" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="skill-icon tensorflow" /> },
  { name: "React", icon: <FaReact className="skill-icon react" /> },
  { name: "CSS", icon: <SiCss3 className="skill-icon css" /> },
  { name: "GitHub", icon: <SiGithub className="skill-icon github" /> },
  { name: "Pytorch", icon: <SiPytorch className="skill-icon pytorch" /> }
];

function Skills() {
  return (
    <div className="skills-container">
      <h1>Skills that are currently in use</h1>
      <div className="skills-grid">
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
