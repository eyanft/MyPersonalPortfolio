import { useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface ProjectsProps {
  language: 'en' | 'fr';
}

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

const Projects = ({ language }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const content = {
    en: {
      title: 'Featured Projects',
      viewProject: 'View Project',
      projects: [
        {
          name: 'ProConnect',
          description: 'Professional networking platform connecting talents with opportunities',
          fullDescription: 'ProConnect is a comprehensive professional networking platform designed to bridge the gap between talented professionals and career opportunities. The platform features real-time messaging, advanced search filters, and intelligent job matching algorithms.',
          technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
          color: 'from-blue-500 to-cyan-500',
          features: [
            'Real-time chat and messaging system',
            'Advanced profile matching algorithm',
            'Job posting and application management',
            'Professional network building tools',
            'Resume builder and portfolio showcase'
          ],
          duration: '6 months',
          role: 'Full Stack Developer'
        },
        {
          name: 'Autify',
          description: 'Automated testing platform for web applications with AI-powered insights',
          fullDescription: 'Autify revolutionizes web application testing with AI-powered automation. It intelligently identifies potential bugs, generates test cases automatically, and provides actionable insights to improve code quality.',
          technologies: ['TypeScript', 'React', 'Python', 'TensorFlow'],
          color: 'from-purple-500 to-pink-500',
          features: [
            'AI-powered test case generation',
            'Automated bug detection and reporting',
            'Visual regression testing',
            'Performance monitoring and analytics',
            'Integration with CI/CD pipelines'
          ],
          duration: '8 months',
          role: 'Lead Developer'
        },
        {
          name: 'NovaTech',
          description: 'E-commerce platform for tech products with advanced filtering',
          fullDescription: 'NovaTech is a modern e-commerce solution specifically designed for technology products. It features advanced filtering, secure payment processing, and an intuitive user experience.',
          technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
          color: 'from-pink-500 to-rose-500',
          features: [
            'Advanced product filtering and search',
            'Secure payment integration with Stripe',
            'Inventory management system',
            'Customer review and rating system',
            'Order tracking and notifications'
          ],
          duration: '5 months',
          role: 'Frontend Developer'
        },
        {
          name: 'RepasRes',
          description: 'Restaurant reservation system with real-time availability',
          fullDescription: 'RepasRes simplifies restaurant reservations with real-time table availability, integrated payments, and seamless booking management for both customers and restaurant owners.',
          technologies: ['React', 'Firebase', 'Google Maps API'],
          color: 'from-green-500 to-emerald-500',
          features: [
            'Real-time table availability tracking',
            'Interactive restaurant location maps',
            'Automated booking confirmations',
            'Menu preview and special offers',
            'Customer preferences and history'
          ],
          duration: '4 months',
          role: 'Full Stack Developer'
        },
        {
          name: 'Magon Farm',
          description: 'Farm management application for agricultural operations',
          fullDescription: 'Magon Farm is a comprehensive mobile application designed to help farmers manage their agricultural operations efficiently. It includes crop monitoring, weather forecasting, and resource management tools.',
          technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps'],
          color: 'from-amber-500 to-orange-500',
          features: [
            'Crop health monitoring and alerts',
            'Weather forecasting integration',
            'Resource and inventory management',
            'Field mapping with GPS coordinates',
            'Harvest planning and tracking'
          ],
          duration: '7 months',
          role: 'Mobile Developer'
        }
      ]
    },
    fr: {
      title: 'Projets Phares',
      viewProject: 'Voir Projet',
      projects: [
        {
          name: 'ProConnect',
          description: 'Plateforme de networking professionnel connectant talents et opportunités',
          fullDescription: 'ProConnect est une plateforme complète de réseautage professionnel conçue pour combler le fossé entre les professionnels talentueux et les opportunités de carrière. La plateforme comprend une messagerie en temps réel, des filtres de recherche avancés et des algorithmes intelligents de matching.',
          technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
          color: 'from-blue-500 to-cyan-500',
          features: [
            'Système de chat et messagerie en temps réel',
            'Algorithme avancé de matching de profils',
            'Gestion des offres d\'emploi et candidatures',
            'Outils de construction de réseau professionnel',
            'Créateur de CV et vitrine de portfolio'
          ],
          duration: '6 mois',
          role: 'Développeuse Full Stack'
        },
        {
          name: 'Autify',
          description: 'Plateforme de tests automatisés pour applications web avec IA',
          fullDescription: 'Autify révolutionne les tests d\'applications web avec l\'automatisation pilotée par l\'IA. Il identifie intelligemment les bugs potentiels, génère automatiquement des cas de test et fournit des insights actionnables.',
          technologies: ['TypeScript', 'React', 'Python', 'TensorFlow'],
          color: 'from-purple-500 to-pink-500',
          features: [
            'Génération de cas de test par IA',
            'Détection et rapport automatiques de bugs',
            'Tests de régression visuelle',
            'Surveillance et analyses de performance',
            'Intégration avec pipelines CI/CD'
          ],
          duration: '8 mois',
          role: 'Développeuse Principale'
        },
        {
          name: 'NovaTech',
          description: 'Plateforme e-commerce pour produits technologiques',
          fullDescription: 'NovaTech est une solution e-commerce moderne spécialement conçue pour les produits technologiques. Elle propose un filtrage avancé, un traitement sécurisé des paiements et une expérience utilisateur intuitive.',
          technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
          color: 'from-pink-500 to-rose-500',
          features: [
            'Filtrage et recherche avancés de produits',
            'Intégration de paiement sécurisée avec Stripe',
            'Système de gestion d\'inventaire',
            'Système d\'avis et notes clients',
            'Suivi de commandes et notifications'
          ],
          duration: '5 mois',
          role: 'Développeuse Frontend'
        },
        {
          name: 'RepasRes',
          description: 'Système de réservation de restaurants en temps réel',
          fullDescription: 'RepasRes simplifie les réservations de restaurants avec disponibilité des tables en temps réel, paiements intégrés et gestion fluide des réservations pour clients et restaurateurs.',
          technologies: ['React', 'Firebase', 'Google Maps API'],
          color: 'from-green-500 to-emerald-500',
          features: [
            'Suivi en temps réel de la disponibilité des tables',
            'Cartes interactives de localisation de restaurants',
            'Confirmations de réservation automatiques',
            'Aperçu du menu et offres spéciales',
            'Préférences et historique client'
          ],
          duration: '4 mois',
          role: 'Développeuse Full Stack'
        },
        {
          name: 'Magon Farm',
          description: 'Application de gestion agricole pour opérations fermières',
          fullDescription: 'Magon Farm est une application mobile complète conçue pour aider les agriculteurs à gérer efficacement leurs opérations agricoles. Elle inclut la surveillance des cultures, les prévisions météo et les outils de gestion des ressources.',
          technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps'],
          color: 'from-amber-500 to-orange-500',
          features: [
            'Surveillance de la santé des cultures et alertes',
            'Intégration des prévisions météorologiques',
            'Gestion des ressources et inventaire',
            'Cartographie des champs avec coordonnées GPS',
            'Planification et suivi des récoltes'
          ],
          duration: '7 mois',
          role: 'Développeuse Mobile'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <>
      <section id="projects" className="relative py-32 px-6 lg:pl-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent fade-in">
            {t.title}
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.map((project, index) => (
              <div
                key={index}
                className="group relative fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500"></div>

                  <div className="relative z-10">
                    <div className={`w-full h-48 mb-6 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <Code className="text-white/80 relative z-10" size={64} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>

                    <p className="text-white/70 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">{t.viewProject}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          language={language}
        />
      )}
    </>
  );
};

export default Projects;
