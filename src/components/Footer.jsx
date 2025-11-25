import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/RahullSainii"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-saini-039852301"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://instagram.com/rahullsainii"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Instagram size={24} />
            </a>
          </div>

          <div className="text-gray-400 text-center">
            <p className="flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Rahul Saini
            </p>
            <p className="mt-2">Copyright © 2025 Rahul Saini. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
