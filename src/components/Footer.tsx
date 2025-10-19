import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'fr';
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    en: {
      copyright: 'Made with love by Eya Naffeti © 2025 All rights reserved'
    },
    fr: {
      copyright: 'Fait avec amour par Eya Naffeti © 2025 Tous droits réservés'
    }
  };

  const t = content[language];

  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center hover:border-purple-500/50 transition-all hover:scale-110"
            >
              <Github className="text-white/70 hover:text-white" size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center hover:border-purple-500/50 transition-all hover:scale-110"
            >
              <Linkedin className="text-white/70 hover:text-white" size={20} />
            </a>
            <a
              href="mailto:eya.naffeti01@gmail.com"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center hover:border-purple-500/50 transition-all hover:scale-110"
            >
              <Mail className="text-white/70 hover:text-white" size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center hover:border-purple-500/50 transition-all hover:scale-110"
            >
              <Instagram className="text-white/70 hover:text-white" size={20} />
            </a>
          </div>

          <p className="text-white/60 text-sm text-center">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
