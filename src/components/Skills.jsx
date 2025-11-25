import { Code, Cpu, Wrench, Trophy, Languages } from 'lucide-react';

const skillsData = [
  {
    category: 'Programming',
    icon: Code,
    skills: ['Python', 'C++', 'R', 'JavaScript', 'SQL']
  },
  {
    category: 'Frameworks',
    icon: Cpu,
    skills: ['React.js', 'Node.js', 'Pandas', 'NumPy']
  },
  {
    category: 'Tools',
    icon: Wrench,
    skills: ['GitHub', 'MATLAB', 'Canva', 'Excel']
  },
  {
    category: 'DSA',
    icon: Trophy,
    skills: ['206+ LeetCode Problems']
  },
  {
    category: 'Languages',
    icon: Languages,
    skills: ['Hindi', 'English', 'Punjabi']
  }
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm border border-gray-700 hover:border-purple-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="glass-card inline-block px-8 py-4 rounded-xl">
            <p className="text-gray-300 text-lg">
              <span className="text-purple-400 font-bold text-2xl">206+</span> Problems Solved on LeetCode
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
