import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaRocket, FaCode, FaBrain, FaArrowDown } from "react-icons/fa";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 68, 255, ${particle.opacity})`;
        ctx.fill();

        // Connect nearby particles
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 68, 255, ${0.15 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-40"
      style={{ background: 'transparent' }}
    />
  );
};

const GlowingCard = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`
        bg-card/80 backdrop-blur-xl border border-theme rounded-2xl p-8
        shadow-theme-md hover:shadow-theme-hover
        transform transition-all duration-700 ease-out
        hover:scale-105 hover:-translate-y-2
        before:absolute before:inset-0 before:rounded-2xl before:p-[1px]
        before:bg-gradient-to-r before:from-blue-500/20 before:via-purple-500/20 before:to-cyan-500/20
        before:-z-10 before:blur-sm
        relative overflow-hidden group
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay + currentIndex * 50);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const FloatingIcon = ({ Icon, delay = 0, className = "" }) => {
  return (
    <div
      className={`
        absolute opacity-20 text-6xl text-blue-500 pointer-events-none
        animate-bounce
        ${className}
      `}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    >
      <Icon />
    </div>
  );
};

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const skills = ['Java', 'Deep Learning', 'React', 'Python', 'AI/ML', 'Backend Systems'];
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSkill(prev => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [skills.length]);

  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden"
      id="home"
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Floating Icons */}
      <FloatingIcon Icon={FaCode} delay={0} className="top-20 left-20" />
      <FloatingIcon Icon={FaBrain} delay={1} className="top-40 right-32" />
      <FloatingIcon Icon={FaRocket} delay={2} className="bottom-40 left-16" />

      {/* Mouse Follow Glow */}
      <div
        className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

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
              I'm a programmer at heart with professional experience in Java and backend systems.
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

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-900 {
          animation-delay: 0.9s;
        }
        
        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
      `}</style>
    </section>
  );
}

export default Home;