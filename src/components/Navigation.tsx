import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Lightbulb, FolderOpen, Mail, Globe } from 'lucide-react';

interface NavigationProps {
  language: 'en' | 'fr';
  toggleLanguage: () => void;
}

const Navigation = ({ language, toggleLanguage }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState('home');

  const content = {
    en: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    fr: {
      home: 'Accueil',
      about: 'À Propos',
      experience: 'Expérience',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
    }
  };

  const t = content[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const navItems = [
    { id: 'home', icon: Home, label: t.home },
    { id: 'about', icon: User, label: t.about },
    { id: 'experience', icon: Briefcase, label: t.experience },
    { id: 'skills', icon: Lightbulb, label: t.skills },
    { id: 'projects', icon: FolderOpen, label: t.projects },
    { id: 'contact', icon: Mail, label: t.contact },
  ];

  // Sync active nav item with visible section
  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Trigger when the section heading area enters mid viewport
        root: null,
        rootMargin: '0px 0px -50% 0px',
        threshold: 0.35,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="relative p-4 rounded-3xl bg-[#0a0a1a]/80 backdrop-blur-md border border-purple-500/20 shadow-2xl shadow-purple-500/10">
          <div className="space-y-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-110"
                  title={item.label}
                >
                  <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50'
                      : 'bg-white/5 group-hover:bg-white/10'
                  }`}></div>
                  <Icon
                    className={`relative z-10 transition-colors ${
                      activeSection === item.id ? 'text-white' : 'text-white/60 group-hover:text-white'
                    }`}
                    size={20}
                  />
                  <div className="absolute left-full ml-4 px-4 py-2 rounded-lg bg-[#0a0a1a]/95 backdrop-blur-sm border border-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    <span className="text-sm text-white">{item.label}</span>
                  </div>
                </button>
              );
            })}

            <div className="h-px bg-white/10 my-4"></div>

            <button
              onClick={toggleLanguage}
              className="group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-110"
              title={language === 'en' ? 'Français' : 'English'}
            >
              <div className="absolute inset-0 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all duration-300"></div>
              <Globe className="relative z-10 text-white/60 group-hover:text-white transition-colors" size={20} />
              <div className="absolute left-full ml-4 px-4 py-2 rounded-lg bg-[#0a0a1a]/95 backdrop-blur-sm border border-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                <span className="text-sm text-white">{language === 'en' ? 'Français' : 'English'}</span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden">
        <div className="flex items-center gap-2 p-3 rounded-full bg-[#0a0a1a]/90 backdrop-blur-md border border-purple-500/20 shadow-2xl shadow-purple-500/10">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative p-3 rounded-full transition-all duration-300"
              >
                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50'
                    : 'bg-transparent'
                }`}></div>
                <Icon
                  className={`relative z-10 transition-colors ${
                    activeSection === item.id ? 'text-white' : 'text-white/60'
                  }`}
                  size={18}
                />
              </button>
            );
          })}
          <div className="w-px h-8 bg-white/10 mx-1"></div>
          <button
            onClick={toggleLanguage}
            className="relative p-3 rounded-full transition-all duration-300"
          >
            <Globe className="text-white/60" size={18} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
