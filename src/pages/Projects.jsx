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

// import React from "react";
// import "../styles/projects.css";
// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import reaImage from "../assets/rea.jpg";

// const projects = [
//   {
//     title: "Real Estate Analysis",
//     description: "Deep learning project for real-estate price prediction using linear regression and polynomial regression models.",
//     image: reaImage,
//     tech: ["Python", "pandas", "Flask"],
//     demo: "#",
//     source: "#",
//   },
//   {
//     title: "Chatbot AI",
//     description: "AI chatbot using NLP and machine learning.",
//     image: "https://via.placeholder.com/280",
//     tech: ["React", "OpenAI GPT", "Node.js"],
//     demo: "#",
//     source: "#",
//   },
// ];

// function Projects() {
//   return (
//     <div className="projects-container">
//       <h2 className="projects-title">My Projects</h2>
//       <div className="projects-grid">
//         {projects.map((project, index) => (
//           <div key={index} className="project-card">
//             <img src={project.image} alt={project.title} className="project-image" />
//             <div className="project-details">
//               <h3 className="project-title">{project.title}</h3>
//               <p className="project-description">{project.description}</p>
//               <p className="project-tech">
//                 <strong>Tech Used:</strong> {project.tech.join(", ")}
//               </p>
//               <div className="button-group">
//                 {project.demo && (
//                   <a href={project.demo} className="btn outline" target="_blank" rel="noopener noreferrer">
//                     <FaExternalLinkAlt className="icon" /> Demo
//                   </a>
//                 )}
//                 {project.source && (
//                   <a href={project.source} className="btn filled" target="_blank" rel="noopener noreferrer">
//                     <FaGithub className="icon" /> Source Code
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;
