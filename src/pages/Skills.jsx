import { useState } from "react";
import {
  Code,
  Database,
  Brain,
  Zap,
  Globe,
  Container,
  Layers,
  Palette,
  FileCode,
  NotebookPen,
} from "lucide-react";
import "../styles/skills.css";
import Tabs from "../components/Tabs";

const SKILLS = [
  {
    name: "Java",
    icon: <Code />,
    experience: "3+ years",
    description:
      "Enterprise backend development with the Spring ecosystem — scalable microservices and RESTful APIs.",
    group: "languages",
  },
  {
    name: "Python",
    icon: <Database />,
    experience: "2+ years",
    description: "AI/ML development, data pipelines, and day-to-day DSA practice.",
    group: "languages",
  },
  {
    name: "TensorFlow",
    icon: <Brain />,
    experience: "2+ years",
    description:
      "Deep learning models, neural networks, and production ML deployments.",
    group: "ai",
  },
  {
    name: "PyTorch",
    icon: <Zap />,
    experience: "2+ years",
    description:
      "Research-focused deep learning, computer vision, and network experimentation.",
    group: "ai",
  },
  {
    name: "Spring",
    icon: <Layers />,
    experience: "3+ years",
    description:
      "Enterprise Java applications, dependency injection, and robust backend architecture.",
    group: "frameworks",
  },
  {
    name: "Flask",
    icon: <Globe />,
    experience: "2+ years",
    description:
      "Lightweight Python services, APIs, and rapid prototyping for ML models.",
    group: "frameworks",
  },
  {
    name: "React",
    icon: <Code />,
    experience: "1+ years",
    description:
      "Modern frontend work with hooks, state management, and component architecture.",
    group: "frameworks",
  },
  {
    name: "TypeScript",
    icon: <FileCode />,
    experience: "1+ years",
    description:
      "Typed React front-ends at Reynolds — interfaces, generics, and safer refactors at scale.",
    group: "languages",
  },
  {
    name: "CSS",
    icon: <Palette />,
    experience: "2+ years",
    description:
      "Layout, animation, and responsive design — plus utility frameworks like Tailwind.",
    group: "languages",
  },
  {
    name: "AWS",
    icon: <Globe />,
    experience: "1+ years",
    description:
      "Cloud infrastructure, EC2 deployments, and scalable service architecture.",
    group: "tools",
  },
  {
    name: "Docker",
    icon: <Container />,
    experience: "1+ years",
    description:
      "Containerisation, reproducible environments, and deployment automation.",
    group: "tools",
  },
  {
    name: "Jupyter",
    icon: <NotebookPen />,
    experience: "3+ years",
    description:
      "Where the ML work actually happens — experiments, visualisation, and notebooks I can reproduce later.",
    group: "tools",
  },
];

const GROUPS = [
  { id: "languages", label: "Languages" },
  { id: "ai", label: "AI / ML" },
  { id: "frameworks", label: "Frameworks" },
  { id: "tools", label: "Tools" },
];

function Skills() {
  const [group, setGroup] = useState(GROUPS[0].id);

  const shown = SKILLS.filter((s) => s.group === group);

  const tabs = GROUPS.map((g) => ({
    ...g,
    count: SKILLS.filter((s) => s.group === g.id).length,
  }));

  return (
    <section id="skills" className="section-shell skills-section">
      <div className="skills-header">
        <h2 className="section-heading">Skills</h2>
        <Tabs tabs={tabs} active={group} setActive={setGroup} />
      </div>

      <div className="skills-grid">
        {shown.map((skill) => (
          <div key={skill.name} className="surface-card skill-card">
            <div className="skill-top">
              <span className="skill-icon">{skill.icon}</span>
              <span>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-years">{skill.experience}</div>
              </span>
            </div>

            <p className="skill-desc">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
