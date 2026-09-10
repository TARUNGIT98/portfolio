/* NeetCode exposes no public API, so this list is maintained by hand.
   The headline figures are derived from it, so they can't drift out of sync. */
const LAST_UPDATED = "September 2026";

const ROADMAP = [
    { name: "Arrays & Hashing", solved: 8, of: 8 },
    { name: "Two Pointers", solved: 3, of: 3 },
    { name: "Sliding Window", solved: 4, of: 4 },
    { name: "Stack", solved: 1, of: 1 },
    { name: "Binary Search", solved: 2, of: 2 },
    { name: "Linked List", solved: 5, of: 6 },
    { name: "Trees", solved: 9, of: 11 },
    { name: "Heap / Priority Queue", solved: 0, of: 1 },
    { name: "Backtracking", solved: 2, of: 2 },
    { name: "Tries", solved: 0, of: 3 },
    { name: "Graphs", solved: 2, of: 6 },
    { name: "Advanced Graphs", solved: 0, of: 1 },
    { name: "1-D Dynamic Programming", solved: 8, of: 10 },
    { name: "2-D Dynamic Programming", solved: 0, of: 2 },
    { name: "Greedy", solved: 2, of: 2 },
    { name: "Intervals", solved: 5, of: 5 },
    { name: "Math & Geometry", solved: 3, of: 3 },
    { name: "Bit Manipulation", solved: 5, of: 5 },
];

const SOLVED = ROADMAP.reduce((n, c) => n + c.solved, 0);
const TOTAL = ROADMAP.reduce((n, c) => n + c.of, 0);

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
        <div className="surface-card dsa-card">
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
                {completed} categories fully cleared
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