import { useRef, useState, useEffect } from "react";
import "../styles/careerpath.css";

function CareerPath() {
    const trackRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const updateArrows = () => {
        const el = trackRef.current;
        if (!el) return;
        setAtStart(el.scrollLeft <= 2);
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
    };

    useEffect(updateArrows, []);

    const scrollBy = (dir) => {
        const el = trackRef.current;
        if (!el) return;
        el.scrollBy({ left: dir * 324, behavior: "smooth" });
    };

    const timeline = [
        {
            range: "Aug 2025 — Present",
            title: "Developer",
            place: "Reynolds and Reynolds",
            location: "Dayton, OH, USA",
            kind: "work",
        },
        {
            range: "Feb 2025 — Aug 2025",
            title: "Open-Source ML Contributor",
            place: "Dream Studio (Model Earth)",
            location: "Remote, USA",
            kind: "work",
        },
        {
            range: "May 2023 — Dec 2024",
            title: "Graduate Assistant, Deep Learning",
            place: "University of Dayton",
            location: "Dayton, OH, USA",
            kind: "work",
        },
        {
            range: "Jan 2023 — Dec 2024",
            title: "MS in Computer Science",
            place: "University of Dayton",
            location: "Dayton, OH, USA",
            kind: "education",
        },
        {
            range: "Oct 2020 — Dec 2022",
            title: "Software Engineer",
            place: "CGI Inc.",
            location: "Bangalore, India",
            kind: "work",
        },
        {
            range: "Aug 2016 — Sep 2020",
            title: "B.Tech in Electronics & Communication",
            place: "KMIT",
            location: "Hyderabad, India",
            kind: "education",
        },
    ];

    return (
        <section id="work" className="section-shell career-section">
            <div className="career-header">
                <h2 className="section-heading">Career Path</h2>
                <p className="career-subtitle">Where I've been, and what it taught me.</p>
            </div>

            <div className="career-track" ref={trackRef} onScroll={updateArrows}>
                {timeline.map((item) => (
                    <div key={item.range + item.title} className="career-card">
                        <div className="career-meta">
                            <span className="career-range">{item.range}</span>
                            <span className={`career-badge ${item.kind}`}>
                                {item.kind === "work" ? "Work" : "Education"}
                            </span>
                        </div>
                        <h3>{item.title}</h3>
                        <div className="career-place">{item.place}</div>
                        <div className="career-location">{item.location}</div>
                    </div>
                ))}
            </div>

            <div className="career-controls">
                <button
                    className="career-arrow"
                    onClick={() => scrollBy(-1)}
                    disabled={atStart}
                    aria-label="Previous"
                >
                    ←
                </button>
                <button
                    className="career-arrow"
                    onClick={() => scrollBy(1)}
                    disabled={atEnd}
                    aria-label="Next"
                >
                    →
                </button>
            </div>
        </section>
    );
}

export default CareerPath;
