import { motion } from "framer-motion";
import { useState } from "react";

function Week2() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const interviewQuestions = [
    {
      title: "Tell me about yourself",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "What are your strengths?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "What are your weaknesses?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "Why do you want to work here?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "Where do you see yourself in 5 years?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "Why should we hire you?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "What is your greatest achievement?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "How do you handle stress?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "Describe a challenging situation",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "What are your salary expectations?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "Do you have any questions for us?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "How do you work in a team?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "What motivates you?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "How do you handle criticism?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "What is your leadership style?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "How do you prioritize work?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "What are your career goals?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "How do you handle failure?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "What is your work style?",
      videoId: "1Oh28tBiX0h0pOkSv5QJrn2ylRGg4I-Wy"
    },
    {
      title: "How do you stay updated?",
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
