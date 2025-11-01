import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Lightbulb, FolderOpen, Mail, Globe, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface NavigationProps {
  language: 'en' | 'fr';
  toggleLanguage: () => void;
}

const Navigation = ({ language, toggleLanguage }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
    if (element) {
      // Set active section immediately for better UX
      setActiveSection(id);
      // Close mobile menu if open
      setMobileMenuOpen(false);
      // Scroll smoothly to the section
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'home', icon: Home, label: t.home },
    { id: 'about', icon: User, label: t.about },
    { id: 'experience', icon: Briefcase, label: t.experience },
    { id: 'skills', icon: Lightbulb, label: t.skills },
    { id: 'projects', icon: FolderOpen, label: t.projects },
    { id: 'contact', icon: Mail, label: t.contact },
  ];

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on scroll
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleScroll = () => {
      setMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Sync active nav item with visible section
  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const determineActiveSection = () => {
      // Find the section closest to the top of the viewport (with offset)
      const viewportOffset = window.innerHeight * 0.3; // 30% from top
      let activeId = 'home';
      let minDistance = Infinity;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportOffset);
        
        // If section is in viewport and closer to target position
        if (rect.top <= viewportOffset && rect.bottom >= viewportOffset) {
          if (distance < minDistance) {
            minDistance = distance;
            activeId = el.id;
          }
        }
        // If no section is at target position, use the one closest to top
        else if (rect.top >= 0 && rect.top < minDistance) {
          minDistance = rect.top;
          activeId = el.id;
        }
      });

      setActiveSection(activeId);
    };

    // Initial check
    determineActiveSection();

    // Use IntersectionObserver for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        // Determine which section should be active based on viewport position
        determineActiveSection();
      },
      {
        root: null,
        rootMargin: '-20% 0px -50% 0px', // Trigger when section is in upper portion of viewport
        threshold: [0, 0.1, 0.5, 1.0],
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Also listen to scroll events for more accurate detection
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          determineActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="relative p-4 rounded-3xl bg-white/80 dark:bg-[#0a0a1a]/80 backdrop-blur-md border border-purple-500/20 dark:border-purple-500/20 light:border-purple-400/30 shadow-2xl shadow-purple-500/10 dark:shadow-purple-500/10 light:shadow-purple-400/5">
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
                      : 'bg-gray-200 dark:bg-white/5 group-hover:bg-gray-300 dark:group-hover:bg-white/10'
                  }`}></div>
                  <Icon
                    className={`relative z-10 transition-colors ${
                      activeSection === item.id ? 'text-white dark:text-white light:text-gray-900' : 'text-gray-700 dark:text-white/60 light:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white light:group-hover:text-gray-900'
                    }`}
                    size={20}
                  />
                  <div className="absolute left-full ml-4 px-4 py-2 rounded-lg bg-white/95 dark:bg-[#0a0a1a]/95 backdrop-blur-sm border border-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    <span className="text-sm text-gray-900 dark:text-white">{item.label}</span>
                  </div>
                </button>
              );
            })}

            <div className="h-px bg-white/10 dark:bg-white/10 light:bg-gray-300 my-4"></div>

            <button
              onClick={toggleTheme}
              className="group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-110"
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            >
              <div className="absolute inset-0 rounded-xl bg-gray-200 dark:bg-white/5 group-hover:bg-gray-300 dark:group-hover:bg-white/10 transition-all duration-300"></div>
              {theme === 'dark' ? (
                <Sun className="relative z-10 text-white/60 group-hover:text-white transition-colors" size={20} />
              ) : (
                <Moon className="relative z-10 text-gray-700 group-hover:text-gray-900 transition-colors" size={20} />
              )}
              <div className="absolute left-full ml-4 px-4 py-2 rounded-lg bg-white/95 dark:bg-[#0a0a1a]/95 backdrop-blur-sm border border-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                <span className="text-sm text-gray-900 dark:text-white">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </div>
            </button>

            <button
              onClick={toggleLanguage}
              className="group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-110"
              title={language === 'en' ? 'Français' : 'English'}
            >
              <div className="absolute inset-0 rounded-xl bg-gray-200 dark:bg-white/5 group-hover:bg-gray-300 dark:group-hover:bg-white/10 transition-all duration-300"></div>
              <Globe className="relative z-10 text-gray-700 dark:text-white/60 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" size={20} />
              <div className="absolute left-full ml-4 px-4 py-2 rounded-lg bg-white/95 dark:bg-[#0a0a1a]/95 backdrop-blur-sm border border-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                <span className="text-sm text-gray-900 dark:text-white">{language === 'en' ? 'Français' : 'English'}</span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden p-3 rounded-full bg-white/90 dark:bg-[#0a0a1a]/90 backdrop-blur-md border border-purple-500/20 dark:border-purple-500/20 shadow-2xl shadow-purple-500/10 dark:shadow-purple-500/10 transition-all duration-300 hover:scale-110"
        aria-label="Menu"
      >
        {mobileMenuOpen ? (
          <X className="text-gray-700 dark:text-white" size={24} />
        ) : (
          <Menu className="text-gray-700 dark:text-white" size={24} />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full bg-white/95 dark:bg-[#0a0a1a]/95 backdrop-blur-md border-l border-purple-500/20 dark:border-purple-500/20 shadow-2xl overflow-y-auto">
          <div className="p-6 pt-20 space-y-4">
            {/* Navigation Items */}
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50 text-white'
                      : 'bg-gray-100/50 dark:bg-white/5 text-gray-700 dark:text-white/60 hover:bg-gray-200 dark:hover:bg-white/10'
                  }`}
                >
                  <Icon
                    className={`transition-colors ${
                      activeSection === item.id ? 'text-white' : 'text-gray-700 dark:text-white/60'
                    }`}
                    size={22}
                  />
                  <span className="text-base font-medium">{item.label}</span>
                </button>
              );
            })}

            <div className="h-px bg-gray-300 dark:bg-white/10 my-6"></div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-full flex items-center gap-4 p-4 rounded-xl bg-gray-100/50 dark:bg-white/5 text-gray-700 dark:text-white/60 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="text-gray-700 dark:text-white/60" size={22} />
                  <span className="text-base font-medium">{language === 'en' ? 'Light Mode' : 'Mode Clair'}</span>
                </>
              ) : (
                <>
                  <Moon className="text-gray-700 dark:text-white/60" size={22} />
                  <span className="text-base font-medium">{language === 'en' ? 'Dark Mode' : 'Mode Sombre'}</span>
                </>
              )}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="w-full flex items-center gap-4 p-4 rounded-xl bg-gray-100/50 dark:bg-white/5 text-gray-700 dark:text-white/60 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
            >
              <Globe className="text-gray-700 dark:text-white/60" size={22} />
              <span className="text-base font-medium">{language === 'en' ? 'Français' : 'English'}</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
