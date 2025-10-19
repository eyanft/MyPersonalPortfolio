import { X, ExternalLink, Github, Calendar, Users } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  color: string;
  features: string[];
  duration: string;
  role: string;
  github?: string;
  demo?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  language: 'en' | 'fr';
}

const ProjectModal = ({ project, onClose, language }: ProjectModalProps) => {
  if (!project) return null;

  const content = {
    en: {
      features: 'Key Features',
      technologies: 'Technologies Used',
      duration: 'Duration',
      role: 'Role',
      viewDemo: 'View Demo',
      viewCode: 'View Code',
      close: 'Close'
    },
    fr: {
      features: 'Fonctionnalités Clés',
      technologies: 'Technologies Utilisées',
      duration: 'Durée',
      role: 'Rôle',
      viewDemo: 'Voir Démo',
      viewCode: 'Voir Code',
      close: 'Fermer'
    }
  };

  const t = content[language];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-[#0a0a1a] to-[#1a0a2e] border border-purple-500/30 shadow-2xl shadow-purple-500/20 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="text-white" size={24} />
        </button>

        <div className={`h-64 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-5xl font-bold text-white z-10">{project.name}</h2>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a1a] to-transparent"></div>
        </div>

        <div className="p-8 space-y-8">
          <div>
            <p className="text-xl text-white/90 leading-relaxed mb-4">
              {project.fullDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="text-cyan-400" size={20} />
                <h3 className="text-lg font-semibold text-white">{t.duration}</h3>
              </div>
              <p className="text-white/70">{project.duration}</p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-cyan-400" size={20} />
                <h3 className="text-lg font-semibold text-white">{t.role}</h3>
              </div>
              <p className="text-white/70">{project.role}</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.features}</h3>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-white/80">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mt-2 flex-shrink-0"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.technologies}</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white/90 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                {t.viewDemo}
                <ExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                {t.viewCode}
                <Github className="group-hover:rotate-12 transition-transform" size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
