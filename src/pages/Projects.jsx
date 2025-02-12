import { motion } from "framer-motion";
import "../styles/projects.css";

function Projects() {
  const projects = [
    {
      title: "AI Image Classifier",
      description: "A deep learning project for real-time image classification.",
      tech: "Tech Used: React, TensorFlow, Python, Flask",
      demoLink: "#",
      frontendLink: "#",
      backendLink: "#",
      image: "https://via.placeholder.com/150", // Replace with actual image
    },
    {
      title: "Chatbot AI",
      description: "An intelligent chatbot using NLP and deep learning.",
      tech: "Tech Used: React, OpenAI GPT, Node.js, MongoDB",
      demoLink: "#",
      frontendLink: "#",
      backendLink: "#",
      image: "https://via.placeholder.com/150", // Replace with actual image
    },
  ];

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <motion.div
        className="projects-grid"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>{project.tech}</strong></p>
              <div className="button-group">
                <a href={project.demoLink} className="btn outline">Demo</a>
                <a href={project.frontendLink} className="btn filled">Frontend</a>
                <a href={project.backendLink} className="btn filled">Backend</a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
