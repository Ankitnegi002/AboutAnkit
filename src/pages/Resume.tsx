import { motion } from "framer-motion";

function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8">Resume</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-xl overflow-hidden border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <img
          src="/images/Screenshot 2026-05-01 154608.png"
          alt="Resume"
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
}

export default Resume;
