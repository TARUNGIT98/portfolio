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
            range: "Oct 2020 – Dec 2022",
            title: "Software Engineer",
            place: "CGI Inc.",
            location: "India",
        },
        {
            range: "Aug 2016 – Sep 2020",
            title: "Bachelors in Electronics and Communication",
            place: "KMIT",
            location: "Hyderabad, India",
        },
    ];

    return (
        <section className="career-container" aria-labelledby="career-heading">
            <h2 id="career-heading" className="career-heading">
                Career Path
                <span aria-hidden="true" className="underline-bar" />
            </h2>

            <div className="career-scroll">
                <span aria-hidden="true" className="career-line" />
                <ol className="career-list">
                    {timeline.map((item, index) => (
                        <li
                            className="career-card"
                            key={item.title + index}
                            data-aos="fade-up"
                            data-aos-delay={index * 120}
                        >
                            <article className="card-content">
                                <time className="range" dateTime={item.range}>
                                    {item.range}
                                </time>
                                <h3 className="role">{item.title}</h3>
                                <p className="place">{item.place}</p>
                                <p className="location">{item.location}</p>
                            </article>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export default CareerPath;
