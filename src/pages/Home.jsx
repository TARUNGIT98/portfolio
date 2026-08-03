import CloudSky from "../components/CloudSky";
import "../styles/intro.css";

function Home() {
  return (
    <section id="home" style={{ position: "relative" }}>

      {/* Sky band — hooked to the top */}
      <div style={{ position: "relative", height: "58vh", overflow: "hidden" }}>
        <CloudSky />

        {/* Long soft dissolve into the page white */}
        <div style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "55%",
          background: `linear-gradient(to bottom,
            rgba(250, 250, 247, 0) 0%,
            rgba(250, 250, 247, 0.08) 22%,
            rgba(250, 250, 247, 0.25) 45%,
            rgba(250, 250, 247, 0.55) 68%,
            rgba(250, 250, 247, 0.85) 86%,
            #FAFAF7 100%)`,
          zIndex: 1,
          pointerEvents: "none"
        }} />
      </div>

      {/* Intro — first thing after the sky */}
      <div className="intro-section">
        <p className="intro-eyebrow">Hello, I'm</p>
        <h1 className="intro-heading">
          Sai Tarun <span className="accent">Sirapurapu</span>
        </h1>
        <p className="intro-text">
          Developer at <strong>Reynolds &amp; Reynolds</strong>, building enterprise-grade
          web applications with React and TypeScript. Before this: telecom-scale backend
          systems at CGI, open-source ML pipelines, and a master's in computer science.
        </p>
        <p className="intro-aspiration">
          I'm working toward the intersection of AI and product — building intelligent,
          scalable software that feels effortless to use.
        </p>
      </div>

    </section>
  );
}

export default Home;
