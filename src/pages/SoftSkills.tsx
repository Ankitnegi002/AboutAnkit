import { motion } from "framer-motion";
import { Users, MessageSquare, Presentation, Brain, Heart, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const weekData = [
  {
    title: "Week 1: Introduction to Soft Skills",
    description: "Understanding the importance of soft skills in professional development",
    icon: Users,
    path: "/softskills/week1"
  },
  {
    title: "Week 2: Communication Skills",
    description: "Mastering effective communication techniques and interview preparation",
    icon: MessageSquare,
    path: "/softskills/week2"
  },
  {
    title: "Week 3: Presentation Skills",
    description: "Learning to present ideas effectively and handle public speaking",
    icon: Presentation,
    path: "/softskills/week3"
  },
  {
    title: "Week 4: Writing Skills",
    description: "Developing professional writing and email communication skills",
    icon: Brain,
    path: "/softskills/week4"
  },
  {
    title: "Week 5: Emotional Intelligence",
    description: "Understanding and managing emotions in professional settings",
    icon: Heart,
    path: "/softskills/week5"
  },
  {
    title: "Week 6: Leadership Skills",
    description: "Building leadership qualities and team management abilities",
    icon: Award,
    path: "/softskills/week6"
  },
];

function SoftSkills() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8">Soft Skills Development</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A comprehensive program designed to enhance your professional and interpersonal skills
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {weekData.map((week, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black rounded-xl p-8 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 mr-4">
                <week.icon className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">{week.title}</h2>
            </div>
            <p className="text-gray-300">{week.description}</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 w-full px-6 py-3 border-2 border-white/10 text-base font-medium rounded-lg text-white bg-black hover:bg-white/5 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              onClick={() => navigate(week.path)}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SoftSkills;
