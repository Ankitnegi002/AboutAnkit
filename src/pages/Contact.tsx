import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessagesSquare, MapPin, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a FormData object to send data in the correct format
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    fetch("https://formsubmit.co/ankitnegi5420@gmail.com", {
      method: "POST",
      body: form,
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        } else {
          alert("Failed to send message. Please try again.");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8">Get in Touch</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-black rounded-xl p-8 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Contact Information</h2>
          <div className="space-y-8">
            <div className="flex items-center group p-4 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300">
              <Mail className="text-white mr-4 group-hover:text-gray-300 transition-colors" size={24} />
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">ankitnegi5420@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center group p-4 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300">
              <MessagesSquare className="text-white mr-4 group-hover:text-gray-300 transition-colors" size={24} />
              <div>
                <h3 className="font-semibold text-white">Direct Message</h3>
                <p className="text-gray-300">
                  <span 
                    onClick={() => window.open("https://t.me/Ankitnegi_002", "_blank")}
                    className="cursor-pointer hover:text-white transition-colors"
                  >
                    Telegram
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center group p-4 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300">
              <MapPin className="text-white mr-4 group-hover:text-gray-300 transition-colors" size={24} />
              <div>
                <h3 className="font-semibold text-white">Location</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">Dehradun, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-black rounded-xl p-8 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Required hidden input for FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border-2 border-white/10 rounded-lg text-white focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border-2 border-white/10 rounded-lg text-white focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-black border-2 border-white/10 rounded-lg text-white focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all duration-300"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-white/10 text-base font-medium rounded-lg text-white bg-black hover:bg-white/5 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              Send Message
              <Send size={16} className="ml-2" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
