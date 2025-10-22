import { useState } from 'react';
import { X, ExternalLink, Github, Users, ChevronLeft, ChevronRight, Image } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  color: string;
  features: string[];
  role: string;
  challenge: string;
  solution: string;
  image?: string;
  gallery?: string[];
  github?: string;
  demo?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  language: 'en' | 'fr';
}

const ProjectModal = ({ project, onClose, language }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState<Set<number>>(new Set());

  if (!project) return null;

  const content = {
    en: {
      features: 'Key Features',
      technologies: 'Technologies Used',
      role: 'Role',
      challenge: 'The Challenge',
      solution: 'Our Solution',
      viewDemo: 'View Demo',
      viewCode: 'View Code',
      close: 'Close',
      gallery: 'Project Gallery',
      imageOf: 'Image {current} of {total}'
    },
    fr: {
      features: 'Fonctionnalités Clés',
      technologies: 'Technologies Utilisées',
      role: 'Rôle',
      challenge: 'Le Défi',
      solution: 'Notre Solution',
      viewDemo: 'Voir Démo',
      viewCode: 'Voir Code',
      close: 'Fermer',
      gallery: 'Galerie du Projet',
      imageOf: 'Image {current} sur {total}'
    }
  };

  const t = content[language];

  const images = project.gallery || [];
  const hasGallery = images.length > 0;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageError = (index: number) => {
    setImageError(prev => new Set(prev).add(index));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-[#0a0a1a] to-[#1a0a2e] border border-purple-500/30 shadow-2xl shadow-purple-500/20 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="text-white" size={24} />
        </button>

        <div className={`h-64 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
          {project.image ? (
            <>
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </>
          ) : (
            <div className="absolute inset-0 bg-black/30"></div>
          )}
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

          {/* Gallery Section */}
          {hasGallery && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image className="text-cyan-400" size={24} />
                <h3 className="text-2xl font-bold text-white">{t.gallery}</h3>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10">
                {/* Main Image Display */}
                <div className="relative aspect-video bg-gray-900/50">
                  {!imageError.has(currentImageIndex) ? (
                    <img
                      src={images[currentImageIndex]}
                      alt={`${project.name} - Screenshot ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain"
                      onError={() => handleImageError(currentImageIndex)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center text-white/50">
                        <Image size={48} className="mx-auto mb-2" />
                        <p>Image unavailable</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Navigation Buttons */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 text-white transition-all hover:scale-110"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 border border-white/20 text-white transition-all hover:scale-110"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/70 border border-white/20 text-white text-sm font-medium">
                    {t.imageOf
                      .replace('{current}', String(currentImageIndex + 1))
                      .replace('{total}', String(images.length))}
                  </div>
                </div>

                {/* Thumbnail Strip */}
                {images.length > 1 && (
                  <div className="p-4 bg-gray-900/30 border-t border-white/10">
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {images.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                            currentImageIndex === index
                              ? 'border-purple-500 scale-105 shadow-lg shadow-purple-500/50'
                              : 'border-white/20 hover:border-white/40 hover:scale-105'
                          }`}
                        >
                          {!imageError.has(index) ? (
                            <img
                              src={img}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                              onError={() => handleImageError(index)}
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                              <Image size={16} className="text-white/30" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">{t.challenge}</h3>
              <p className="text-white/70">{project.challenge}</p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">{t.solution}</h3>
              <p className="text-white/70">{project.solution}</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <Users className="text-cyan-400" size={20} />
              <h3 className="text-lg font-semibold text-white">{t.role}</h3>
            </div>
            <p className="text-white/70">{project.role}</p>
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