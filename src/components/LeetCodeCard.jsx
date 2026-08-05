import { useEffect, useState } from "react";

/* Light → dark as difficulty rises. Each meter is also text-labelled, so
   colour is never the only thing distinguishing them. */
const DIFFICULTY_COLOR = {
    Easy: "var(--difficulty-1)",
    Medium: "var(--difficulty-2)",
    Hard: "var(--difficulty-3)",
};

const ENDPOINTS = [
    (u) => `https://leetcode-api-faisalshohag.vercel.app/${u}`,
    (u) => `https://alfa-leetcode-api.onrender.com/${u}/solved`,
];

const normalise = (json) => {
    const easy = json.easySolved ?? 0;
    const medium = json.mediumSolved ?? 0;
    const hard = json.hardSolved ?? 0;
    const total = json.totalSolved ?? json.solvedProblem ?? easy + medium + hard;
    if (!total && !easy && !medium && !hard) return null;
    return {
        total,
        ranking: json.ranking ?? null,
        breakdown: [
            { name: "Easy", solved: easy, of: json.totalEasy ?? null },
            { name: "Medium", solved: medium, of: json.totalMedium ?? null },
            { name: "Hard", solved: hard, of: json.totalHard ?? null },
        ],
    };
};

const LeetCodeCard = ({ username }) => {
    const [stats, setStats] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;
        const cacheKey = `leetcode:${username}`;

        /* Paint the cached values first, then refetch. These endpoints are
           free-tier and can cold-start for several seconds. */
        try {
            const cached = sessionStorage.getItem(cacheKey);
            if (cached) setStats(JSON.parse(cached));
        } catch { /* private mode */ }

        (async () => {
            for (const build of ENDPOINTS) {
                try {
                    const res = await fetch(build(username));
                    if (!res.ok) continue;
                    const parsed = normalise(await res.json());
                    if (parsed && !cancelled) {
                        setStats(parsed);
                        try {
                            sessionStorage.setItem(cacheKey, JSON.stringify(parsed));
                        } catch { /* quota or private mode */ }
                        return;
                    }
                } catch {
                    /* try the next endpoint */
                }
            }
            /* Only error out if the cache left us with nothing to render */
            if (!cancelled) {
                setStats((current) => {
                    if (!current) setError("Couldn't reach LeetCode right now.");
                    return current;
                });
            }
        })();

        return () => { cancelled = true; };
    }, [username]);

    /* Bar widths are a share of this total, so width and printed number agree */
    const solvedTotal = stats
        ? Math.max(stats.breakdown.reduce((n, d) => n + d.solved, 0), 1)
        : 1;

    return (
        <div className="dsa-card">
            <div className="dsa-card-head">
                <span className="dsa-card-title">LeetCode</span>
                <span className={`dsa-status ${stats ? "live" : "static"}`}>
                    <span className="dsa-dot" />
                    {stats ? "Live" : "Loading"}
                </span>
            </div>

            {error && <p className="dsa-msg">{error}</p>}

            {!stats && !error && (
                <div className="dsa-meters" aria-busy="true">
                    <div className="dsa-skeleton" />
                    <div className="dsa-skeleton" />
                    <div className="dsa-skeleton" />
                </div>
            )}

            {stats && (
                <>
                    <div className="dsa-hero">
                        <span className="dsa-hero-value">{stats.total}</span>
                        <span className="dsa-hero-suffix">problems solved</span>
                    </div>
                    <p className="dsa-hero-label">
                        {stats.ranking
                            ? `Global rank #${stats.ranking.toLocaleString()} · by difficulty below`
                            : "Broken down by difficulty below"}
                    </p>

                    <div className="dsa-meters">
                        {stats.breakdown.map((d) => (
                            <div key={d.name}>
                                <div className="dsa-meter-top">
                                    <span className="dsa-meter-name">{d.name}</span>
                                    <span className="dsa-meter-value">
                                        <b>{d.solved}</b>
                                        {` · ${Math.round((d.solved / solvedTotal) * 100)}%`}
                                    </span>
                                </div>
                                <div
                                    className="dsa-track"
                                    role="meter"
                                    aria-valuenow={d.solved}
                                    aria-valuemin={0}
                                    aria-valuemax={solvedTotal}
                                    aria-label={`${d.name} share of problems solved`}
                                >
                                    <div
                                        className="dsa-fill"
                                        style={{
                                            width: `${(d.solved / solvedTotal) * 100}%`,
                                            background: DIFFICULTY_COLOR[d.name],
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            <div className="dsa-foot">
                <span className="dsa-note">Fetched live on page load</span>
                <a
                    className="dsa-link"
                    href={`https://leetcode.com/u/${username}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View profile →
                </a>
            </div>
        </div>
    );
};

export default LeetCodeCard;
