import { motion } from "framer-motion";

function Week3() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8">
          Week 3: Selling a Product
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A team-based activity focused on developing presentation and sales skills through product pitching.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-black rounded-xl p-8 mb-12 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          Activity Overview
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Team Formation</h3>
            <p className="text-gray-300">
              Students were divided into teams and assigned a product to sell. Each team had to create a compelling sales pitch and presentation strategy.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Product Strategy</h3>
            <p className="text-gray-300">
              Teams analyzed their product's unique selling points, target audience, and market positioning to create an effective sales approach.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Presentation Skills</h3>
            <p className="text-gray-300">
              Each team delivered their sales pitch, focusing on clear communication, persuasive techniques, and professional presentation skills.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-black rounded-xl p-8 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          Key Learning Outcomes
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-4">
          <li>Developed effective team collaboration and communication skills</li>
          <li>Enhanced presentation and public speaking abilities</li>
          <li>Learned to create and deliver persuasive sales pitches</li>
          <li>Improved understanding of product marketing and positioning</li>
          <li>Gained experience in handling questions and feedback</li>
          <li>Developed time management and project planning skills</li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Week3;
