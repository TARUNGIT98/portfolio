import "../styles/resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <p>Download my resume below:</p>
      <a href="/resume.pdf" download className="download-btn">Download Resume</a>
    </div>
  );
}

export default Resume;
