import "../styles/about.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <img src="/profile.jpg" alt="Profile" className="about-image" />
        <div className="about-text">
          <p>
            Hi, I'm <strong>Your Name</strong>, an AI/ML Developer passionate about
            building intelligent and efficient software. I have experience in **React, Python, JavaScript, and AI/ML**.
          </p>
          <p>
            I am currently pursuing **my final semester as a graduate assistant** and exploring **internship opportunities** in AI/ML.
          </p>
          <p>
            My interests include **deep learning, computer vision, and software engineering**. I also love working on open-source projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
