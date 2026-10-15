import "../styles/dsa.css";
import LeetCodeCard from "../components/LeetCodeCard";
import NeetCodeCard from "../components/NeetCodeCard";

function Dsa() {
    return (
        <section id="dsa" className="section-shell dsa-section">
            <div className="dsa-header">
                <h2 className="section-heading">Still sharpening DSA</h2>
                <p className="dsa-subtitle">
                    Hands on the keyboard, because thinking in data structures is the base
                    everything else is built on.
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
