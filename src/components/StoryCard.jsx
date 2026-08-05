import { useState } from "react";
import "../styles/story.css";

const StoryCard = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className={open ? "envelope is-open" : "envelope"}>

            {/* The flap — swings back on open */}
            <div className="env-flap" aria-hidden="true" />

            {/* The letter slides up out of the pocket */}
            <div className="letter-wrap">
                <div className="letter">
                    <p className="story-eyebrow">My Story</p>

                    <div className="story-block">
                        <h3>How I got here</h3>
                        <p>
                            I started out in electronics was pulled into the world of developement through sheer interest. Four years
                            later I was at <strong>CGI</strong> writing telecom billing systems in
                            Java.
                        </p>
                    </div>

                    <div className="story-block">
                        <h3>The detour that stuck</h3>
                        <p>
                            A master's at Dayton turned into teaching deep learning, and teaching
                            turned into building. Somewhere between NNs and open-source ML pipelines,
                            I learned a thing or two about AI and I'm still catching up.
                        </p>
                    </div>

                    <div className="story-block">
                        <h3>What am I seeking</h3>
                        <p>
                            Now I build enterprise front-ends by day and intelligent systems by night.
                            The goal is to build products that use the intelligent systems at hand to their fullest.
                        </p>
                    </div>

                    <div className="story-signoff">
                        <div className="story-signature">Tarun</div>
                    </div>
                </div>
            </div>

            {/* The pocket front — the letter emerges from behind this */}
            <div className="env-pocket" aria-hidden="true" />

            {/* Closed, the envelope itself is the target; open, only the
                close pill is, so the letter text stays selectable. */}
            <button
                className="env-button"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-label={open ? "Close the letter" : "Open the letter"}
            >
                {open && <span className="env-hint">Close the letter</span>}
            </button>
        </div>
    );
};

export default StoryCard;
