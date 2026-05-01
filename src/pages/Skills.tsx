import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

const skills = {
  Languages: [
    { name: "Java", level: 90 },
    { name: "Python", level: 85 },
    { name: "C", level: 80 },
    { name: "C#", level: 70 },
  ],
  Frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 75 },
    { name: "JavaScript", level: 40 },
  ],
  Database: [
    { name: "MongoDB", level: 90 },
    { name: "MySQL", level: 75 },
  ],
  Other: [
    { name: "Godot", level: 70 },
    { name: "Blender", level: 65 },
    { name: "Aseprite", level: 65 },
  ],
};

const certificates = [
  {
    name: "Google Cloud Platform (GCP)",
    issuer: "IIT Kharagpur (via NPTEL)",
    date: "2024",
    credentialUrl:
      "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS131S55030003603926106",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQFsQn59kCIxng/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1714119741952?e=2147483647&v=beta&t=oenSgSdTHPiJsmu4Hhe1tKpt1jEwdSHTs_iwfiC-Bsc",
  },
];

function PieChart({ name, level }: Skill) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
          <motion.circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke="url(#grad)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
          {level}%
        </span>
      </div>
      <span className="mt-2 text-white text-sm font-medium text-center">{name}</span>
    </div>
  );
}

function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-white mb-6">Skills & Expertise</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Technical skills and certifications based on my experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {Object.entries(skills).map(([category, skillset], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black rounded-xl p-8 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            <h2 className="text-2xl font-bold text-white mb-8 capitalize border-b border-white/10 pb-4">
              {category}
            </h2>
            <div className="grid grid-cols-2 gap-6 justify-items-center">
              {skillset.map((skill, idx) => (
                <PieChart key={idx} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-16"
      >
        <div className="flex items-center mb-10">
          <Award size={32} className="text-white mr-4" />
          <h2 className="text-3xl font-bold text-white">Certificates & Licenses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-black rounded-xl overflow-hidden border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              <div className="relative">
                <img src={cert.image} alt={cert.name} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{cert.name}</h3>
                <p className="text-gray-300 mb-2">Issued by {cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-6">Issued: {cert.date}</p>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Verify Credential
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
