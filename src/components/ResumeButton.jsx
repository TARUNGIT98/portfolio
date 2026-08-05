import { useRef } from "react";
import "../styles/resumebutton.css"
import resumePdf from "../assets/TarunSirapurapuResume26.pdf";

const ResumeButton = () => {
    const boxRef = useRef(null);

    /* The anchor does the downloading natively, so it always fires inside the
       user gesture. The checkbox exists purely to drive the CSS animation. */
    const playAnimation = () => {
        const box = boxRef.current;
        if (!box) return;
        box.checked = true;
        setTimeout(() => { box.checked = false; }, 4500);
    };

    return (
        <div style={{
            transform: "scale(0.11)",
            transformOrigin: "center",
            display: "inline-block",
            width: 40,
            height: 40,
            position: "relative",
            /* The 200px circle is absolutely positioned inside a 15x10 box, so its
               visual centre sits below the wrapper's layout centre by ~80 * scale px.
               Keep this in step with the scale above. */
            top: -9,
        }}>
            <div className="ms-container">
                <a
                    href={resumePdf}
                    download="SaiTarunSirapurapu_Resume.pdf"
                    aria-label="Download my resume"
                    onClick={playAnimation}
                    target="_blank"
                >
                    <div className="ms-content">
                        <div className="ms-content-inside">
                            <input type="checkbox" id="ms-download" ref={boxRef} readOnly />
                            <div className="ms-line-down-container">
                                <div className="ms-line-down"></div>
                            </div>
                            <div className="ms-line-point"></div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ResumeButton
