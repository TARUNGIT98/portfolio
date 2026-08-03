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
    level: 75,
    experience: "3+ years",
    description:
      "Enterprise backend development with the Spring ecosystem — scalable microservices and RESTful APIs.",
    docs: "https://docs.oracle.com/en/java/",
    group: "languages",
  },
  {
    name: "Python",
    icon: <Database />,
    level: 80,
    experience: "2+ years",
    description: "AI/ML development, data pipelines, and day-to-day DSA practice.",
    docs: "https://docs.python.org/",
    group: "languages",
  },
  {
    name: "TensorFlow",
    icon: <Brain />,
    level: 80,
    experience: "2+ years",
    description:
      "Deep learning models, neural networks, and production ML deployments.",
    docs: "https://tensorflow.org/learn",
    group: "ai",
  },
  {
    name: "PyTorch",
    icon: <Zap />,
    level: 80,
    experience: "2+ years",
    description:
      "Research-focused deep learning, computer vision, and network experimentation.",
    docs: "https://pytorch.org/docs/",
    group: "ai",
  },
  {
    name: "Spring",
    icon: <Layers />,
    level: 80,
    experience: "3+ years",
    description:
      "Enterprise Java applications, dependency injection, and robust backend architecture.",
    docs: "https://spring.io/guides",
    group: "frameworks",
  },
  {
    name: "Flask",
    icon: <Globe />,
    level: 70,
    experience: "2+ years",
    description:
      "Lightweight Python services, APIs, and rapid prototyping for ML models.",
    docs: "https://flask.palletsprojects.com/",
    group: "frameworks",
  },
  {
    name: "React",
    icon: <Code />,
    level: 80,
    experience: "1+ years",
    description:
      "Modern frontend work with hooks, state management, and component architecture.",
    docs: "https://react.dev/",
    group: "frameworks",
  },
  {
    name: "TypeScript",
    icon: <FileCode />,
    level: 78,
    experience: "1+ years",
    description:
      "Typed React front-ends at Reynolds — interfaces, generics, and safer refactors at scale.",
    docs: "https://www.typescriptlang.org/docs/",
    group: "languages",
  },
  {
    name: "CSS",
    icon: <Palette />,
    level: 70,
    experience: "2+ years",
    description:
      "Layout, animation, and responsive design — plus utility frameworks like Tailwind.",
    docs: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    group: "languages",
  },
  {
    name: "AWS",
    icon: <Globe />,
    level: 70,
    experience: "1+ years",
    description:
      "Cloud infrastructure, EC2 deployments, and scalable service architecture.",
    docs: "https://docs.aws.amazon.com/",
    group: "tools",
  },
  {
    name: "Docker",
    icon: <Container />,
    level: 72,
    experience: "1+ years",
    description:
      "Containerisation, reproducible environments, and deployment automation.",
    docs: "https://docs.docker.com/",
    group: "tools",
  },
  {
    name: "Jupyter",
    icon: <NotebookPen />,
    level: 85,
    experience: "3+ years",
    description:
      "Where the ML work actually happens — experiments, visualisation, and notebooks I can reproduce later.",
    docs: "https://docs.jupyter.org/",
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
          <a
            key={skill.name}
            className="skill-card"
            href={skill.docs}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="skill-top">
              <span className="skill-icon">{skill.icon}</span>
              <span>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-years">{skill.experience}</div>
              </span>
            </div>

            <p className="skill-desc">{skill.description}</p>

            <div className="skill-meter-top">
              <span className="skill-meter-label">Proficiency</span>
              <span className="skill-meter-value">{skill.level}%</span>
            </div>
            <div
              className="skill-track"
              role="meter"
              aria-valuenow={skill.level}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${skill.name} proficiency`}
            >
              <div className="skill-fill" style={{ width: `${skill.level}%` }} />
            </div>

            <div className="skill-docs">Read the docs →</div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Skills;
