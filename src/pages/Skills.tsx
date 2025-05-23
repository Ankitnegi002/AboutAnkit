import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

const skills = {
  languages: [
    { name: "Java", level: 90 },
    { name: "Python", level: 85 },
    { name: "C", level: 80 },
  ],
  frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 75 },
    { name: "JavaScript", level: 40 },
  ],
  database: [
    { name: "MongoDB", level: 90 },
    { name: "MySQL", level: 75 },
  ],
  other: [
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

function SkillBar({ name, level }: Skill) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{name}</span>
        <span className="text-gray-300 font-medium">{level}%</span>
      </div>
      <div className="w-full bg-black rounded-full h-3 border border-white/20">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
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
        <h1 className="text-5xl font-bold text-white mb-6">
          Skills & Expertise
        </h1>
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
            {skillset.map((skill, idx) => (
              <SkillBar key={idx} name={skill.name} level={skill.level} />
            ))}
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
          <h2 className="text-3xl font-bold text-white">
            Certificates & Licenses
          </h2>
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
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {cert.name}
                </h3>
                <p className="text-gray-300 mb-2">Issued by {cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-6">
                  Issued: {cert.date}
                </p>
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
