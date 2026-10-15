import "../styles/careerpath.css";

/* Highlights mirror the resume — keep the two in step when either changes. */
const TIMELINE = [
    {
        range: "Aug 2025 — Present",
        title: "Developer",
        place: "Reynolds and Reynolds",
        location: "Dayton, OH, USA",
        kind: "work",
        highlights: [
            "Own the financial and forecast reporting suite used by thousands of dealership users across 300+ dealer groups.",
            "Cut Parts Locator search time by 10+ seconds — validated PostgreSQL indexes with HypoPG before building them, then added a Redis cache that brought the largest enterprise under 5 seconds.",
            "Migrated 8 legacy ColdFusion reports to React, TypeScript and Node.js with zero data-integrity regressions.",
        ],
    },
    {
        range: "Feb 2025 — Aug 2025",
        title: "Open-Source ML Contributor",
        place: "Dream Studio (Model Earth)",
        location: "Remote, USA",
        kind: "work",
        highlights: [
            "Led development of the RealityStream model-generation pipeline, merging contributions from a distributed global team into one application.",
        ],
    },
    {
        range: "May 2023 — Dec 2024",
        title: "Graduate Assistant, Deep Learning",
        place: "University of Dayton",
        location: "Dayton, OH, USA",
        kind: "work",
        highlights: [
            "Supported 60+ students in the graduate Deep Learning course, running help sessions for the neural-network assignments.",
            "Guided students as they built classifiers, generative models, variational autoencoders and transformers.",
        ],
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
        highlights: [
            "Built Java and Spring Boot billing services, Kafka event-driven integrations and REST/SOAP APIs covering charges, usage and payments for tens of thousands of telecom customers.",
            "Cut billing processing time by 30% by refining the data-processing algorithms.",
            "Moved services to AWS as Docker containers with Jenkins CI/CD for automated build, test and deployment.",
        ],
    },
    {
        range: "Aug 2016 — Sep 2020",
        title: "B.Tech in Electronics & Communication",
        place: "KMIT",
        location: "Hyderabad, India",
        kind: "education",
    },
];

function CareerPath() {
    return (
        <section id="work" className="section-shell career-section">
            <div className="career-header">
                <h2 className="section-heading">Career Path</h2>
                <p className="career-subtitle">Where I've been, and what it taught me.</p>
            </div>

            <ol className="timeline">
                {TIMELINE.map((item) => (
                    <li key={item.range + item.title} className={`timeline-item ${item.kind}`}>
                        <div className="timeline-when">
                            <span className="career-range">{item.range}</span>
                            <span className={`career-badge ${item.kind}`}>
                                {item.kind === "work" ? "Work" : "Education"}
                            </span>
                        </div>

                        <span className="timeline-dot" aria-hidden="true" />

                        <div className="timeline-body">
                            <h3>{item.title}</h3>
                            <div className="career-place">
                                {item.place}
                                <span className="career-location"> · {item.location}</span>
                            </div>

                            {item.highlights && (
                                <ul className="timeline-highlights">
                                    {item.highlights.map((h) => <li key={h}>{h}</li>)}
                                </ul>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}

export default CareerPath;
