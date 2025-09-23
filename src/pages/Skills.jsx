import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Star,
  Code,
  Database,
  Brain,
  Zap,
  Globe,
  Container,
  Layers,
  Palette,
} from "lucide-react";

const skillsData = [
  {
    name: "Java",
    icon: <Code />,
    level: 75,
    experience: "3+ years",
    description:
      "Enterprise-level backend development with Spring ecosystem. Built scalable microservices and RESTful APIs.",
    docs: "https://docs.oracle.com/en/java/",
    color: "from-slate-800 to-slate-900",
  },
  {
    name: "Python",
    icon: <Database />,
    level: 80,
    experience: "2+ years",
    description: "AI/ML development and DSA. ",
    docs: "https://docs.python.org/",
    color: "from-slate-800 to-slate-900",
  },
  {
    name: "TensorFlow",
    icon: <Brain />,
    level: 80,
    experience: "2+ years",
    description:
      "Deep learning model development, neural networks, and AI research. Production ML deployments.",
    docs: "https://tensorflow.org/learn",
    color: "from-slate-800 to-slate-900",
  },
  {
    name: "PyTorch",
    icon: <Zap />,
    level: 80,
    experience: "2+ years",
    description:
      "Research-focused deep learning, computer vision, and neural network experimentation.",
    docs: "https://pytorch.org/docs/",
    color: "from-slate-800 to-slate-900",
  },
  {
    name: "Spring",
    icon: <Layers />,
    level: 80,
    experience: "3+ years",
    description:
      "Enterprise Java applications, dependency injection, and robust backend architectures.",
    docs: "https://spring.io/guides",
    color: "from-slate-800 to-slate-900",
  },
  {
    name: "Flask",
    icon: <Globe />,
    level: 70,
    experience: "2+ years",
    description:
      "Lightweight Python web applications, APIs, and rapid prototyping for ML services.",
    docs: "https://flask.palletsprojects.com/",
    color: "from-slate-800 to-slate-900",
  },
  {
    name: "React",
    icon: <Code />,
    level: 80,
    experience: "1+ years",
    description:
      "Modern frontend development with hooks, state management, and component architecture.",
    docs: "https://react.dev/",
    color: "from-slate-800 to-slate-900",
  },
  {
    name: "CSS",
    icon: <Palette />,
    level: 70,
    experience: "2+ years",
    description:
      "Advanced styling, animations, responsive design, and modern CSS frameworks like Tailwind.",
    docs: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    color: "from-slate-800 to-slate-900",
  },
  {
    name: "AWS",
    icon: <Globe />,
    level: 70,
    experience: "1+ years",
    description:
      "Cloud infrastructure, serverless computing, and scalable deployment architectures.",
    docs: "https://docs.aws.amazon.com/",
    color: "from-slate-800 to-slate-900",
  },
  {
    name: "Docker",
    icon: <Container />,
    level: 72,
    experience: "1+ years",
    description:
      "Containerization, deployment automation, and development environment standardization.",
    docs: "https://docs.docker.com/",
    color: "from-slate-800 to-slate-900",
  },
];

