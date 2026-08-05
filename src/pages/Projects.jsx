import { useState } from "react";
import "../styles/projects.css";
import Tabs from "../components/Tabs";
import reaImage from "../assets/REA.webp";
import mega from "../assets/megasandesham.webp";
import nc from "../assets/newscurator.webp";

const PROJECTS = [
  {
    title: "AI News Curator",
    description:
      "Full-stack news aggregation using transformer models for abstractive summarisation, named-entity recognition, and keyword extraction, with cosine similarity and LDA topic modelling to rank articles against user preferences.",
    decision:
      "Ran inference in-process with the Deep Java Library instead of standing up a separate Python service — one JVM deployment, no cross-language serialisation on every request.",
    tech: "Java, Spring Boot, Hugging Face, DJL, React, Docker, Postgres",
    image: nc,
    link: "https://ainewscurator.netlify.app/",
    repo: "https://github.com/TARUNGIT98/newsAggregator-backend",
    tags: ["ai", "web"]
  },
  {
    title: "RealityStream",
    description:
      "Model-generation pipeline for the Model Earth open-source project, feeding geospatial and temporal data through six ML models (XGBoost, Random Forest, MLP and others) with parameters driven entirely from YAML config.",
    decision:
      "Refactored model loading to conditionally import only the models a run actually selects, so a single-model job no longer paid the import cost of all six.",
    tech: "Python, XGBoost, scikit-learn, pandas, YAML",
    image: null,
    link: null,
    repo: "https://github.com/TARUNGIT98/RealityStreamTarun",
    tags: ["ai"]
  },
  {
    title: "Robotic Object Detection",
    description:
      "Real-time ROS2 and YOLOv8 system detecting and classifying Mars rocks, with three coordinated nodes handling camera input, inference, and robot movement across multi-camera streams.",
    decision:
      "Split detection into its own ROS2 node so inference latency couldn't block the movement loop — the robot keeps responding even when a frame is slow.",
    tech: "ROS2, Python, YOLOv8, OpenCV, Docker, Ubuntu",
    image: null,
    link: null,
    repo: null,
    tags: ["ai"]
  },
  {
    /* TODO: real blurb, stack, and links once Alfred is public */
    title: "Alfred",
    description: "My latest build — currently in progress.",
    tech: "",
    image: null,
    badge: "Latest",
    link: null,
    repo: null,
    tags: ["ai"]
  },
  {
    title: "Megasandesham",
    description:
      "Responsive weather application whose cards change their own backgrounds and iconography to match live conditions.",
    tech: "React, Tailwind CSS, OpenWeatherMap API",
    image: mega,
    link: "https://tarungit98.github.io/megasandesham/",
    repo: "https://github.com/TARUNGIT98/megasandesham",
    tags: ["web"]
  },
  {
    title: "Real Estate Analysis",
    description:
      "Price prediction on Bangalore housing data — feature engineering and outlier handling, served from a pickled model behind a Flask API with a React front end on AWS EC2.",
    tech: "Python, pandas, scikit-learn, Flask, React, AWS, Nginx",
    image: reaImage,
    link: "http://ec2-18-116-72-123.us-east-2.compute.amazonaws.com/",
    repo: "https://github.com/TARUNGIT98/RealEstateAnalysis",
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

                {project.decision && (
                  <p className="project-decision">
                    <span>Key decision</span>
                    {project.decision}
                  </p>
                )}

                {project.tech && <div className="project-tech">{project.tech}</div>}

                {(project.link || project.repo) && (
                  <div className="project-links">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Live demo →
                      </a>
                    )}
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer">
                        Source →
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
