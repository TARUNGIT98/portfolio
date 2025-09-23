import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaCode, FaBrain, FaRocket } from "react-icons/fa";
import tarunImage from "../assets/TarunHeadshot.jpg";

// TypeWriter Component
const TypewriterText = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
};


function Home() {

  // Hook #1 to represent that I wear mutiple hats JACK of all TRADES , Master of One.
  const hats = ['Web Developer', 'Backend Developer', 'Data Scientist']
  const [currentHat, setCurrentHat] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHat(prev => (prev + 1) % hats.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-blue-900 flex items-center justify-center py-20 relative" id="home">
      <div className="container-card w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
            <p className="text-sm text-muted uppercase tracking-wider mb-4 animate-fade-in-up">
              <TypewriterText text="Welcome to my portfolio" speed={80} />
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-4 animate-fade-in-up animate-delay-300">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">Tarun</span>
            </h1>

            <h2 className="text-2xl lg:text-3xl font-semibold text-secondary mb-6 animate-fade-in-up animate-delay-600">
              a <span className="font-bold text-gray-800 transition-all duration-500">
                {hats[currentHat]}
              </span>
            </h2>

            <p className="text-muted text-lg leading-relaxed mb-8 max-w-2xl animate-fade-in-delay">
              I'm currently a Web Developer with professional experience in React, Python, Java and backend systems.
              With a strong foundation in Deep Learning, I build intelligent, user-centric full stack applications.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://www.linkedin.com/in/saitarunsirapurapu/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white p-4 rounded-lg hover:bg-blue-800 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover: shadow-xl"
              >
                <FaLinkedin className="text-xl" />
              </a>

              <a
                href="https://github.com/TARUNGIT98"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-900 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
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
      <style>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      
      .animate-fade-in {
        animation: fadeIn 0.8s ease-out forwards;
      }
      
      .animate-delay-300 {
        animation-delay: 0.3s;
      }
      
      .animate-delay-600 {
        animation-delay: 0.6s;
      }
    `}</style>
    </section>
  );
}

export default Home;