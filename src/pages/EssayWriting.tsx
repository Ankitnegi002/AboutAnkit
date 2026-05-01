import { motion } from "framer-motion";

function EssayWriting() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8">
          Essay Writing
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-4 border-b border-white/10 pb-4">My Essay</h2>
        <p className="text-xl font-bold text-white mb-6">Topic: AI in Healthcare</p>
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            <img src="/images/essay_page1.jpeg" alt="Essay Page 1" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            <img src="/images/essay_page2.jpeg" alt="Essay Page 2" className="w-full h-full object-cover" />
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
          Structure of an Essay
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Introduction</h3>
            <p className="text-gray-300">
              The opening paragraph that presents the topic, provides background context, and ends with a clear thesis statement.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Body Paragraphs</h3>
            <p className="text-gray-300">
              Each paragraph focuses on a single idea that supports the thesis, backed by evidence, examples, and analysis.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Conclusion</h3>
            <p className="text-gray-300">
              Summarizes the main points and restates the thesis in light of the arguments presented, leaving a lasting impression.
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
          Key Tips for Effective Essay Writing
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-4">
          <li>Plan and outline your essay before writing.</li>
          <li>Use clear and concise language to convey your ideas.</li>
          <li>Support arguments with relevant facts and examples.</li>
          <li>Maintain a logical flow between paragraphs using transitions.</li>
          <li>Proofread and revise for grammar, clarity, and coherence.</li>
        </ul>
      </motion.div>
    </div>
  );
}

export default EssayWriting;
