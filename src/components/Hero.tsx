import { ArrowRight, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
  language: 'en' | 'fr';
}

const TypewriterEffect = ({ language }: { language: 'en' | 'fr' }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const titles = {
    en: [
      'Software Developer',
      'Mobile Developer', 
      'Web Developer',
      'Full Stack Developer'
    ],
    fr: [
      'Développeuse Logiciel',
      'Développeuse Mobile',
      'Développeuse Web',
      'Développeuse Full Stack'
    ]
  };

  const titlesList = titles[language];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentTitle = titlesList[currentTitleIndex];
      
      if (!isDeleting) {
        // Typing
        if (currentIndex < currentTitle.length) {
          setCurrentText(currentTitle.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setCurrentText(currentTitle.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((currentTitleIndex + 1) % titlesList.length);
        }
      }
    }, isDeleting ? 50 : 100); 

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentTitleIndex, titlesList]);

  return (
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white/90 mb-8 animate-fade-in-up min-h-[3rem] flex items-center justify-center">
      <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
        {currentText}
      </span>
      <span className="animate-pulse text-purple-400 ml-1">|</span>
    </h2>
  );
};

const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      title: 'Eya Naffeti',
      description: 'Passionate about innovative technologies and optimizing user experiences.',
      projectsBtn: 'View My Projects',
      contactBtn: 'Download My CV',
    },
    fr: {
      title: 'Eya Naffeti',
      description: 'Passionnée par les technologies innovantes et l\'optimisation des expériences utilisateur.',
      projectsBtn: 'Voir Mes Projets',
      contactBtn: 'Télécharger mon CV',
    }
  };

  const t = content[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}assets/CV-Eya-Naffeti.pdf`; 
    link.download = 'CV_Eya_Naffeti.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 lg:pl-32">
      <div className="absolute top-32 left-20 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-50 animate-float"></div>
      <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-2xl opacity-40 animate-float-delayed"></div>

      <div className="max-w-6xl mx-auto text-center z-10">
        <div className="mb-6 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            {t.title}
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full"></div>
        </div>

        <TypewriterEffect language={language} />

        <p className="text-lg md:text-xl text-gray-700 dark:text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up">
          {t.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            {t.projectsBtn}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button
            onClick={downloadCV}
            className="group px-8 py-4 bg-gray-100 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white rounded-full font-semibold text-lg border border-gray-300 dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            {t.contactBtn}
            <Download className="group-hover:translate-y-1 transition-transform" size={20} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 dark:bg-white/50 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
