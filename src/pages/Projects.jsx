import "../styles/projects.css";
import reaImage from "../assets/REA.jpg";
import mega from "../assets/megasandesham.jpg";
import nc from "../assets/newscurator.jpg";

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

        <div className="project-card">
          <img src={mega} alt="Climate App" className="project-image" />
          <div className="project-details">
            <h2>Megasandesham!</h2>
            <p>
              This dynamic, responsive weather app is built with React and Tailwind CSS, and it integrates the OpenWeatherMap API to
              deliver real-time weather data. The application features condition-based weather cards that dynamically adjust their
              backgrounds and icons to reflect current conditions, ensuring an engaging visual experience.
              Smooth transitions and modern design elements create a polished, consumer-friendly experience.
            </p>
            <p><strong>Tech Used:</strong> React, Tailwind CSS</p>
            <div className="button-group">
              <a href="https://tarungit98.github.io/megasandesham/" className="btn outline">Demo</a>
              <a href="https://github.com/TARUNGIT98/megasandesham" className="btn filled">Source Code</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={nc} alt="Climate App" className="project-image" />
          <div className="project-details">
            <h2>AI News Curator</h2>
            <p>
              Personalized News Curator is a full-stack application that curates real-time news based on user preferences and selected regions.
              The backend fetches top headlines via NewsAPI and uses an AI filtering service (leveraging DJL,Hugging Face and semantic embeddings) to rank and refine articles.
              Users can customize news categories and regions, ensuring a tailored news feed.
              Still working on refining the articles when it comes to differnt regions and ultimate goal is to have a simple prompt to pull all necessary articles.!
            </p>
            <p><strong>Tech Used:</strong> Java, DJL, React, Docker, Postgres, Render</p>
            <div className="button-group">
              <a href="https://ainewscurator.netlify.app/" className="btn outline">Demo</a>
              <a href="https://github.com/TARUNGIT98/newsAggregator-backend" className="btn filled">Back End</a>
              <a href="https://github.com/TARUNGIT98/newsAggregator-frontend" className="btn filled">Front End</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;

