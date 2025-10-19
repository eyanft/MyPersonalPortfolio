import { Globe } from 'lucide-react';

interface LanguagesProps {
  language: 'en' | 'fr';
}

const Languages = ({ language }: LanguagesProps) => {
  const content = {
    en: {
      title: 'Languages',
      languages: [
        { name: 'Arabic', level: 'Native', percentage: 100 },
        { name: 'French', level: 'Fluent', percentage: 95 },
        { name: 'English', level: 'Intermediate', percentage: 75 },
        { name: 'German', level: 'Beginner', percentage: 30 }
      ]
    },
    fr: {
      title: 'Langues',
      languages: [
        { name: 'Arabe', level: 'Natif', percentage: 100 },
        { name: 'Français', level: 'Courant', percentage: 95 },
        { name: 'Anglais', level: 'Intermédiaire', percentage: 75 },
        { name: 'Allemand', level: 'Débutant', percentage: 30 }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="languages" className="relative py-32 px-6 lg:pl-32 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent fade-in">
          {t.title}
        </h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full mb-16"></div>

        <div className="relative p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 fade-in">
          <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
            <Globe className="text-white" size={36} />
          </div>

          <div className="space-y-8">
            {t.languages.map((lang, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-white">{lang.name}</h3>
                  <span className="text-cyan-400 text-sm">{lang.level}</span>
                </div>
                <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
