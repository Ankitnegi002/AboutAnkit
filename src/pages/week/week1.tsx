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
          Week 1: Introduction Video
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          It was an introductory session on career skills, where we were guided on how to present a professional self-introduction.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <iframe
          className="w-full h-64 sm:h-96 rounded-xl border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          src="https://drive.google.com/file/d/1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy/preview"
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
          <li>Gain insights on body language and tone for effective communication.</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-black rounded-xl p-8 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          Activities to demonstrate working of Left brain & Right brain
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-8">
          <li>
            <strong className="text-white text-xl">Activity 1: Opposite Actions Game</strong>
            <p className="mt-2 text-gray-300">
              In this activity, we followed instructions from the facilitator—but with a twist. When they said "stand," we had to sit. When they said "sit," we had to stand. If they said "clap," we had to respond by saying our name. This exercise helped us break away from automatic thinking and required us to consciously process information before reacting. It highlighted how our brain processes commands and how difficult it can be to override our natural instincts.
            </p>
          </li>
          <li>
            <strong className="text-white text-xl">Activity 2: Word Association</strong>
            <p className="mt-2 text-gray-300">
              This activity involved quick thinking and creativity. One person said a word, and the next person had just five seconds to say a new word that was somehow related to the previous one. This chain continued around the group. The exercise demonstrated how the brain makes connections, encouraging both logical associations (left brain) and imaginative links (right brain).
            </p>
          </li>
          <li>
            <strong className="text-white text-xl">Activity 3: Unusual Uses for a Pencil</strong>
            <p className="mt-2 text-gray-300">
              Here, we were asked to think of different ways to use a pencil—beyond just writing. From using it as a hair accessory to a mini drumstick, this activity pushed us to be creative and think outside the box. It primarily engaged the right brain, which is responsible for imagination, innovation, and abstract thinking.
            </p>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Week1;
