import { motion } from "framer-motion";

function Week6() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8">
          Week 6: Group Discussion
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A comprehensive session on effective communication and different types of group discussions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-black rounded-xl p-8 mb-12 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          Group Discussion Guidelines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Do's</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Listen actively to others</li>
              <li>Maintain eye contact</li>
              <li>Speak clearly and concisely</li>
              <li>Respect different viewpoints</li>
              <li>Stay on topic</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Don'ts</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Interrupt others while speaking</li>
              <li>Use inappropriate language</li>
              <li>Dominate the conversation</li>
              <li>Ignore others' contributions</li>
              <li>Get distracted or off-topic</li>
            </ul>
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
          Types of Group Discussions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Case Study Discussion</h3>
            <p className="text-gray-300">
              Analyzing real-world scenarios and discussing potential solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Topic-based Discussion</h3>
            <p className="text-gray-300">
              Exploring specific subjects with structured arguments and counter-arguments.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Problem-solving Discussion</h3>
            <p className="text-gray-300">
              Collaborative approach to finding solutions for given challenges.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-black rounded-xl p-8 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          Idea Generation Techniques
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-4">
          <li>Brainstorming - Free-flowing idea generation without criticism</li>
          <li>Mind Mapping - Visual organization of related concepts</li>
          <li>Round Robin - Structured sharing of ideas in turns</li>
          <li>Six Thinking Hats - Different perspectives on the same topic</li>
          <li>Reverse Brainstorming - Identifying problems to find solutions</li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Week6;
  
