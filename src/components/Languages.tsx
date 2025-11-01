interface LanguagesProps {
  language: 'en' | 'fr';
}

const Languages = ({ language }: LanguagesProps) => {
  const content = {
    en: {
      title: 'Languages',
      languages: [
        { 
          name: 'Arabic', 
          level: 'Native',
          flag: 'https://flagcdn.com/w80/tn.png'
        },
        { 
          name: 'French', 
          level: 'Fluent',
          flag: 'https://flagcdn.com/w80/fr.png'
        },
        { 
          name: 'English', 
          level: 'Intermediate',
          flag: 'https://flagcdn.com/w80/gb.png'
        },
        { 
          name: 'German', 
          level: 'Beginner',
          flag: 'https://flagcdn.com/w80/de.png'
        }
      ]
    },
    fr: {
      title: 'Langues',
      languages: [
        { 
          name: 'Arabe', 
          level: 'Natif',
          flag: 'https://flagcdn.com/w80/tn.png'
        },
        { 
          name: 'Français', 
          level: 'Courant',
          flag: 'https://flagcdn.com/w80/fr.png'
        },
        { 
          name: 'Anglais', 
          level: 'Intermédiaire',
          flag: 'https://flagcdn.com/w80/gb.png'
        },
        { 
          name: 'Allemand', 
          level: 'Débutant',
          flag: 'https://flagcdn.com/w80/de.png'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="languages" className="relative py-32 px-6 lg:pl-32 bg-gradient-to-b from-transparent via-purple-100/30 dark:via-purple-900/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent fade-in">
          {t.title}
        </h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full mb-16"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.languages.map((lang, index) => (
            <div 
              key={index} 
              className="group relative fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-purple-100/50 to-pink-100/50 dark:from-purple-500/10 dark:to-pink-500/10 backdrop-blur-sm border border-gray-300 dark:border-white/10 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 dark:from-purple-500/0 dark:to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 dark:group-hover:from-purple-500/5 dark:group-hover:to-pink-500/5 transition-all duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-6 rounded-2xl bg-gray-100 dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/10 flex items-center justify-center p-2 overflow-hidden">
                    <img 
                      src={lang.flag} 
                      alt={`${lang.name} flag`} 
                      className="w-full h-full object-cover rounded-lg shadow-sm"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{lang.name}</h3>
                  
                  <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-400/40 dark:border-purple-500/30 text-cyan-600 dark:text-cyan-400 text-sm font-medium">
                    {lang.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;