import { MapPin } from 'lucide-react';
interface ExperienceProps {
  language: 'en' | 'fr';
}

const Experience = ({ language }: ExperienceProps) => {
  const content = {
    en: {
      title: 'Professional Experience',
      experiences: [
        {
          company: 'WEVIOO',
          logo: `${import.meta.env.BASE_URL}assets/logo/wevioo.png`,
          role: 'End of Studies Internship',
          period: 'Feb 2025 - Jul 2025',
          location: 'Ariana, Tunisia',
          description: 'Development of a mobile application for an online P2P marketplace.',
          technologies: [
            'Spring Boot', 
            'PostgreSQL', 
            'React Native', 
            'NativeWind', 
            'Firebase', 
            'Python FastAPI',
            'Microservices',
            'Docker'
          ]
        },
        {
          company: 'Poly Oil',
          logo: `${import.meta.env.BASE_URL}assets/logo/po.jpg`,
          role: 'Web Developer Intern',
          period: 'Jul 2024 - Aug 2024',
          location: 'Manouba, Tunisia',
          description: 'Development of a website for showcasing car lubricant products with administrative management.',
          technologies: ['ReactJS', 'Spring Boot']
        },
        {
          company: 'Medianet',
          logo: `${import.meta.env.BASE_URL}assets/logo/medianet.png`,
          role: 'Initiation Intern',
          period: 'Feb 2024 - May 2024',
          location: 'Ariana, Tunisia',
          description: 'Conducted user studies, created wireframes, and developed web interfaces.',
          technologies: [ 'PHP', 'MySQL', 'CSS', 'HTML','WordPress','Figma' ]
        },
        {
          company: 'Tsunami IT',
          logo: `${import.meta.env.BASE_URL}assets/logo/tsunamiit.png`,
          role: 'End of Studies Internship',
          period: 'Feb 2023 - May 2023',
          location: 'Tunis, Tunisia',
          description: 'Development of a mobile application for managing cattle, their production, and integrations.',
          technologies: ['Dart', 'Flutter', 'Laravel', 'Microservices', 'MySQL']
        }
      ]
    },
    fr: {
      title: 'Expérience Professionnelle',
      experiences: [
        {
          company: 'WEVIOO',
          logo: `${import.meta.env.BASE_URL}assets/logo/wevioo.png`,
          role: 'Développeuse Logiciel – Stage de fin d’études',
          period: 'Fév 2025 - Juil 2025',
          location: 'Ariana, Tunis, Tunisie',
          description: "Développement d'une application mobile pour une marketplace en ligne P2P.",
          technologies: [
            'Spring Boot', 
            'Microservices', 
            'PostgreSQL', 
            'React Native', 
            'NativeWind', 
            'Firebase', 
            'Docker', 
            'Python FastAPI'
          ]
        },
        {
          company: 'Poly Oil',
          logo: `${import.meta.env.BASE_URL}assets/logo/po.jpg`,
          role: 'Stagiaire Développeuse Web',
          period: 'Juil 2024 - Août 2024',
          location: 'Manouba, Tunisie',
          description: 'Développement d’un site web pour présenter des produits lubrifiants pour voitures avec gestion administrative.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Java', 'Spring Boot']
        },
        {
          company: 'Medianet',
          logo: `${import.meta.env.BASE_URL}assets/logo/medianet.png`,
          role: 'Stage d’initiation',
          period: 'Fév 2024 - Mai 2024',
          location: 'Ariana, Tunisie',
          description: 'Réalisation d’études utilisateurs, création de wireframes et développement d’interfaces web.',
          technologies: ['Figma', 'CMS']
        },
        {
          company: 'Tsunami IT',
          logo: `${import.meta.env.BASE_URL}assets/logo/tsunamiit.png`,
          role: 'Stage de fin d’études – Développeuse Mobile',
          period: 'Fév 2023 - Mai 2023',
          location: 'Tunis, Tunisie',
          description: "Développement d'une application mobile pour gérer le bétail, sa production et ses intégrations.",
          technologies: ['Dart', 'Flutter', 'JIRA', 'GitHub', 'Figma', 'Android Studio']
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="experience" className="relative py-32 px-6 lg:pl-32 bg-gradient-to-b from-transparent via-purple-100/30 dark:via-purple-900/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent fade-in">
          {t.title}
        </h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full mb-16"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-purple-100/50 to-pink-100/50 dark:from-purple-500/10 dark:to-pink-500/10 backdrop-blur-sm border border-gray-300 dark:border-white/10 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/20">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 dark:from-purple-500/0 dark:to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 dark:group-hover:from-purple-500/5 dark:group-hover:to-pink-500/5 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/20">
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.company}</h3>
                  <h4 className="text-lg text-purple-600 dark:text-purple-400 mb-3">{exp.role}</h4>

                  <div className="flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400 mb-2">
                    <MapPin size={16} />
                    {exp.location}
                  </div>

                  <div className="text-sm text-gray-600 dark:text-white/60 mb-4">{exp.period}</div>

                  <p className="text-gray-700 dark:text-white/70 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-400/40 dark:border-purple-500/30 text-purple-700 dark:text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
