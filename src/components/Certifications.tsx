interface CertificationsProps {
  language: 'en' | 'fr';
}

const Certifications = ({ language }: CertificationsProps) => {
  const content = {
    en: {
      title: 'Certifications',
      provider: 'Provider',
      date: 'Date',
      certifications: [
        {
          name: 'Git, Github, Gitlab',
          provider: 'Udemy',
          date: '2024',
          image: '/assets/GIT, GitLab, GitHub Fundamentals for Software Developers.jpg'
        },
        {
          name: 'Introduction to MongoDB',
          provider: 'MongoDB',
          date: '2024',
          image: '/assets/certifications/mongodb.png'
        },
        {
          name: 'Data Science',
          provider: 'Nvidia',
          date: '2024',
          image: '/assets/certifications/nvidia.png'
        },
        {
          name: 'SEO',
          provider: 'Hubspot',
          date: '2024',
          image: '/assets/certifications/hubspot.jpg'
        },
        {
          name: 'Flutter',
          provider: 'Udemy',
          date: '2023',
          image: 'https://img-c.udemycdn.com/course/480x270/2259120_305f_6.jpg'
        },
        {
          name: 'React Native',
          provider: 'Udemy',
          date: '2025',
          image: '/assets/certifications/reactnative.png'
        },
        {
          name: 'UX/UI Design',
          provider: 'Formalab',
          date: '2022',
          image: '/assets/certifications/uxuiformation.png'
        }
      ]
    },
    fr: {
      title: 'Certifications',
      provider: 'Fournisseur',
      date: 'Date',
      certifications: [
        {
          name: 'Git, Github, Gitlab',
          provider: 'Udemy',
          date: '2024',
          image: '/assets/certifications/git.png'
        },
        {
          name: 'Introduction à MongoDB',
          provider: 'MongoDB',
          date: '2024',
          image: '/assets/certifications/mongodb.png'
        },
        {
          name: 'Science des données',
          provider: 'Nvidia',
          date: '2024',
          image: '/assets/certifications/nvidia.png'
        },
        {
          name: 'SEO',
          provider: 'Hubspot',
          date: '2024',
          image: '/assets/certifications/hubspot.jpg'
        },
        {
          name: 'Flutter',
          provider: 'Udemy',
          date: '2023',
          image: 'https://img-c.udemycdn.com/course/480x270/2259120_305f_6.jpg'
        },
        {
          name: 'React Native',
          provider: 'Udemy',
          date: '2025',
          image: '/assets/certifications/reactnative.png'
        },
        {
          name: 'UX/UI Design',
          provider: 'Formalab',
          date: '2022',
          image: '/assets/certifications/uxuiformation.png'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="certifications" className="relative py-32 px-6 lg:pl-32 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent fade-in">
          {t.title}
        </h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full mb-16"></div>

        <div className="relative">
          <div className="flex gap-6 animate-scroll pb-8">
            {[...t.certifications, ...t.certifications].map((cert, index) => (
              <div 
                key={index}
                className="group relative flex-none w-80 fade-in"
                style={{ animationDelay: `${(index % t.certifications.length) * 0.1}s` }}
              >
                <div className="relative h-full rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500"></div>
                  
                  <div className="relative z-10 p-6">
                    <div className="w-full h-48 mb-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center p-4 overflow-hidden">
                      <img 
                        src={cert.image} 
                        alt={cert.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="rgba(168,85,247,0.5)" stroke-width="2"%3E%3Cpath d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"%3E%3C/path%3E%3Cpolyline points="14 2 14 8 20 8"%3E%3C/polyline%3E%3Cline x1="16" y1="13" x2="8" y2="13"%3E%3C/line%3E%3Cline x1="16" y1="17" x2="8" y2="17"%3E%3C/line%3E%3Cpolyline points="10 9 9 9 8 9"%3E%3C/polyline%3E%3C/svg%3E';
                        }}
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{cert.name}</h3>
                    
                    <div className="space-y-2">
                      <p className="text-white/70 text-sm">
                        <span className="text-cyan-400 font-medium">{t.provider}:</span> {cert.provider}
                      </p>
                      <p className="text-white/70 text-sm">
                        <span className="text-cyan-400 font-medium">{t.date}:</span> {cert.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-336px * ${t.certifications.length}));
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
            width: fit-content;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Certifications;