import reaImage from "../assets/REA.jpg";
import mega from "../assets/megasandesham.jpg";
import nc from "../assets/newscurator.jpg";

function Projects() {
  const projects = [
    {
      title: "Real Estate Analysis",
      description: "Regression model for real-estate price prediction. Developed using Python on backend and React on front end. Deployed on AWS EC2.",
      tech: "Python, pandas, Flask, React",
      image: reaImage,
      link: "http://ec2-18-116-72-123.us-east-2.compute.amazonaws.com/"
    },
    {
      title: "Megasandesham!",
      description: "This dynamic, responsive weather application features condition-based weather cards that dynamically adjust their backgrounds and icons to reflect current conditions.",
      tech: "React, Tailwind CSS, OpenweatherMap API",
      image: mega,
      link: "https://tarungit98.github.io/megasandesham/"
    },
    {
      title: "AI News Curator",
      description: "Personalized News Curator is a full-stack application that curates real-time news based on user preferences and selected regions.",
      tech: "Java, DJL, React, Docker, Postgres, Render",
      image: nc,
      link: "https://ainewscurator.netlify.app/"
    }
  ];

  return (
    <section className="bg-white min-h-screen flex items-center justify-center py-20" id="projects">
      <div className="container-card w-full">
        <h2 className="section-heading">Personal Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 card-hover"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </a>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-sm font-medium text-blue-600">
                  <strong>Tech Used:</strong> {project.tech}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;