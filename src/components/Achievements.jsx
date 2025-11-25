import { Trophy, Award, Users, Medal } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Hacklipse 4.0 - Pre-finalist',
    description: 'Reached pre-finals in a competitive hackathon showcasing innovative solutions',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Medal,
    title: 'Chess Captain - Gold Medal',
    description: 'Led the chess team to victory and won gold medal in inter-school championship',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Award,
    title: 'Academic Excellence Award',
    description: 'Received academic excellence award for 5 consecutive years',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'URJA Society - Executive Member',
    description: 'Managed and coordinated events for 2200+ students as executive member',
    color: 'from-green-500 to-emerald-500'
  }
];

function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Achievements & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="text-gray-400 text-lg">Recognition and responsibilities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-4 bg-gradient-to-br ${achievement.color} rounded-xl flex-shrink-0`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
