import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Rent-a-Ride',
    description: 'A full-fledged vehicle rental platform with booking system and UI/UX optimized frontend.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'TailwindCSS'],
    github: 'https://github.com/RahullSainii/Rent-a-Ride',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'SIH AGROSMART',
    description: 'Smart Agriculture Solution for hilly regions using IoT sensors, rover system, live data dashboard, and water automation.',
    tech: ['IoT', 'React.js', 'Python', 'Arduino', 'Firebase'],
    github: 'https://github.com/RahullSainii/SIH-AGROSMART',
    image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Email Spam Classifier',
    description: 'Machine-learning model using TF-IDF + Naive Bayes achieving 82%+ accuracy.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'NLP'],
    github: 'https://github.com/RahullSainii/email-spam-classifier',
    image: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600'
  }
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Building innovative solutions to real-world problems</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group"
            >
              <div className="relative overflow-hidden rounded-t-xl h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>View</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
