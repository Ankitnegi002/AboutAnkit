import { Github, Instagram, Linkedin, Mail, Unlink } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black shadow-lg mt-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://github.com/Ankitnegi002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-negi-6980732a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ankitnegi5420@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.instagram.com/ankitnegi_0_0/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ankit Negi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
