import { FaGithub, FaLinkedin } from "react-icons/fa";
import tarunImage from "../assets/TarunHeadshot.jpg";

function Home() {
  return (
    <section className="bg-secondary min-h-screen flex items-center justify-center py-20" id="home">
      <div className="container-card w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
            <p className="text-sm tracking-wider text-gray-500 uppercase mb-4">
              Welcome to my portfolio
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Hi, I'm <span className="text-blue-600">Tarun</span>
            </h1>

            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-6">
              a <span className="font-bold text-primary">Software Developer</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl">
              I'm a solid programmer at heart with professional experience in Java and backend systems.
              With a strong foundation in Deep Learning, I build intelligent, user-centric applications that span microservices to robotics.
              I enjoy blending AI with real-world problem solving to deliver scalable and impactful solutions.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://www.linkedin.com/in/saitarunsirapurapu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaLinkedin className="text-xl" />
              </a>

              <a
                href="https://github.com/TARUNGIT98"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-lg hover:bg-gray-800 hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 flex justify-center" data-aos="fade-left">
            <img
              src={tarunImage}
              alt="Tarun Sirapurapu"
              className="w-80 lg:w-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;