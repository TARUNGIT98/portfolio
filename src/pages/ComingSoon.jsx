import React, { useEffect, useState } from "react";

const BG = "#0C0C0C";
const FG = "#F7F3EC";

/* ── Scramble on hover ── */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%".split("");
function scramble(final, progress) {
  return final.split("").map((ch, i) => {
    if (ch === " ") return " ";
    if (i / final.length < progress) return ch;
    return CHARS[Math.floor(Math.random() * CHARS.length)];
  }).join("");
}

function ScrambleText({ text, trigger }) {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    if (!trigger) return;
    let frame = 0;
    const id = setInterval(() => {
      frame++;
      setDisplay(scramble(text, frame / 30));
      if (frame >= 30) { clearInterval(id); setDisplay(text); }
    }, 40);
    return () => clearInterval(id);
  }, [trigger, text]);
  return <span>{display}</span>;
}

/*
  R(0) e(1) d(2) e(3) s(4) i(5) g(6) n(7) i(8) n(9) g(10)
  Second 'e' = index 3 → flips on Y axis every 5s
*/
function AnimatedTitle({ visible }) {
  const word = "Redesigning";
  return (
    <span style={{ perspective: "800px", display: "inline-block" }}>
      {word.split("").map((ch, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            color: i === 3 ? FG : "#E8541A",
            ...(i === 3 ? {
              animation: "flipChar 5s ease-in-out infinite",
              transformStyle: "preserve-3d",
            } : {}),
            opacity: visible ? 1 : 0,
            transform: visible && i !== 3 ? "translateY(0)" : "translateY(60px)",
            transition: `opacity 0.7s ease ${i * 45}ms,
                         transform 1s cubic-bezier(0.16,1,0.3,1) ${i * 45}ms`,
          }}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

/* ── Main ── */
export default function ComingSoon() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={styles.root}>

      {/* ── Header: name top-left, links top-right ── */}
      <header style={styles.header}>
        <div style={styles.name}>
          <div>Tarun</div>
          <div>Sirapurapu</div>
        </div>
        <div style={styles.headerLinks}>
          <a href="https://github.com/TARUNGIT98" target="_blank" rel="noreferrer" style={styles.headerLink}>GH</a>
          <span style={{ opacity: 0.25 }}>·</span>
          <a href="https://linkedin.com/in/tarun-sirapurapu" target="_blank" rel="noreferrer" style={styles.headerLink}>LI</a>
        </div>
      </header>

      {/* Heading — absolutely centered on the full viewport */}
      <div style={styles.headingWrap}>
        <h1 style={styles.heading}>
          <AnimatedTitle visible={visible} />
        </h1>
      </div>

      {/* Content block — absolute, bottom-right, clear of the heading */}
      <div style={styles.rightBlock}>
        <p style={styles.sub}>
          Busy rethinking the whole design<br />
          and rewiring the codebase.<br />
          Using little wisdom I gained over past year as a DEV
        </p>
        <div style={styles.divider} />
        <a
          href="mailto:tarunrhymes7@gmail.com"
          style={{ ...styles.cta, ...(hovered ? styles.ctaHover : {}) }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <ScrambleText text="Get in touch" trigger={hovered} />&nbsp;→
        </a>
      </div>

    </div>
  );
}

/* ── Styles ── */
const styles = {
  root: {
    minHeight: "100vh",
    background: BG,
    color: FG,
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
    display: "flex",
    flexDirection: "column",
    padding: "36px 48px",
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
  },

  /* Header */
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexShrink: 0,
  },
  name: {
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: "clamp(1rem, 1.6vw, 1.4rem)",
    fontWeight: 700,
    lineHeight: 1.35,
    letterSpacing: "0.01em",
    color: FG,
  },
  headerLinks: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.08em",
  },
  headerLink: {
    color: FG,
    textDecoration: "none",
    opacity: 0.4,
    transition: "opacity 0.2s",
  },

  /* Heading — pinned to true viewport center via absolute */
  headingWrap: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    whiteSpace: "nowrap",
  },
  heading: {
    fontSize: "clamp(4rem, 12vw, 11rem)",
    fontFamily: "'Playfair Display', ui-serif, Georgia, serif",
    fontWeight: 700,
    lineHeight: 0.95,
    letterSpacing: "-0.025em",
    margin: 0,
    color: FG,
  },

  /* Content block — absolute, far bottom-right, clear of the heading */
  rightBlock: {
    position: "absolute",
    right: 48,          /* matches root padding */
    bottom: "14%",
    width: 280,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  sub: {
    fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
    lineHeight: 1.85,
    color: FG,
    opacity: 0.5,
    margin: 0,
    fontWeight: 400,
  },
  divider: {
    width: 32,
    height: 1,
    background: FG,
    opacity: 0.2,
  },
  cta: {
    fontSize: 13,
    fontWeight: 700,
    color: BG,
    background: FG,
    padding: "10px 20px",
    borderRadius: 4,
    textDecoration: "none",
    letterSpacing: "0.04em",
    transition: "opacity 0.2s, transform 0.2s",
    fontFamily: "monospace",
    display: "inline-block",
    whiteSpace: "nowrap",
    alignSelf: "flex-start",
  },
  ctaHover: {
    opacity: 0.85,
    transform: "translateY(-2px)",
  },
};
