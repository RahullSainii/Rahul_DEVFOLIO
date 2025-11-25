import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech Computer Engineering',
    institution: 'Thapar University, Patiala',
    period: '2023 - 2027',
    description: 'Currently pursuing Bachelor of Technology in Computer Engineering with focus on Machine Learning and Software Development.'
  },
  {
    degree: 'Senior Secondary (12th)',
    institution: 'Oakdale Sr. Sec. School',
    period: '2023',
    description: 'Completed with 80% marks'
  },
  {
    degree: 'Secondary (10th)',
    institution: 'Oakdale Sr. Sec. School',
    period: '2021',
    description: 'Completed with 93% marks'
  }
];

function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Education & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Learning</span>
          </h2>
          <p className="text-gray-400 text-lg">My academic journey</p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center gap-3 mb-3 md:mb-0">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-purple-400">{edu.institution}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={18} />
                  <span>{edu.period}</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
