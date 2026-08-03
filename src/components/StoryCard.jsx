import "../styles/story.css";

const StoryCard = () => {
    return (
        <div className="story-card">
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
    );
};

export default StoryCard;
