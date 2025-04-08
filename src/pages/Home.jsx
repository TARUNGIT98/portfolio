import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import tarunImage from "../assets/TarunHeadshot.jpg";
import resume from "../assets/TarunSirapurapuResume.pdf"; // fixed quote issue
import "../styles/home.css";

function Home() {
  return (
    <section className="home-container bg-white px-6 py-20 md:py-28" id="home" >
      <div className="home-content max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* LEFT: TEXT */}
        <div className="home-text text-left" data-aos="fade-right">
          <p className="text-sm tracking-wider text-gray-500 uppercase mb-2">Welcome to my portfolio</p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-2">
            Hi, I’m <span className="text-blue-700">Tarun</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            a <span className="font-bold">Software Engineer</span>
          </h2>

          <p className="text-gray-600 text-base max-w-xl mb-8">
            I'm a solid programmer at heart with professional experience in Java and backend systems.
            With a strong foundation in Deep Learning, I build intelligent, user-centric applications that span microservices to robotics.
            I enjoy blending AI with real-world problem solving to deliver scalable and impactful solutions.
          </p>


          <div className="flex flex-wrap gap-4">
            {/* LinkedIn - blue */}
            <a
              href="https://www.linkedin.com/in/saitarunsirapurapu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 text-blue-600 hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </a>

            {/* GitHub - black */}
            <a
              href="https://github.com/TARUNGIT98"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 text-black hover:scale-110 transition-transform duration-300"
            >
              <FaGithub className="text-2xl" />
            </a>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="home-image">
          <img
            src={tarunImage}
            alt="Tarun Sirapurapu"
            className="rounded-xl shadow-lg w-64 md:w-72 lg:w-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