const SkillCard = ({ skill, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`relative h-80 w-full transform transition-all duration-700 ease-out perspective-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        } hover:scale-105 hover:-translate-y-4 hover:rotate-x-2`}
    >
      <button
        className="w-full h-full p-0 border-none bg-transparent cursor-pointer relative transform-3d"
        onClick={() => {
          console.log(`Clicking ${skill.name}`);
          setIsFlipped(!isFlipped);
        }}
        style={{
          all: "unset",
          cursor: "pointer",
          width: "100%",
          height: "100%",
          display: "block",
        }}
      >
        {/* Front of card */}
        <div
          className={`absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br ${skill.color
            } p-6 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center border border-slate-700/50 transform-gpu ${isFlipped
              ? "opacity-0 scale-95 rotate-y-12"
              : "opacity-100 scale-100 rotate-y-0"
            }`}
          style={{
            transform: isFlipped
              ? "rotateY(12deg) scale(0.95)"
              : "rotateY(0deg) scale(1)",
            opacity: isFlipped ? 0 : 1,
            pointerEvents: isFlipped ? "none" : "auto",
          }}
        >
          <div className="text-5xl mb-4 filter drop-shadow-lg pointer-events-none">
            {skill.icon}
          </div>
          <h3 className="text-xl font-bold mb-2 pointer-events-none">
            {skill.name}
          </h3>
          <div className="flex items-center gap-1 mb-3 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 pointer-events-none ${i < Math.floor(skill.level / 20)
                  ? "text-yellow-300 fill-current"
                  : "text-white/30"
                  }`}
              />
            ))}
          </div>
          <div className="w-full bg-white/20 rounded-full h-2 mb-2 pointer-events-none overflow-hidden">
            <div
              className="bg-gradient-to-r from-white to-slate-200 rounded-full h-2 transition-all duration-1000 ease-out pointer-events-none shadow-sm"
              style={{
                width: isVisible ? `${skill.level}%` : '0%',
                transitionDelay: `${index * 100 + 500}ms`,
                boxShadow: '0 0 8px rgba(255,255,255,0.3)'
              }}
            />
          </div>
          <p className="text-sm opacity-90 pointer-events-none">
            {skill.experience}
          </p>
          <p className="text-xs mt-2 opacity-75 pointer-events-none">
            Click to flip
          </p>
        </div>
        {/* Back of card */}
        <div className="pointer-events-none">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl text-slate-600 dark:text-slate-400">{skill.icon}</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{skill.name}</h3>
          </div>

          <div className="mb-6">
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {skill.description}
            </p>
          </div>

          <div className="flex items-center justify-between mb-6">

            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">{skill.experience}</div>
              <div className="text-xs text-slate-500">Experience</div>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <a
            href={skill.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white text-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300 mb-3"
            onClick={(e) => e.stopPropagation()}
          >
            <span>View Documentation</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-sm py-2 px-4 rounded-lg transition-colors duration-300"
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
          >
            ← Back to Skills
          </button>
        </div>
      </button>
    </div>
  );
};

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Skills", count: skillsData.length },
    { id: "languages", name: "Languages", skills: ["Java", "Python", "CSS"] },
    { id: "ai", name: "AI/ML", skills: ["TensorFlow", "PyTorch"] },
    {
      id: "frameworks",
      name: "Frameworks",
      skills: ["Spring", "Flask", "React"],
    },
    { id: "tools", name: "Tools", skills: ["AWS", "Docker"] },
  ];

  const filteredSkills =
    selectedCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => {
        const category = categories.find(
          (cat) => cat.id === selectedCategory
        );
        return category?.skills?.includes(skill.name);
      });

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20 relative overflow-hidden">      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-muted text-xl max-w-2xl mx-auto">
            Interactive skill cards showcasing my technical proficiency. Click
            any card to explore details and original docs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
            px-6 py-3 rounded-full font-medium transition-all duration-300
            ${selectedCategory === category.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                  : "bg-card border border-theme text-muted hover:border-blue-500/50 hover:text-primary"
                }
          `}
            >
              {category.name}
              {category.count && (
                <span className="ml-2 text-xs opacity-75">
                  ({category.count})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-card/80 backdrop-blur-sm border border-theme rounded-2xl px-8 py-4">
            <div>
              <div className="text-2xl font-bold text-primary">
                {skillsData.length}
              </div>
              <div className="text-sm text-muted">Technologies</div>
            </div>
            <div className="w-px h-8 bg-theme" />
            <div>
              <div className="text-2xl font-bold text-primary">
                {Math.round(
                  skillsData.reduce((acc, skill) => acc + skill.level, 0) /
                  skillsData.length
                )}
                %
              </div>
              <div className="text-sm text-muted">Avg Proficiency</div>
            </div>
            <div className="w-px h-8 bg-theme" />
            <div>
              <div className="text-2xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
  .perspective-1000 {
    perspective: 1000px;
  }
  .hover\\:rotate-x-2:hover {
    transform: rotateX(2deg) scale(1.05) translateY(-1rem);
  }
  .transform-3d {
    transform-style: preserve-3d;
  }
`}</style>
    </section>
  );
}

export default Skills;
