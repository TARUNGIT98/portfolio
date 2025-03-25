import "../styles/projects.css";
import reaImage from "../assets/REA.jpg";
import mega from "../assets/megasandesham.jpg";
import nc from "../assets/newscurator.jpg";

function Projects() {
  return (
    <div className="projects-container">
      <h2>Personal Projects</h2>
      <div className="projects-grid">
        <div className="project-card vertical">
          <a href="http://ec2-18-116-72-123.us-east-2.compute.amazonaws.com/" target="_blank" rel="noopener noreferrer">
            <img src={reaImage} alt="Regression" className="project-image" />
          </a>
          <div className="project-details">
            <h2>Real Estate Analysis</h2>
            <p>
              Regression model for real-estate price prediction. Developed using Python on backend and React on front end. Deployed on AWS EC2.
            </p>
            <p><strong>Tech Used:</strong> Python, pandas, Flask, React</p>
          </div>
        </div>

        {/* <div className="project-card">
          <img src="https://via.placeholder.com/150" alt="Chatbot AI" className="project-image" />
          <div className="project-details">
            <h2>Chatbot AI</h2>
            <p>AI chatbot using NLP and machine learning.</p>
            <p><strong>Tech Used:</strong> React, OpenAI GPT, Node.js</p>
            <div className="button-group">
              <a href="#" className="btn outline">Demo</a>
              <a href="#" className="btn filled">Source Code</a>
            </div>
          </div>
        </div> */}

        <div className="project-card vertical">
          <a href="https://tarungit98.github.io/megasandesham/" target="_blank" rel="noopener noreferrer">
            <img src={mega} alt="Climate App" className="project-image" />
          </a>

          <div className="project-details">
            <h2>Megasandesham!</h2>
            <p>
              This dynamic, responsive weather application features condition-based weather cards that dynamically adjust their
              backgrounds and icons to reflect current conditions, ensuring an engaging visual experience.
              Smooth transitions and modern design elements create a polished, consumer-friendly experience.
            </p>
            <p><strong>Tech Used:</strong> React, Tailwind CSS, OpenweatherMap API</p>
          </div>
        </div>

        <div className="project-card">
          <a href="https://ainewscurator.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src={nc} alt="Climate App" className="project-image" />
          </a>
          <div className="project-details">
            <h2>AI News Curator</h2>
            <p>
              Personalized News Curator is a full-stack application that curates real-time news based on user preferences and selected regions.
              Still working on refining the articles when it comes to differnt regions and ultimate goal is to have a simple prompt to pull all necessary articles.!
            </p>
            <p><strong>Tech Used:</strong> Java, DJL, React, Docker, Postgres, Render</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;

