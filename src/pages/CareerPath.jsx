// import "../styles/careerpath.css";

function CareerPath() {
    const timeline = [
        {
            range: "Aug 2024 to Present",
            title: "Full Stack Web Developer",
            place: "Reynolds and Reynolds",
            location: "Dayton, OH, USA",
        },
        {
            range: "Feb 2024 to Aug 2024",
            title: "Data Scientist",
            place: "Dream Studio LLC",
            location: "Remote,USA",
        },
        {
            range: "Jan 2023 to Dec 2024",
            title: "Masters in Computer Science",
            place: "University of Dayton",
            location: "Dayton, OH, USA",
        },
        {
            range: "May 2023 to Dec 2024",
            title: "Graduate Assistant",
            place: "University of Dayton",
            location: "Dayton, OH, USA",
        },
        {
            range: "Oct 2020 to Dec 2022",
            title: "Software Engineer",
            place: "CGI Inc.",
            location: "India",
        },
        {
            range: "Aug 2016 to Sep 2020",
            title: "Bachelors in Electronics and Communication",
            place: "KMIT",
            location: "Hyderabad, India",
        },
    ];

    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center py-20" id="careerpath">
            <div className="container-card w-full max-w-4xl">
                <h2 className="section-heading">Career Path</h2>

                <div className="relative pl-8">
                    {/* Timeline line */}
                    <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-transparent opacity-60"></div>

                    <div className="space-y-8">
                        {timeline.map((item, index) => (
                            <div
                                key={item.title + index}
                                className="relative"
                                data-aos="fade-up"
                                data-aos-delay={index * 120}
                            >
                                {/* Timeline dot */}
                                <div className="absolute -left-6 top-3 w-3 h-3 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>

                                {/* Card */}
                                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover ml-4">
                                    <time className="text-blue-600 font-semibold text-sm tracking-wide">
                                        {item.range}
                                    </time>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-700 font-medium">{item.place}</p>
                                    <p className="text-gray-500 text-sm">{item.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CareerPath;
