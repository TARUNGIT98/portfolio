import "../styles/learning.css";

function Learning() {
    return (
        <section id="learning" className="section-shell learning-section">
            <div className="learning-card">
                <div className="learning-head">
                    <span className="learning-status">
                        <span className="dsa-dot" />
                        Currently learning
                    </span>
                </div>

                <h2 className="learning-title">Neural networks, from scratch</h2>

                <p className="learning-body">
                    I'm working through <strong>Andrej Karpathy's</strong> Neural Networks:
                    Zero to Hero alongside a Substack deep-learning path building
                    backpropagation, autograd, and language models by hand rather than
                    reaching for a framework to understand the workings behind it.
                </p>

                <div className="learning-links">
                    <a
                        className="learning-chip"
                        href="https://github.com/TARUNGIT98/NeuralNetworksPractice"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        My practice notebooks →
                    </a>
                    <a
                        className="learning-chip ghost"
                        href="https://karpathy.ai/zero-to-hero.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Zero to Hero
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Learning;
