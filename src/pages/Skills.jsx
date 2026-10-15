import { Code, Server, Layout, Brain, Cloud } from "lucide-react";
import "../styles/skills.css";

/* Two tiers, matching the resume: "production" is what I've shipped at work,
   everything else is "comfortable with". Keep in step with the resume. */
const GROUPS = [
  {
    label: "Languages",
    icon: Code,
    production: ["Java", "TypeScript", "JavaScript", "SQL"],
    comfortable: ["Python"],
  },
  {
    label: "Backend & Data",
    icon: Server,
    production: ["Spring Boot", "Node.js", "REST APIs", "Kafka", "PostgreSQL", "Redis"],
    comfortable: ["Flask", "MySQL"],
  },
  {
    label: "Frontend",
    icon: Layout,
    production: ["React", "Redux", "HTML5", "CSS"],
    comfortable: ["Tailwind CSS"],
  },
  {
    label: "AI / ML",
    icon: Brain,
    production: [],
    comfortable: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "YOLOv8", "Jupyter"],
  },
  {
    label: "Cloud & DevOps",
    icon: Cloud,
    production: ["AWS (EC2, S3)", "Docker", "Jenkins CI/CD"],
    comfortable: ["Terraform"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-shell skills-section">
      <div className="skills-header">
        <h2 className="section-heading">Skills</h2>
        <div className="skills-legend" aria-hidden="true">
          <span><i className="skill-chip production" /> Used in production</span>
          <span><i className="skill-chip" /> Comfortable with</span>
        </div>
      </div>

      <div className="surface-card skills-panel">
        {GROUPS.map(({ label, icon: Icon, production, comfortable }) => (
          <div key={label} className="skills-row">
            <div className="skills-row-label">
              <span className="skill-icon"><Icon /></span>
              {label}
            </div>
            <ul className="skills-chips" aria-label={label}>
              {production.map((s) => (
                <li key={s} className="skill-chip production">{s}</li>
              ))}
              {comfortable.map((s) => (
                <li key={s} className="skill-chip">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
