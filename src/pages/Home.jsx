import { lazy, Suspense } from "react";
import CloudCutout from "../components/CloudCutout";
import StoryCard from "../components/StoryCard";
import "../styles/intro.css";

/* Three.js is ~700kB — far and away the heaviest thing we ship. Loading it
   lazily lets the page render and become interactive first; the sky fades in
   a moment later over a plain gradient that matches its top colour. */
const CloudSky = lazy(() => import("../components/CloudSky"));

function Home() {
  return (
    <section id="home" style={{ position: "relative" }}>

      {/* Sky band — hooked to the top */}
      <div style={{ position: "relative", height: "66vh", overflow: "hidden", background: "var(--sky-fallback)" }}>
        <Suspense fallback={null}>
          <CloudSky />
        </Suspense>

        {/* Just enough haze to soften where the sky meets the cloud tops —
            the cutout below does the actual blending. */}
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

        {/* Crisp cloud edge in the page colour */}
        <CloudCutout />
      </div>

      {/* Intro on the left, story card on the right */}
      <div className="intro-section" id="about">
        <div className="intro-copy">
          <p className="intro-eyebrow">Hello, This is</p>
          <h1 className="intro-heading">
            Tarun <span className="accent">Sirapurapu</span>
          </h1>
          <p className="intro-text">
            Developer at <strong>Reynolds &amp; Reynolds</strong>, building enterprise grade
            web applications with React and TypeScript. Before this building telecom scale backend
            systems at CGI, open-source ML pipelines, and a master's in computer science.
          </p>
          <p className="intro-aspiration">
            I'm working toward the intersection of AI and product building intelligent,
            scalable software that feels effortless to use.
          </p>
        </div>

        <StoryCard />
      </div>

    </section>
  );
}

export default Home;
