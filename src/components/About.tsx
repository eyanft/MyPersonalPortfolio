import { GraduationCap, Calendar } from 'lucide-react';

interface AboutProps {
  language: 'en' | 'fr';
}

const About = ({ language }: AboutProps) => {
  const content = {
    en: {
      title: 'About Me',
      intro: "Consultant and Developer in Web and Mobile Technologies, delivering innovative digital solutions and optimized user experiences.",
      educationTitle: 'Education',
      education: [
        {
          period: '2023 - 2025',
          degree: "Professional Master's in Media Engineering",
          school: 'Higher Institute of Multimedia Arts of Manouba',
          specialization: 'Web & Mobile Development'
        },
        {
          period: '2020 - 2023',
          degree: "Bachelor's in Computer Science",
          school: 'Higher Institute of Multimedia Arts of Manouba',
          specialization: 'IT & Multimedia'
        },
        {
          period: '2019 - 2020',
          degree: 'Baccalaureate in Experimental Sciences',
          school: 'Al Farabi High School of Mornaguia Manouba',
          specialization: ''
        }
      ]
    },
    fr: {
      title: 'À Propos',
      intro: "Consultante et Développeuse en technologies Web et Mobile, fournissant des solutions digitales innovantes et des expériences utilisateurs optimisées.",
      educationTitle: 'Formation',
      education: [
        {
          period: '2023 - 2025',
          degree: "Master Professionnel en Ingénierie des Médias",
          school: "Institut Supérieur des Arts Multimédia de la Manouba",
          specialization: 'Développement Web & Mobile'
        },
        {
          period: '2020 - 2023',
          degree: "Licence en Informatique",
          school: "Institut Supérieur des Arts Multimédia de la Manouba",
          specialization: 'Informatique & Multimédia'
        },
        {
          period: '2019 - 2020',
          degree: 'Baccalauréat en Sciences Expérimentales',
          school: 'Lycée Al Farabi de Mornaguia Manouba',
          specialization: ''
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="about" className="relative py-32 px-6 lg:pl-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent fade-in">
          {t.title}
        </h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative fade-in">
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 p-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl"></div>

              <div className="relative z-8 w-full h-full rounded-2xl overflow-hidden border-4 border-gradient-to-br from-pink-400 via-purple-500 to-cyan-400">
                <img
                  src="/assets/WhatsApp Image 2025-09-22 at 22.08.42.jpeg"
                  alt="Eya Naffeti"
                  className="w-full h-full object-cover object-[50%_44%]"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl opacity-60"></div>
            </div>
          </div>

          <div className="space-y-8 fade-in">
            <p className="text-xl text-white/80 leading-relaxed">
              {t.intro}
            </p>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <GraduationCap className="text-purple-400" size={28} />
                {t.educationTitle}
              </h3>

              <div className="space-y-6">
                {t.education.map((edu, index) => (
                  <div
                    key={index}
                    className="group relative p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <Calendar className="text-cyan-400" size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-cyan-400 mb-2">{edu.period}</div>
                        <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                        <p className="text-white/60 text-sm mb-1">{edu.school}</p>
                        {edu.specialization && (
                          <p className="text-purple-400 text-sm">{edu.specialization}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
