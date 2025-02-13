import "../styles/projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project-card">
          <img src="https://via.placeholder.com/150" alt="AI Image Classifier" className="project-image" />
          <div className="project-details">
            <h3>AI Image Classifier</h3>
            <p>Deep learning project for real-time image recognition.</p>
            <p><strong>Tech Used:</strong> React, TensorFlow, Flask</p>
            <div className="button-group">
              <a href="#" className="btn outline">Demo</a>
              <a href="#" className="btn filled">Source Code</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src="https://via.placeholder.com/150" alt="Chatbot AI" className="project-image" />
          <div className="project-details">
            <h3>Chatbot AI</h3>
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
