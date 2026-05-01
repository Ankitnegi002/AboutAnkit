import { motion } from "framer-motion";

function Week1() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8">
          Introduction Video
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          It was an introductory session on career skills, where we were guided
          on how to present a professional self-introduction.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12 max-w-2xl mx-auto"
      >
        <iframe
          className="w-full h-[600px] rounded-xl border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          src="https://drive.google.com/file/d/1GIxDjU8u4Z4ZR5oHl_35ubs-lvPLh0LX/preview"
          title="Professional Self-Introduction"
          allowFullScreen
        ></iframe>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-black rounded-xl p-8 mb-12 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          Key Takeaways
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-4">
          <li>Understand the importance of a strong self-introduction.</li>
          <li>Learn key elements to include in a professional introduction.</li>
          <li>Practice delivering a confident and concise introduction.</li>
          <li>
            Gain insights on body language and tone for effective communication.
          </li>
        </ul>
      </motion.div>

    </div>
  );
}

export default Week1;
