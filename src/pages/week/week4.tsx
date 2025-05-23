import { motion } from "framer-motion";

function Week4() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8">
          Week 4: Writing Skills & E-mail Writing Skills
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A comprehensive session on professional writing and email communication skills.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-black rounded-xl p-8 mb-12 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          Email Writing Best Practices
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-4">
          <li>Use clear and concise language</li>
          <li>Maintain a professional tone</li>
          <li>Structure your email with a clear purpose</li>
          <li>Proofread before sending</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-black rounded-xl p-8 mb-12 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          Common Email Mistakes to Avoid
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-4">
          <li>Using informal language in professional contexts</li>
          <li>Writing overly long emails without clear structure</li>
          <li>Forgetting to include necessary attachments</li>
          <li>Using unclear subject lines</li>
          <li>Not proofreading for errors</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-black rounded-xl p-8 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          Uploaded Samples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden rounded-xl border-2 border-white/10 hover:border-white/30 transition-all duration-300">
            <img
              src="/images/email1.jpg"
              alt="Email Sample 1"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="relative group overflow-hidden rounded-xl border-2 border-white/10 hover:border-white/30 transition-all duration-300">
            <img
              src="/images/email2.jpg"
              alt="Email Sample 2"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-black rounded-xl p-8 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          Key Takeaways
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-4">
          <li>Understanding the importance of professional communication</li>
          <li>Learning to write clear and effective emails</li>
          <li>Developing skills in business writing</li>
          <li>Improving overall written communication</li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Week4;
