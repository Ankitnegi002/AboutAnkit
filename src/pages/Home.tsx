import { useState } from "react";
import { motion } from "framer-motion";
import { Download, GraduationCap } from "lucide-react";

function Home() {
  const [submitted, setSubmitted] = useState(false);

  const personalInfo = {
    education: [
      {
        degree: "B.Tech in Computer Science (AI & ML)",
        institution: "Graphic Era Hill University, Dehradun",
        year: "Expected: July 2027",
        description:
          "Specializing in AI & ML with a focus on game development.",
      },
      {
        degree: "Class XII (CBSE)",
        institution: "Shri Bharat Mandir Public School, Rishikesh",
        year: "2023",
        description:
          "Completed higher secondary education with a focus on science and mathematics.",
      },
      {
        degree: "Class X (CBSE)",
        institution: "Shri Bharat Mandir Public School, Rishikesh",
        year: "2021",
        description: "Completed secondary education with distinction.",
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center gap-12 mb-16"
      >
        <div className="flex-1 text-center md:text-left md:pr-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Ankit Negi
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
            B.Tech student specializing in AI & ML with a strong foundation in web
            development and programming. Passionate about building scalable
            applications and full-stack development.
          </p>
        </div>
        <div className="w-96 relative group overflow-hidden rounded-xl border-2 border-white/10 hover:border-white/30 transition-all duration-300">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src="/images/three.jpg"
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </motion.div>

      {/* Bio Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-black rounded-xl p-8 mb-16 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">About Me</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Education & Focus</h3>
            <p className="text-lg text-gray-300">
              I am a B.Tech student specializing in Artificial Intelligence and Machine Learning, with a strong passion for solving real-world problems through innovative technologies. My interest in AI/ML comes from the exciting potential it holds to transform industries like healthcare, transportation, and education. I enjoy working on projects that involve data, logic, and algorithms — where I can train models and build smart systems that learn and adapt.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Creative Interests</h3>
            <p className="text-lg text-gray-300">
              Alongside AI, I'm also highly interested in game development and 3D modeling. I've explored tools like Godot for building simple 2D games and Blender for creating basic 3D models. These creative outlets allow me to experiment with interactive design, game mechanics, and visual storytelling. They've helped me strengthen my problem-solving skills and attention to detail.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Projects & Experience</h3>
            <p className="text-lg text-gray-300">
              While I haven't done any formal internships yet, I've worked on several academic and personal projects, including an object detection system, a flood evacuation route optimization tool using shortest path algorithms, and a few 3D game prototypes. These projects have given me practical exposure to both technical and creative aspects of development.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Personal Traits</h3>
            <p className="text-lg text-gray-300">
              I'm calm under pressure, avoid conflicts, and work well in teams. I'm also working on improving my communication and interaction skills. I'm always curious to learn more and excited to contribute to meaningful, innovative tech projects.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Gallery Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-black rounded-xl p-8 mb-16 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Picture Area</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="relative group overflow-hidden rounded-xl border-2 border-white/10 hover:border-white/30 transition-all duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/images/one.jpg"
                alt="Project Image 1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="relative group overflow-hidden rounded-xl border-2 border-white/10 hover:border-white/30 transition-all duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/images/two.jpg"
                alt="Project Image 2"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="relative group overflow-hidden rounded-xl border-2 border-white/10 hover:border-white/30 transition-all duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/images/three.jpg"
                alt="Project Image 3"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-black rounded-xl p-8 mb-16 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <div className="flex items-center mb-8 border-b border-white/10 pb-4">
          <GraduationCap size={32} className="text-white mr-4" />
          <h2 className="text-3xl font-bold text-white">Education</h2>
        </div>
        <div className="space-y-8">
          {personalInfo.education.map((edu, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-300 mb-1">{edu.institution}</p>
              <p className="text-gray-400 text-sm mb-3">{edu.year}</p>
              <p className="text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
