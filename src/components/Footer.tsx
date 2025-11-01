import { Github, Linkedin, Mail, Instagram, Heart } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'fr';
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    en: {
      madeWith: 'Made with',
      by: 'by Eya Naffeti',
      rights: '© 2025 All rights reserved'
    },
    fr: {
      madeWith: 'Fait avec',
      by: 'par Eya Naffeti',
      rights: '© 2025 Tous droits réservés'
    }
  };

  const t = content[language];

  return (
    <footer className="relative py-12 px-6 border-t border-gray-300 dark:border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/eyanft"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-500/20 dark:to-pink-500/20 border border-gray-300 dark:border-white/10 flex items-center justify-center hover:border-purple-500/50 transition-all hover:scale-110"
            >
              <Github className="text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/eyanaffeti/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-500/20 dark:to-pink-500/20 border border-gray-300 dark:border-white/10 flex items-center justify-center hover:border-purple-500/50 transition-all hover:scale-110"
            >
              <Linkedin className="text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white" size={20} />
            </a>
            <a
              href="mailto:eya.naffeti01@gmail.com"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-500/20 dark:to-pink-500/20 border border-gray-300 dark:border-white/10 flex items-center justify-center hover:border-purple-500/50 transition-all hover:scale-110"
            >
              <Mail className="text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white" size={20} />
            </a>
         
          </div>

          <p className="text-gray-700 dark:text-white/60 text-sm text-center flex items-center gap-2 flex-wrap justify-center">
            <span>{t.madeWith}</span>
            <Heart className="text-pink-500 fill-pink-500 animate-pulse" size={16} />
            <span>{t.by}</span>
            <span>{t.rights}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;