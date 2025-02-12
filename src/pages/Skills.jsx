import "../styles/skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-list">
        <div className="skill">
          <h3>Programming Languages</h3>
          <p>Python, JavaScript, Java, C++</p>
        </div>
        <div className="skill">
          <h3>Web Development</h3>
          <p>React, Node.js, Express.js, HTML, CSS</p>
        </div>
        <div className="skill">
          <h3>Machine Learning</h3>
          <p>TensorFlow, PyTorch, Scikit-learn</p>
        </div>
        <div className="skill">
          <h3>Databases</h3>
          <p>SQL, PostgreSQL, MongoDB</p>
        </div>
        <div className="skill">
          <h3>DevOps & Tools</h3>
          <p>Git, Docker, CI/CD, Linux</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
