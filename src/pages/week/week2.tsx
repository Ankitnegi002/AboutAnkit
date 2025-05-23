import { motion } from "framer-motion";
import { useState } from "react";

function Week2() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const interviewQuestions = [
    {
      title: "Tell your career objective",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "Why do you want to be an engineer?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "Tell about your Project or internship you have done/are doing along with the learning",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "What would you consider a significant achievement in your life and why",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "Tell about a failure of your which you consider to share. What have you learned from it?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "What are your strengths? Tell one or two instances where you have demonstrate your strength",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "Tell about your weakness. What are you doing to overcome your weaknesses?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "What is the most difficult moment that you have faced in your life so far? What qualities helped you to overcome the moment?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "Apart from academics, what else are you interested in?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "Give an example of an area, concept, or thing that you are absolutely passionate about.",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "Describe yourself as an individual in 5 lines.",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "What kinds of people do you enjoy working with?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "What kinds of people do you not want to work with? What would you do if they became your senior in your dream job?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "What do you expect from your first job? Prioritize and Tell in order.",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "In the past year, what have you been dissatisfied about in your performance?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "Rate yourself out of 5 in verbal communication. What are you doing to improve your communication skills?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "Who is your role model? What qualities of that person would you like to see in your personality and why?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "Tell a few lines about your friends. Do you think they help/may help you in achieving your goals? If yes, how? If no, why do you accompany them?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "Tell 3 leadership qualities. How many do you possess? Tell an instance where you have applied those qualities.",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "So finally, tell us something more about yourself or introduce yourself.",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-white mb-4">
          Week 2: Interview Preparation
        </h1>
        <p className="text-lg text-gray-300">
          A comprehensive guide to common interview questions and how to answer them effectively.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-900/50 p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          <h2 className="text-xl font-bold text-white mb-4">
            Interview Questions
          </h2>
          <div className="space-y-4">
            {interviewQuestions.map((question, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedVideo(question.videoId)}
                className="w-full text-left p-4 rounded-lg bg-gray-800/50 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                <span className="text-white font-medium">{question.title}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-900/50 p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          <h2 className="text-xl font-bold text-white mb-4">
            Video Response
          </h2>
          {selectedVideo ? (
            <iframe
              className="w-full h-96 rounded-lg border border-white/10"
              src={`https://drive.google.com/file/d/${selectedVideo}/preview`}
              title="Interview Response"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="flex items-center justify-center h-96 text-gray-400">
              Select a question to view the response
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Week2;
