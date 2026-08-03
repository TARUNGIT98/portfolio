import "../styles/dsa.css";
import LeetCodeCard from "../components/LeetCodeCard";
import NeetCodeCard from "../components/NeetCodeCard";

function Dsa() {
    return (
        <section id="dsa" className="section-shell dsa-section">
            <div className="dsa-header">
                <h2 className="section-heading">I still DSA</h2>
                <p className="dsa-subtitle">
                    Yes, still. Hands on the keyboard because
                    wiring your brain to think in structures is the base everything else is
                    built on.
                </p>
            </div>

            <div className="dsa-grid">
                <LeetCodeCard username="TarunSirapurapu" />
                <NeetCodeCard />
            </div>
        </section>
    );
}

export default Dsa;
