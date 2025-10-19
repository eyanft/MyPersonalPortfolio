import { Heart, Users } from 'lucide-react';

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
          role: 'Active Member',
          description: 'Promoting women in engineering and technology through workshops and mentorship programs',
          period: '2021 - Present'
        },
        {
          name: 'JCI Mornaguia',
          role: 'Community Volunteer',
          description: 'Participating in community development projects and youth empowerment initiatives',
          period: '2022 - Present'
        }
      ]
    },
    fr: {
      title: 'Bénévolat',
      organizations: [
        {
          name: 'Club Jeunes Ingénieures ISAMM',
          role: 'Membre Active',
          description: 'Promotion des femmes dans l\'ingénierie et la technologie à travers des ateliers et programmes de mentorat',
          period: '2021 - Présent'
        },
        {
          name: 'JCI Mornaguia',
          role: 'Bénévole Communautaire',
          description: 'Participation aux projets de développement communautaire et initiatives d\'autonomisation des jeunes',
          period: '2022 - Présent'
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
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center flex-shrink-0">
                      {index === 0 ? <Users className="text-white" size={28} /> : <Heart className="text-white" size={28} />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{org.name}</h3>
                      <p className="text-purple-400 text-sm">{org.period}</p>
                    </div>
                  </div>

                  <h4 className="text-lg text-cyan-400 mb-4">{org.role}</h4>

                  <p className="text-white/70 leading-relaxed">
                    {org.description}
                  </p>
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
