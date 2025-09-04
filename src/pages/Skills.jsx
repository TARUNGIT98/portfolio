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
    <section className="bg-white min-h-screen flex items-center justify-center py-20">
      <div className="container-card w-full">
        <h2 className="section-heading">Technologies Most Used</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover text-center"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
