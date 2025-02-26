import "../styles/projects.css";
import reaImage from "../assets/REA.jpg";

function Projects() {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src={reaImage} alt="Regression" className="project-image" />
          <div className="project-details">
            <h2>Real Estate Analysis</h2>
            <p>Regression model for real-estate price prediction.
              Developed using python on backend and react on front end.
              Deployed on AWS EC2 service.
            </p>
            <p><strong>Tech Used:</strong> Python, pandas, Flask, React</p>
            <div className="button-group">
              <a href="http://ec2-18-116-72-123.us-east-2.compute.amazonaws.com/" className="btn outline">Demo</a>
              <a href="https://github.com/TARUNGIT98/RealEstateAnalysis" className="btn filled">Source Code</a>
            </div>
          </div>
        </div>

        <div className="project-card">
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
        </div>
      </div>
    </div>
  );
}

export default Projects;

