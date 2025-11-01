import { Heart, Users, Award, Calendar } from 'lucide-react';

interface VolunteerProps {
  language: 'en' | 'fr';
}

const Volunteer = ({ language }: VolunteerProps) => {
  const content = {
    en: {
      title: 'Volunteer Work',
      organizations: [
        {
          name: 'Club Jeunes Ingénieures ISAMM',
          role: 'Head of Business Development Department',
          description: 'Responsible for promoting club activities, negotiating partnerships, and organizing events.',
          period: '2020 - 2024',
          image: '/assets/j2i.jpg',
          achievements: [
            'Organized 5 major events',
            'Developed 3 strategic partnerships'
          ]
        },
        {
          name: 'JCI Mornaguia',
          role: 'Active Member',
          description: 'Contributing to community projects and initiatives, and participating in charity event organization.',
          period: '2020 - 2021',
          image: '/assets/jcim.png',
          achievements: [
            'Participated in 3 community projects',
            'Supported charity event organization'
          ]
        }
      ]
    },
    fr: {
      title: 'Bénévolat',
      organizations: [
        {
          name: 'Club Jeunes Ingénieures ISAMM',
          role: 'Cheffe du département développement commercial',
          description: 'Responsable de la promotion des activités du club, de la négociation de partenariats, et de l\'organisation d\'événements.',
          period: '2020 - 2024',
          image: '/assets/j2i.jpg',
          achievements: [
            'Organisation de 5 événements majeurs',
            'Développement de 3 partenariats stratégiques'
          ]
        },
        {
          name: 'JCI Mornaguia',
          role: 'Membre actif',
          description: 'Contribuant aux projets et initiatives communautaires, et participant à l\'organisation d\'événements caritatifs.',
          period: '2020 - 2021',
          image: '/assets/jcim.png',
          achievements: [
            'Participation à 3 projets communautaires',
            'Support à l\'organisation d\'événements caritatifs'
          ]
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="volunteer" className="relative py-32 px-6 lg:pl-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent fade-in">
          {t.title}
        </h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full mb-16"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.organizations.map((org, index) => (
            <div
              key={index}
              className="group relative fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-purple-100/50 to-pink-100/50 dark:from-purple-500/10 dark:to-pink-500/10 backdrop-blur-sm border border-gray-300 dark:border-white/10 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <img 
                    src={org.image} 
                    alt={org.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 dark:from-purple-500/0 dark:to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 dark:group-hover:from-purple-500/5 dark:group-hover:to-pink-500/5 transition-all duration-500"></div>

                <div className="relative z-10 p-8">
                  {/* Logo at top */}
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-2xl bg-gray-100 dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/10 flex items-center justify-center p-3 overflow-hidden">
                      <img 
                        src={org.image} 
                        alt={`${org.name} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full flex items-center justify-center">${index === 0 ? '<svg class="text-gray-700 dark:text-white" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' : '<svg class="text-gray-700 dark:text-white" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'}</div>`;
                          }
                        }}
                      />
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{org.name}</h3>
                    <div className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-400 text-sm mb-2">
                      <Calendar size={16} />
                      <span>{org.period}</span>
                    </div>
                    <h4 className="text-lg text-cyan-600 dark:text-cyan-400 font-medium">{org.role}</h4>
                  </div>

                  <p className="text-gray-700 dark:text-white/70 leading-relaxed mb-6">
                    {org.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3">
                    {org.achievements.map((achievement, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-3 text-gray-700 dark:text-white/80 text-sm"
                      >
                        <Award size={16} className="text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </div>
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

export default Volunteer;