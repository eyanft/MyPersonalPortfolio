import { Code2, Server, Smartphone, Database, Wrench, Palette } from 'lucide-react';

interface SkillsProps {
  language: 'en' | 'fr';
}

const Skills = ({ language }: SkillsProps) => {
  const content = {
    en: {
      title: 'Skills & Technologies',
      categories: [
        {
          name: 'Frontend',
          icon: Code2,
          skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
          color: 'from-blue-500 to-cyan-500'
        },
        {
          name: 'Backend',
          icon: Server,
          skills: ['Spring Boot', 'Spring Cloud', 'FastAPI', 'Python', 'Java'],
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'Mobile',
          icon: Smartphone,
          skills: ['Flutter', 'Dart', 'React Native'],
          color: 'from-pink-500 to-rose-500'
        },
        {
          name: 'Database',
          icon: Database,
          skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
          color: 'from-green-500 to-emerald-500'
        },
        {
          name: 'Tools & Services',
          icon: Wrench,
          skills: ['Git/GitHub/Gitlab', 'Postman', 'Stripe', 'Twilio', 'Cloudinary'],
          color: 'from-orange-500 to-amber-500'
        },
        {
          name: 'Design',
          icon: Palette,
          skills: ['Figma', 'Draw.io', 'Canva'],
          color: 'from-indigo-500 to-violet-500'
        }
      ]
    },
    fr: {
      title: 'Compétences & Technologies',
      categories: [
        {
          name: 'Frontend',
          icon: Code2,
          skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
          color: 'from-blue-500 to-cyan-500'
        },
        {
          name: 'Backend',
          icon: Server,
          skills: ['Spring Boot', 'Spring Cloud', 'FastAPI', 'Python', 'Java'],
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'Mobile',
          icon: Smartphone,
          skills: ['Flutter', 'Dart', 'React Native'],
          color: 'from-pink-500 to-rose-500'
        },
        {
          name: 'Base de données',
          icon: Database,
          skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
          color: 'from-green-500 to-emerald-500'
        },
        {
          name: 'Outils & Services',
          icon: Wrench,
          skills: ['Git/GitHub/Gitlab', 'Postman', 'Stripe', 'Twilio', 'Cloudinary'],
          color: 'from-orange-500 to-amber-500'
        },
        {
          name: 'Design',
          icon: Palette,
          skills: ['Figma', 'Draw.io', 'Canva'],
          color: 'from-indigo-500 to-violet-500'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="skills" className="relative py-32 px-6 lg:pl-32 bg-gradient-to-b from-transparent via-purple-100/30 dark:via-purple-900/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent fade-in">
          {t.title}
        </h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-purple-100/50 to-pink-100/50 dark:from-purple-500/10 dark:to-pink-500/10 backdrop-blur-sm border border-gray-300 dark:border-white/10 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 dark:from-purple-500/0 dark:to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 dark:group-hover:from-purple-500/5 dark:group-hover:to-pink-500/5 transition-all duration-500"></div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <Icon className="text-white" size={28} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{category.name}</h3>

                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-400/40 dark:border-purple-500/30 text-gray-900 dark:text-white/90 text-sm font-medium hover:border-purple-500/50 transition-colors"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;