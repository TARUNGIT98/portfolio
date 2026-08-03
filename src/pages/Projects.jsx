import "../styles/projects.css";
import reaImage from "../assets/REA.jpg";
import mega from "../assets/megasandesham.jpg";
import nc from "../assets/newscurator.jpg";

function Projects() {
  const projects = [
    {
      title: "Real Estate Analysis",
      description: "Regression model for real-estate price prediction. Developed using Python on backend and React on front end. Deployed on AWS EC2.",
      tech: "Python, pandas, Flask, React",
      image: reaImage,
      link: "http://ec2-18-116-72-123.us-east-2.compute.amazonaws.com/"
    },
    {
      title: "Megasandesham!",
      description: "This dynamic, responsive weather application features condition-based weather cards that dynamically adjust their backgrounds and icons to reflect current conditions.",
      tech: "React, Tailwind CSS, OpenweatherMap API",
      image: mega,
      link: "https://tarungit98.github.io/megasandesham/"
    },
    {
      title: "AI News Curator",
      description: "Personalized News Curator is a full-stack application that curates real-time news based on user preferences and selected regions.",
      tech: "Java, DJL, React, Docker, Postgres, Render",
      image: nc,
      link: "https://ainewscurator.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-heading">Personal Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
            <div className="project-card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">{project.tech}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
