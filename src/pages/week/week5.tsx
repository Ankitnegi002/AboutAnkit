import { motion } from "framer-motion";

function Week5() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8">
          Week 5: Mini Film Festival
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A curated selection of films followed by in-depth analysis and discussion.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-black rounded-xl p-8 mb-12 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          Movie Analysis Questions
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Plot Summary</h3>
            <p className="text-gray-300">
              What is the main storyline of the film? How does it develop throughout the movie?
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Character Analysis</h3>
            <p className="text-gray-300">
              Who are the main characters? How do they evolve throughout the story?
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Themes and Messages</h3>
            <p className="text-gray-300">
              What are the main themes explored in the film? What messages is the director trying to convey?
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Personal Reflection</h3>
            <p className="text-gray-300">
              How did the film impact you personally? What aspects resonated with you the most?
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-black rounded-xl p-8 mb-12 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          Learning Objectives
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-4">
          <li>Develop critical thinking skills through film analysis</li>
          <li>Enhance understanding of storytelling techniques</li>
          <li>Improve ability to identify and discuss themes</li>
          <li>Practice articulating personal responses to media</li>
          <li>Build confidence in group discussion and presentation</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-black rounded-xl p-8 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          Film Selection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden rounded-xl border-2 border-white/10 hover:border-white/30 transition-all duration-300">
            <img
              src="/images/film1.jpg"
              alt="Film 1"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="relative group overflow-hidden rounded-xl border-2 border-white/10 hover:border-white/30 transition-all duration-300">
            <img
              src="/images/film2.jpg"
              alt="Film 2"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Week5;
  
