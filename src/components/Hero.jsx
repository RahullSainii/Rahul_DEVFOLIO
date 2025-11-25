import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Download } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Rahul Saini</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6">
            B.Tech Computer Engineering | Frontend & ML Developer
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-purple-400" />
              <span>Thapar University, Patiala, India</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="mailto:rsaini1_be23@thapar.edu"
            className="glass-card px-6 py-3 rounded-lg flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <Mail size={20} className="text-purple-400" />
            <span className="text-white">Email Me</span>
          </a>
          <a
            href="tel:+918872144340"
            className="glass-card px-6 py-3 rounded-lg flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <Phone size={20} className="text-pink-400" />
            <span className="text-white">+91 8872144340</span>
          </a>
          <a
            href="#"
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg flex items-center gap-2 hover:scale-105 transition-transform text-white font-semibold"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/RahullSainii"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-saini-039852301"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://instagram.com/rahullsainii"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Instagram size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
