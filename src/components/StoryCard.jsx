import { useState } from "react";
import "../styles/story.css";

const StoryCard = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className={open ? "envelope is-open" : "envelope"}>

            <div className="env-flap" aria-hidden="true" />

            <div className="letter-wrap">
                <div className="letter">
                    <p className="story-eyebrow">My Story</p>

                    <div className="story-block">
                        <h3>How I got here</h3>
                        <p>
                            I started out in electronics and was pulled into the world of development through sheer interest. Four years
                            later I was at <strong>CGI</strong> writing telecom billing systems in
                            Java.
                        </p>
                    </div>

                    <div className="story-block">
                        <h3>The detour that stuck</h3>
                        <p>
                            A master's at Dayton turned into teaching deep learning, and teaching
                            turned into building. Somewhere between NNs and open-source ML pipelines,
                            I stopped treating AI as a subject and started using it as a tool.
                        </p>
                    </div>

                    <div className="story-block">
                        <h3>What I'm seeking</h3>
                        <p>
                            Today I ship enterprise React and TypeScript at <strong>Reynolds</strong>, and
                            build ML projects after hours. Next, I want a role where the two meet: putting
                            models into products people actually use.
                        </p>
                    </div>

                    <div className="story-signoff">
                        <div className="story-signature">Tarun</div>
                    </div>
                </div>
            </div>

            <div className="env-pocket" aria-hidden="true" />
            <div className="env-flap-shadow" aria-hidden="true"><span /></div>
            {/* Red wax seal on the flap tip */}
            <svg className="env-seal" viewBox="0 0 60 60" aria-hidden="true">
                <defs>
                    {/* Raised rim: lit from the top-left like the envelope */}
                    <radialGradient id="wax-rim" cx="36%" cy="30%" r="80%">
                        <stop offset="0%" stopColor="#a3302c" />
                        <stop offset="55%" stopColor="#7d1a1a" />
                        <stop offset="100%" stopColor="#4f0d0e" />
                    </radialGradient>
                    {/* Pressed-in centre: shading reversed, so it reads as a hollow */}
                    <radialGradient id="wax-well" cx="62%" cy="68%" r="75%">
                        <stop offset="0%" stopColor="#8a2421" />
                        <stop offset="70%" stopColor="#6a1415" />
                        <stop offset="100%" stopColor="#4a0b0c" />
                    </radialGradient>
                    {/* Uneven, matte wax surface */}
                    <filter id="wax-tex" x="-10%" y="-10%" width="120%" height="120%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.09" numOctaves="1" seed="4" result="noise" />
                        <feDiffuseLighting in="noise" surfaceScale="3" lightingColor="#ffffff" result="light">
                            <feDistantLight azimuth="225" elevation="58" />
                        </feDiffuseLighting>
                        <feComposite in="light" in2="SourceGraphic" operator="in" result="lit" />
                        <feBlend in="SourceGraphic" in2="lit" mode="multiply" />
                    </filter>
                </defs>
                <g filter="url(#wax-tex)">
                    <path d="M58.9 30.0C58.9 31.2 58.1 32.5 57.7 33.7C57.4 34.8 57.1 36.0 56.8 37.2C56.4 38.3 56.3 39.6 55.7 40.7C55.2 41.7 54.3 42.6 53.5 43.6C52.7 44.5 51.9 45.3 51.1 46.2C50.3 47.1 49.7 48.1 48.8 48.8C47.8 49.4 46.6 49.8 45.5 50.2C44.4 50.6 43.1 50.5 42.2 51.2C41.3 51.9 40.8 53.1 40.1 54.3C39.3 55.5 38.7 57.6 37.6 58.5C36.6 59.3 35.2 59.6 33.9 59.5C32.6 59.4 31.2 58.2 30.0 57.7C28.8 57.1 27.7 56.7 26.5 56.4C25.4 56.1 24.2 56.2 23.1 55.9C22.0 55.5 20.9 54.9 19.9 54.3C18.9 53.7 18.1 53.0 17.1 52.4C16.1 51.8 15.0 51.4 14.1 50.8C13.1 50.1 12.3 49.3 11.5 48.5C10.7 47.7 10.3 46.6 9.3 45.8C8.4 45.1 7.0 44.7 5.8 44.0C4.6 43.3 2.8 42.6 2.1 41.6C1.4 40.5 1.4 38.9 1.7 37.6C2.1 36.2 3.5 34.7 4.0 33.4C4.5 32.2 4.9 31.1 4.9 30.0C4.9 28.9 4.2 27.7 4.2 26.6C4.2 25.5 4.3 24.3 4.6 23.2C4.9 22.1 5.5 21.1 5.9 20.0C6.2 18.9 6.3 17.7 6.7 16.6C7.1 15.5 7.6 14.3 8.3 13.3C8.9 12.3 9.9 11.6 10.6 10.6C11.3 9.6 11.9 8.4 12.6 7.4C13.4 6.3 14.1 4.9 15.2 4.4C16.3 3.9 18.0 4.1 19.4 4.4C20.8 4.7 22.4 6.0 23.7 6.3C24.9 6.6 25.8 6.4 26.8 6.0C27.9 5.5 28.9 4.2 30.0 3.7C31.1 3.1 32.4 2.9 33.6 2.9C34.7 2.9 35.9 3.5 37.0 3.7C38.2 4.0 39.4 4.1 40.6 4.4C41.8 4.7 43.0 5.0 44.1 5.6C45.1 6.2 46.0 7.2 46.9 7.9C47.9 8.7 48.8 9.4 49.7 10.3C50.6 11.1 51.7 11.9 52.2 13.0C52.7 14.1 52.6 15.6 52.6 17.0C52.5 18.3 51.7 19.8 52.0 20.9C52.2 22.0 53.0 22.7 53.9 23.6C54.8 24.5 56.7 25.3 57.6 26.4C58.4 27.4 58.9 28.8 58.9 30.0Z" fill="url(#wax-rim)" />
                    <circle cx="30" cy="30" r="18" fill="url(#wax-well)" />
                </g>
                {/* Edge of the impression: shadow on the upper lip, catch-light on the lower */}
                <path d="M15.6 25 A18 18 0 0 1 44.4 25" fill="none" stroke="#3a0708" strokeOpacity="0.55" strokeWidth="1.4" />
                <path d="M44.4 35 A18 18 0 0 1 15.6 35" fill="none" stroke="#c4554e" strokeOpacity="0.35" strokeWidth="1" />
                {/* Stamped monogram: highlight below, shadow above */}
                <text x="30" y="37.6" textAnchor="middle" className="env-seal-letter" fill="#c25a52" fillOpacity="0.45">T</text>
                <text x="30" y="36.4" textAnchor="middle" className="env-seal-letter" fill="#3d0809" fillOpacity="0.6">T</text>
                <text x="30" y="37" textAnchor="middle" className="env-seal-letter" fill="#7a1819">T</text>
            </svg>

            {/* Closed, the whole envelope is the hit area; open, the CSS shrinks
                this to the pill so the letter text stays selectable. */}
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
