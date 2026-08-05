import { lazy, Suspense } from "react";
import CloudCutout from "../components/CloudCutout";
import StoryCard from "../components/StoryCard";
import "../styles/intro.css";

/* Three.js is ~750kB. Lazy-loading it keeps the initial bundle at ~71kB and lets
   the page become interactive first; .sky-band's CSS gradient stands in until
   the chunk arrives. */
const CloudSky = lazy(() => import("../components/CloudSky"));

function Home() {
  return (
    <section id="home" style={{ position: "relative" }}>

      {/* Height lives in intro.css so it can respond to screen size */}
      <div className="sky-band">
        <Suspense fallback={null}>
          <CloudSky />
        </Suspense>

        {/* Softens where sky meets cloud; CloudCutout does the actual blend */}
        <div style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "42%",
          background: "var(--hero-haze)",
          zIndex: 1,
          pointerEvents: "none"
        }} />

        <CloudCutout />
      </div>

      <div className="intro-section" id="about">
        <div className="intro-copy">
          <p className="intro-eyebrow">Software Developer · Machine Learning</p>
          <h1 className="intro-heading">
            Tarun <span className="accent">Sirapurapu</span>
          </h1>
          <p className="intro-text">
            I build <strong>ML pipelines, deep learning systems, and production
              full-stack applications</strong> — from multi-model training pipelines and
            transformer-based NLP services to enterprise React and TypeScript running
            at scale.
          </p>
          <p className="intro-aspiration">
            MS in Computer Science. Taught deep learning as a TA at University of Dayton, shipped telecom-scale
            backends at CGI, and now write intelligent systems that hold up in production.
          </p>
        </div>

        <StoryCard />
      </div>

    </section>
  );
}

export default Home;
