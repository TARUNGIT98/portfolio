import "../styles/resumebutton.css"
const ResumeButton = () => {
    return (
        <div style={{ transform: "scale(0.15)", transformOrigin: "center", display: "inline-block", width: 40, height: 40, position: "relative", top: -8, right: -12 }}>
            <div className="ms-container">
                <label htmlFor="ms-download">
                    <div className="ms-content">
                        <div className="ms-content-inside">
                            <input type="checkbox" id="ms-download" />
                            <div className="ms-line-down-container">
                                <div className="ms-line-down"></div>
                            </div>
                            <div className="ms-line-point"></div>
                        </div>
                    </div>
                </label>
            </div>
        </div>

    )
}

export default ResumeButton