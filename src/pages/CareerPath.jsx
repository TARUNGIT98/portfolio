import "../styles/careerpath.css";


function CareerPath() {
    const timeline = [
        {
            range: "Jan 2023 – Dec 2024",
            title: "Masters in Computer Science",
            place: "University of Dayton",
            location: "Dayton, OH, USA",
        },
        {
            range: "May 2023 – Dec 2024",
            title: "Graduate Assistant",
            place: "University of Dayton",
            location: "Dayton, OH, USA",
        },
        {
            range: "2020 – 2022",
            title: "Software Engineer",
            place: "CGI Inc.",
            location: "India",
        },
        {
            range: "2016 – 2020",
            title: "Bachelors in Electronics and Communication",
            place: "KMIT",
            location: "Hyderabad, India",
        },
    ];

    return (
        <div className="career-container">
            <h2 className="career-heading">
                Career Path
                <span className="underline-bar" />
            </h2>
            <div className="career-scroll">
                <div className="career-line" />
                {timeline.map((item, index) => (
                    <div className="career-card" key={index}>
                        <div className="card-content">
                            <span className="range">{item.range}</span>
                            <h3>{item.title}</h3>
                            <p>{item.place}</p>
                            <p className="location">{item.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CareerPath;
