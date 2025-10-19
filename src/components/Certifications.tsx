import { Award, CheckCircle } from 'lucide-react';

interface CertificationsProps {
  language: 'en' | 'fr';
}

const Certifications = ({ language }: CertificationsProps) => {
  const content = {
    en: {
      title: 'Certifications',
      certifications: [
        'Flutter Development',
        'MongoDB Database',
        'SEO Optimization',
        'Git & GitHub',
        'UX/UI Design',
        'Responsive Web Design'
      ]
    },
    fr: {
      title: 'Certifications',
      certifications: [
        'Développement Flutter',
        'Base de données MongoDB',
        'Optimisation SEO',
        'Git & GitHub',
        'Design UX/UI',
        'Design Web Responsive'
      ]
    }
  };

  const t = content[language];

  return (
    <section id="certifications" className="relative py-32 px-6 lg:pl-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent fade-in">
          {t.title}
        </h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full mb-16"></div>

        <div className="relative p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 fade-in">
          <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
            <Award className="text-white" size={36} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.certifications.map((cert, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="text-cyan-400" size={24} />
                </div>
                <span className="text-white/90 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
