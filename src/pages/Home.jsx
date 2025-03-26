import "../styles/home.css";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import tarunImage from "../assets/TarunHeadshot.jpg";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <p className="intro-text">Welcome to my portfolio</p>
          <h1>
            Hello, I'm <span className="highlight">Tarun</span>
          </h1>
          <h2><strong>Software Engineer</strong></h2>
          <p className="description">
            With a background in Deep Learning and Software Developement<br />
            I specialize in creating efficient, scalable, and user-friendly applications.
            Passionate about problem-solving and AI-driven innovations.
          </p>
          <div className="buttons">
            <a href="https://linkedin.com/saitarunisrapurapu" target="_blank" rel="noopener noreferrer" className="btn">
              <FaLinkedin className="icon" /> LinkedIn
            </a>
            <a href="https://github.com/TARUNGIT98" target="_blank" rel="noopener noreferrer" className="btn">
              <FaGithub className="icon" /> GitHub
            </a>
            <a href="/SaiTarunSirapurapu_Resume'.pdf" download className="btn">
              <FaFileAlt className="icon" /> Resume
            </a>
          </div>
        </div>
        <div className="home-image">
          <img src={tarunImage} alt="Tarun Sirapurapu" />
        </div>
      </div>
    </div>
  );
}

export default Home;
