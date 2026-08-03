import { useState } from "react";
import "../styles/projects.css";
import Tabs from "../components/Tabs";
import reaImage from "../assets/REA.webp";
import mega from "../assets/megasandesham.webp";
import nc from "../assets/newscurator.webp";

const PROJECTS = [
  {
    /* TODO: fill in the real blurb, tech stack and link once Alfred is public */
    title: "Alfred",
    description: "My latest build — currently in progress.",
    tech: "",
    image: null,
    badge: "Latest",
    link: null,
    tags: ["ai"]
  },
  {
    title: "Real Estate Analysis",
    description: "Regression model for real-estate price prediction. Developed using Python on backend and React on front end. Deployed on AWS EC2.",
    tech: "Python, pandas, Flask, React",
    image: reaImage,
    link: "http://ec2-18-116-72-123.us-east-2.compute.amazonaws.com/",
    tags: ["ai", "web"]
  },
  {
    title: "Megasandesham!",
    description: "This dynamic, responsive weather application features condition-based weather cards that dynamically adjust their backgrounds and icons to reflect current conditions.",
    tech: "React, Tailwind CSS, OpenweatherMap API",
    image: mega,
    link: "https://tarungit98.github.io/megasandesham/",
    tags: ["web"]
  },
  {
    title: "AI News Curator",
    description: "Personalized News Curator is a full-stack application that curates real-time news based on user preferences and selected regions.",
    tech: "Java, DJL, React, Docker, Postgres, Render",
    image: nc,
    link: "https://ainewscurator.netlify.app/",
    tags: ["ai", "web"]
  }
];

const FILTERS = [
  { id: "ai", label: "AI / ML" },
  { id: "web", label: "Web" }
];

function Projects() {
  const [filter, setFilter] = useState(FILTERS[0].id);

  const projects = PROJECTS.filter((p) => p.tags.includes(filter));

  const tabs = FILTERS.map((f) => ({
    ...f,
    count: PROJECTS.filter((p) => p.tags.includes(f.id)).length
  }));

  return (
    <section id="projects" className="section-shell projects-section">
      <div className="projects-header">
        <h2 className="section-heading">Personal Projects</h2>
        <Tabs tabs={tabs} active={filter} setActive={setFilter} />
      </div>

      <div className="projects-grid">
        {projects.map((project) => {
          const thumb = project.image
            ? <img src={project.image} alt={project.title} loading="lazy" width="800" height="400" />
            : <div className="project-placeholder"><span>{project.title}</span></div>;

          return (
            <div key={project.title} className="project-card">
              {project.link
                ? <a href={project.link} target="_blank" rel="noopener noreferrer">{thumb}</a>
                : thumb}
              <div className="project-card-body">
                <h3>
                  {project.title}
                  {project.badge && <span className="project-badge">{project.badge}</span>}
                </h3>
                <p>{project.description}</p>
                {project.tech && <div className="project-tech">{project.tech}</div>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
