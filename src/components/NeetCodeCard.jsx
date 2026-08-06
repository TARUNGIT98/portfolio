/* NeetCode exposes no public API, so these are maintained by hand. */
const LAST_UPDATED = "August 2026";
const SOLVED = 52;
const TOTAL = 75;

const ROADMAP = [
    { name: "Arrays & Hashing", solved: 8, of: 8 },
    { name: "1-D Dynamic Programming", solved: 8, of: 10 },
    { name: "Trees", solved: 6, of: 11 },
    { name: "Linked List", solved: 5, of: 6 },
    { name: "Sliding Window", solved: 3, of: 4 },
    { name: "Two Pointers", solved: 3, of: 3 },
    { name: "Binary Search", solved: 2, of: 2 },
    { name: "Backtracking", solved: 2, of: 2 },
    { name: "Graphs", solved: 2, of: 6 },
    { name: "Stack", solved: 1, of: 1 },
    { name: "Tries", solved: 0, of: 3 },
    { name: "Heap / Priority Queue", solved: 0, of: 1 },
    { name: "Advanced Graphs", solved: 0, of: 1 },
    { name: "2-D Dynamic Programming", solved: 0, of: 2 },
];

/* Categories rendered before the "+N more" note */
const VISIBLE = 4;

/* Same ramp as LeetCodeCard: darker step = further along */
const fillFor = (pct) =>
    pct >= 0.99
        ? "var(--difficulty-3)"
        : pct >= 0.5
            ? "var(--difficulty-2)"
            : "var(--difficulty-1)";

const NeetCodeCard = () => {
    const ranked = [...ROADMAP].sort(
        (a, b) => b.solved / b.of - a.solved / a.of || b.of - a.of
    );
    const shown = ranked.slice(0, VISIBLE);
    const completed = ROADMAP.filter((c) => c.solved === c.of).length;

    return (
        <div className="dsa-card">
            <div className="dsa-card-head">
                <span className="dsa-card-title">Blind 75</span>
                <span className="dsa-status static">
                    <span className="dsa-dot" />
                    Self-tracked
                </span>
            </div>

            <div className="dsa-hero">
                <span className="dsa-hero-value">{SOLVED}</span>
                <span className="dsa-hero-suffix">of {TOTAL} completed</span>
            </div>
            <p className="dsa-hero-label">
                {completed} categories fully cleared · strongest first
            </p>

            <div className="dsa-meters">
                {shown.map((c) => {
                    const pct = c.solved / c.of;
                    return (
                        <div key={c.name}>
                            <div className="dsa-meter-top">
                                <span className="dsa-meter-name">{c.name}</span>
                                <span className="dsa-meter-value">
                                    <b>{c.solved}</b> / {c.of}
                                </span>
                            </div>
                            <div
                                className="dsa-track"
                                role="meter"
                                aria-valuenow={c.solved}
                                aria-valuemin={0}
                                aria-valuemax={c.of}
                                aria-label={`${c.name} progress`}
                            >
                                <div
                                    className="dsa-fill"
                                    style={{
                                        width: `${pct * 100}%`,
                                        background: fillFor(pct),
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="dsa-foot">
                <span className="dsa-note">
                    +{ROADMAP.length - VISIBLE} more · updated {LAST_UPDATED}
                </span>
                <a
                    className="dsa-link"
                    href="https://neetcode.io/practice"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See the roadmap
                </a>
            </div>
        </div>
    );
};

export default NeetCodeCard;