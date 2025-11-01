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
  role: string;
  challenge: string;
  solution: string;
  image?: string;
  gallery?: string[]; 
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
          name: 'Merx',
          description: 'Peer-to-peer marketplace mobile application',
          fullDescription: 'Merx is an innovative mobile marketplace application that transforms digital exchanges between individuals in Tunisia. It combines cutting-edge technology with user-centric design to create a seamless trading experience.',
          challenge: 'Create a comprehensive P2P marketplace platform that addresses gaps in existing solutions like Tayara and Facebook Marketplace.',
          solution: 'Development of a mobile application with AI-powered features, microservices architecture, and integrated messaging system.',
          technologies: ['React Native', 'Spring Boot', 'PostgreSQL', 'Firebase', 'FastAPI', 'Docker'],
          color: 'from-indigo-500 to-purple-500',
          image: '/assets/merx.png',
          gallery: [
            '/assets/merx/a1.png ',
            '/assets/merx/a2.png',
            '/assets/merx/a3.png',
            '/assets/merx/a4.png',
            '/assets/merx/b2.png',
            '/assets/merx/b5.png',
            '/assets/merx/b6.png',
            '/assets/merx/b7.png',
            '/assets/merx/c2.jpeg',
            '/assets/merx/d2.jpeg',
            '/assets/merx/d4.jpeg',
            '/assets/merx/d5.jpeg',
            '/assets/merx/d6.jpeg',
            '/assets/merx/d7.jpeg',
            '/assets/merx/d8.jpeg',


          ],
          features: [
            'AI-powered visual search: Search products using images with intelligent recognition',
            'Smart recommendations: ML-driven personalized product suggestions based on browsing history',
            'Integrated messaging: Real-time chat between buyers and sellers',
            'Push notifications: Firebase FCM for order updates and new listings',
            'Multi-channel alerts: Email and SMS notifications for critical updates',
            'Secure payments: Stripe integration with transaction history',
            'Order tracking: Real-time status updates from listing to delivery',
            'Product management: Complete CRUD operations for listings',
            'Review system: 5-star ratings with moderation and reporting',
            'JWT authentication: Secure session management with token-based auth',
            'Advanced filters: Multi-parameter filtering by price, location, rating',
            'Trending products: AI-identified popular items and price drops',
            'Microservices architecture: Scalable Spring Boot backend with independent services',
            'Image optimization: Cloudinary integration for fast image delivery',
            'Cross-platform: React Native for iOS and Android',
            'Containerized deployment: Docker for consistent environments',
            'Admin dashboard: User management, product approval, and analytics',
            'Report handling: Automated moderation and dispute resolution',
          ],
          role: 'Software Developer'
        },
        {
          name: 'ProConnect',
          description: 'Freelance platform connecting freelancers and clients',
          fullDescription: 'ProConnect is a modern freelance platform designed to connect freelancers with clients while ensuring secure transactions and seamless project management.',
          challenge: 'Create an intuitive platform connecting freelancers and clients while ensuring secure transactions.',
          solution: 'Development of a modern user interface with an intelligent matching system and secure payment system.',
          technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
          color: 'from-blue-500 to-cyan-500',
          image: '/assets/proconnect.png',
          gallery: [
            '/assets/proconnect/c0.png',
            '/assets/proconnect/cc1.png',
            '/assets/proconnect/cc2.png',
            '/assets/proconnect/cc3.png',
            '/assets/proconnect/cc4.png',
            '/assets/proconnect/cc5.png',
            '/assets/proconnect/cc6.png',
            '/assets/proconnect/cc7.png',
          ],
          features: [
            'User management system with detailed profiles for Freelancers and Clients',
            'Advanced search with filters by skills, location, and hourly rate',
            'Project posting and offer management',
            'Ratings and reviews after project completion',
          ],
          role: 'Full Stack Developer'
        },
        {
          name: 'Autify',
          description: 'Insurance mobile app for car insurance management',
          fullDescription: 'Autify is an intuitive mobile application that simplifies car insurance contract management and claims tracking for users on the go.',
          challenge: 'Simplify car insurance contract management and claims tracking for mobile users.',
          solution: 'Intuitive mobile application allowing complete contract management and real-time claims tracking.',
          technologies: ['Dart', 'Flutter', 'Java', 'Spring Boot', 'MySQL'],
          color: 'from-purple-500 to-pink-500',
          image: '/assets/autify.png',
          gallery: [
            '/assets/autify/assurance.png',
            '/assets/autify/a2.png',
            '/assets/autify/a3.png',
            '/assets/autify/a4.png',
            '/assets/autify/a5.png',

          ],
          features: [
            'Member management: Create and manage member profiles with registration and personal information',
            'Member history and tracking: Display of past and ongoing requests',
            'Claim management: Interface for users to create claims',
            'Request status tracking: Real-time tracking with automatic updates',
            'Vehicle condition tracking: Simulate vehicle condition and cost estimation',
            'Replacement car management: Manage replacement vehicle requests',
            'Reimbursements: Submit and track reimbursement requests'
          ],
          role: 'Mobile Developer'
        },
        {
          name: 'NovaTech',
          description: 'HR Dashboard for human resources management',
          fullDescription: 'NovaTech is a modern and intuitive HR management dashboard that centralizes human resources operations and streamlines administrative processes.',
          challenge: 'Create a centralized tool for human resources management.',
          solution: 'Development of a modern and intuitive dashboard with advanced HR management features.',
          technologies: ['Angular', 'Spring Boot', 'MySQL'],
          color: 'from-pink-500 to-rose-500',
          image: '/assets/novatechimg.png',
          gallery: [
            '/assets/novatech/n1.png',
            '/assets/novatech-2.png',
            '/assets/novatech-3.png'
          ],
          features: [
            'Administrator access: Add, edit, and delete departments and employees',
            'Request management: Process and validate requests with automatic document generation',
            'Administrative documents: Generate work certificates, insurance confirmations, and salary advances',
            'Request list: Display new requests with filtering options',
            'Employee access: Update passwords and download validated documents',
            'Leave request: Automatic balance calculation with restrictions',
            'Payslip request: Limited to once per month',
            'Salary advance request: Up to 1000 DT once per month'
          ],
          role: 'Full Stack Developer'
        },
        {
          name: 'RepasRes',
          description: 'Food management app to reduce food waste',
          fullDescription: 'RepasRes is a mobile application designed to reduce food waste by facilitating the sharing and management of food surplus between restaurants, supermarkets, and consumers.',
          challenge: 'Reduce food waste by facilitating surplus sharing.',
          solution: 'Mobile application allowing easy management and sharing of food surplus.',
          technologies: ['Dart', 'Flutter'],
          color: 'from-green-500 to-emerald-500',
          image: '/assets/repares.jpg',
          gallery: [
            '/assets/repares/r1.jpg',
            '/assets/repares/r2.jpg',
            '/assets/repares/r3.jpg',
            '/assets/repares/r4.jpg',
            '/assets/repares/r5.jpg',
          

          ],
          features: [
            'User management: Profiles for restaurants, supermarkets, consumers, and waste managers',
            'Low-cost meal sales: Platform to sell prepared meals using soon-to-expire products',
            'Discounted products: Sale of discounted food items before expiration',
            'Waste posting: Users can post their food waste for collection',
            'Waste reduction encouragement: Promote eco-friendly practices to reduce food waste'
          ],
          role: 'Mobile Developer'
        },
        {
          name: 'Magon Farm',
          description: 'Cattle management application for farming operations',
          fullDescription: 'Magon Farm is a comprehensive mobile and web application designed to enhance cattle farming management, ensure regulatory compliance, and automate tasks through centralized data management.',
          challenge: 'Enhance cattle farming management, ensure regulatory compliance, and automate tasks.',
          solution: 'A mobile and web application that centralizes cattle management, integrates data analysis, and facilitates collaboration.',
          technologies: ['Dart', 'Flutter'],
          color: 'from-amber-500 to-orange-500',
          image: '/assets/magon.png',
          gallery: [
            '/assets/magon/1.png',
            '/assets/magon/2.png',
            '/assets/magon/3.png',
            '/assets/magon/4.png',
            '/assets/magon/5.png',
            '/assets/magon/6.png',
            '/assets/magon/8.png',
            '/assets/magon/9.png',
            '/assets/magon/10.png',
            '/assets/magon/11.png',
            '/assets/magon/12.png',
            
          ],
          features: [
            'User management: Multi-level access control (Administrator, Owner, and Associate)',
            'Cattle tracking: Real-time traceability and monitoring',
            'Task automation: Eliminate paper-based processes to optimize production',
            'Quality control: Implementation of rigorous standards for compliance',
            'Data centralization: Integrated storage with real-time synchronization',
            'Performance analysis: Automated reports and charts for decision-making',
            'Real-time notifications: Instant alerts for updates and key events',
            'Messaging system: Real-time chat for collaboration',
            'Publication system: Share updates and news with users',
            'Resource management: Add and access feed and medication information'
          ],
          role: 'Mobile Developer'
        }
      ]
    },
    fr: {
      title: 'Projets Phares',
      viewProject: 'Voir Projet',
      projects: [
        {
          name: 'Merx',
          description: 'Application mobile de marketplace peer-to-peer',
          fullDescription: 'Merx est une application mobile innovante de marketplace qui transforme les échanges digitaux entre particuliers en Tunisie. Elle combine technologie de pointe et design centré sur l\'utilisateur pour créer une expérience d\'échange fluide.',
          challenge: 'Créer une plateforme marketplace P2P complète qui comble les lacunes des solutions existantes comme Tayara et Facebook Marketplace.',
          solution: 'Développement d\'une application mobile avec fonctionnalités IA, architecture microservices et système de messagerie intégré.',
          technologies: ['React Native', 'Spring Boot', 'PostgreSQL', 'Firebase', 'FastAPI', 'Docker'],
          color: 'from-indigo-500 to-purple-500',
          image: '/assets/merx.png',
          gallery: [
        '/assets/merx/a1.png ',
            '/assets/merx/a2.png',
            '/assets/merx/a3.png',
            '/assets/merx/a4.png',
            '/assets/merx/b2.png',
            '/assets/merx/b5.png',
            '/assets/merx/b6.png',
            '/assets/merx/b7.png',
            '/assets/merx/c2.jpeg',
            '/assets/merx/d2.jpeg',
            '/assets/merx/d4.jpeg',
            '/assets/merx/d5.jpeg',
            '/assets/merx/d6.jpeg',
            '/assets/merx/d7.jpeg',
            '/assets/merx/d8.jpeg',
          
          ],
          features: [
            'Recherche visuelle IA : Rechercher des produits via images avec reconnaissance intelligente',
            'Recommandations intelligentes : Suggestions personnalisées basées sur l\'historique de navigation',
            'Messagerie intégrée : Chat en temps réel entre acheteurs et vendeurs',
            'Notifications push : Firebase FCM pour mises à jour de commandes et nouvelles annonces',
            'Alertes multi-canaux : Notifications email et SMS pour mises à jour critiques',
            'Paiements sécurisés : Intégration Stripe avec historique des transactions',
            'Suivi de commande : Mises à jour en temps réel de l\'annonce à la livraison',
            'Gestion de produits : Opérations CRUD complètes pour les annonces',
            'Système d\'évaluation : Notes 5 étoiles avec modération et signalement',
            'Authentification JWT : Gestion de session sécurisée avec authentification par token',
            'Filtres avancés : Filtrage multi-paramètres par prix, localisation, note',
            'Produits tendances : Articles populaires et baisses de prix identifiés par IA',
            'Architecture microservices : Backend Spring Boot scalable avec services indépendants',
            'Optimisation d\'images : Intégration Cloudinary pour livraison rapide des images',
            'Cross-platform : React Native pour iOS et Android',
            'Déploiement conteneurisé : Docker pour environnements cohérents',
            'Tableau de bord admin : Gestion utilisateurs, approbation produits et analytics',
            'Gestion des signalements : Modération automatisée et résolution des litiges',
          ],
          role: 'Développeuse Logiciel'
        },
        {
          name: 'ProConnect',
          description: 'Plateforme freelance connectant freelancers et clients',
          fullDescription: 'ProConnect est une plateforme freelance moderne conçue pour connecter les freelancers avec les clients tout en assurant des transactions sécurisées et une gestion de projet fluide.',
          challenge: 'Créer une plateforme intuitive connectant freelancers et clients tout en assurant des transactions sécurisées.',
          solution: 'Développement d\'une interface moderne avec un système de matching intelligent et un système de paiement sécurisé.',
          technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
          color: 'from-blue-500 to-cyan-500',
          image: '/assets/proconnect.png',
          gallery: [
            '/assets/proconnect/c0.png',
            '/assets/proconnect/cc1.png',
            '/assets/proconnect/cc2.png',
            '/assets/proconnect/cc3.png',
            '/assets/proconnect/cc4.png',
            '/assets/proconnect/cc5.png',
            '/assets/proconnect/cc6.png',
            '/assets/proconnect/cc7.png',
          ],
          features: [
            'Système de gestion d\'utilisateurs avec profils détaillés pour Freelancers et Clients',
            'Recherche avancée avec filtres par compétences, localisation et taux horaire',
            'Publication de projets et gestion des offres',
            'Notes et avis après finalisation des projets',
          ],
          role: 'Développeuse Full Stack'
        },
        {
          name: 'Autify',
          description: 'Application mobile d\'assurance pour gestion automobile',
          fullDescription: 'Autify est une application mobile intuitive qui simplifie la gestion des contrats d\'assurance automobile et le suivi des sinistres pour les utilisateurs mobiles.',
          challenge: 'Simplifier la gestion des contrats d\'assurance automobile et le suivi des sinistres pour utilisateurs mobiles.',
          solution: 'Application mobile intuitive permettant une gestion complète des contrats et un suivi des sinistres en temps réel.',
          technologies: ['Dart', 'Flutter', 'Java', 'Spring Boot', 'MySQL'],
          color: 'from-purple-500 to-pink-500',
          image: '/assets/autify.png',
          gallery: [
            '/assets/autify/assurance.png',
            '/assets/autify/a2.png',
            '/assets/autify/a3.png',
            '/assets/autify/a4.png',
            '/assets/autify/a5.png',
          ],
          features: [
            'Gestion des membres : Créer et gérer les profils avec inscription et informations personnelles',
            'Historique et suivi des membres : Affichage des demandes passées et en cours',
            'Gestion des sinistres : Interface pour créer des réclamations',
            'Suivi du statut des demandes : Suivi en temps réel avec mises à jour automatiques',
            'Suivi de l\'état du véhicule : Simuler l\'état du véhicule et estimation des coûts',
            'Gestion des véhicules de remplacement : Gérer les demandes de véhicules',
            'Remboursements : Soumettre et suivre les demandes de remboursement'
          ],
          role: 'Développeuse Mobile'
        },
        {
          name: 'NovaTech',
          description: 'Tableau de bord RH pour gestion des ressources humaines',
          fullDescription: 'NovaTech est un tableau de bord RH moderne et intuitif qui centralise les opérations de ressources humaines et rationalise les processus administratifs.',
          challenge: 'Créer un outil centralisé pour la gestion des ressources humaines.',
          solution: 'Développement d\'un tableau de bord moderne et intuitif avec fonctionnalités RH avancées.',
          technologies: ['Angular', 'Spring Boot', 'MySQL'],
          color: 'from-pink-500 to-rose-500',
          image: '/assets/novatechimg.png',
          gallery: [
            '/assets/novatech/n1.png',
            '/assets/novatech-2.png',
            '/assets/novatech-3.png'
          ],
          features: [
            'Accès administrateur : Ajouter, modifier et supprimer départements et employés',
            'Gestion des demandes : Traiter et valider les demandes avec génération automatique de documents',
            'Documents administratifs : Générer certificats de travail, confirmations d\'assurance et avances sur salaire',
            'Liste des demandes : Afficher les nouvelles demandes avec options de filtrage',
            'Accès employé : Mettre à jour mots de passe et télécharger documents validés',
            'Demande de congé : Calcul automatique du solde avec restrictions',
            'Demande de fiche de paie : Limitée à une fois par mois',
            'Demande d\'avance sur salaire : Jusqu\'à 1000 DT une fois par mois'
          ],
          role: 'Développeuse Full Stack'
        },
        {
          name: 'RepasRes',
          description: 'Application de gestion alimentaire pour réduire le gaspillage',
          fullDescription: 'RepasRes est une application mobile conçue pour réduire le gaspillage alimentaire en facilitant le partage et la gestion des surplus alimentaires entre restaurants, supermarchés et consommateurs.',
          challenge: 'Réduire le gaspillage alimentaire en facilitant le partage des surplus.',
          solution: 'Application mobile permettant une gestion et un partage faciles des surplus alimentaires.',
          technologies: ['Dart', 'Flutter'],
          color: 'from-green-500 to-emerald-500',
          image: '/assets/repares.jpg',
          gallery: [
            '/assets/repares/r1.jpg',
            '/assets/repares/r2.jpg',
            '/assets/repares/r3.jpg',
            '/assets/repares/r4.jpg',
            '/assets/repares/r5.jpg',
          ],
          features: [
            'Gestion des utilisateurs : Profils pour restaurants, supermarchés, consommateurs et gestionnaires de déchets',
            'Vente de repas à bas prix : Plateforme pour vendre repas préparés avec produits bientôt périmés',
            'Produits à prix réduit : Vente d\'articles alimentaires réduits avant expiration',
            'Publication de déchets : Les utilisateurs peuvent publier leurs déchets alimentaires pour collecte',
            'Encouragement à la réduction des déchets : Promouvoir pratiques écologiques'
          ],
          role: 'Développeuse Mobile'
        },
        {
          name: 'Magon Farm',
          description: 'Application de gestion de bétail pour opérations fermières',
          fullDescription: 'Magon Farm est une application mobile et web complète conçue pour améliorer la gestion de l\'élevage de bétail, assurer la conformité réglementaire et automatiser les tâches via une gestion centralisée des données.',
          challenge: 'Améliorer la gestion de l\'élevage de bétail, assurer la conformité réglementaire et automatiser les tâches.',
          solution: 'Application mobile et web qui centralise la gestion du bétail, intègre l\'analyse de données et facilite la collaboration.',
          technologies: ['Dart', 'Flutter'],
          color: 'from-amber-500 to-orange-500',
          image: '/assets/magon.png',
          gallery: [
            '/assets/magon/1.png',
            '/assets/magon/2.png',
            '/assets/magon/3.png',
            '/assets/magon/4.png',
            '/assets/magon/5.png',
            '/assets/magon/6.png',
            '/assets/magon/8.png',
            '/assets/magon/9.png',
            '/assets/magon/10.png',
            '/assets/magon/11.png',
            '/assets/magon/12.png',
          ],
          features: [
            'Gestion des utilisateurs : Contrôle d\'accès multi-niveaux (Administrateur, Propriétaire et Associé)',
            'Suivi du bétail : Traçabilité et surveillance en temps réel',
            'Automatisation des tâches : Éliminer les processus papier pour optimiser la production',
            'Contrôle qualité : Mise en œuvre de normes rigoureuses pour conformité',
            'Centralisation des données : Stockage intégré avec synchronisation en temps réel',
            'Analyse des performances : Rapports et graphiques automatisés pour prise de décision',
            'Notifications en temps réel : Alertes instantanées pour mises à jour et événements clés',
            'Système de messagerie : Chat en temps réel pour collaboration',
            'Système de publication : Partager mises à jour et nouvelles avec utilisateurs',
            'Gestion des ressources : Ajouter et accéder aux informations sur alimentation et médicaments'
          ],
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
                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-purple-100/50 to-pink-100/50 dark:from-purple-500/10 dark:to-pink-500/10 backdrop-blur-sm border border-gray-300 dark:border-white/10 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/20">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 dark:from-purple-500/0 dark:to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 dark:group-hover:from-purple-500/5 dark:group-hover:to-pink-500/5 transition-all duration-500"></div>

                  <div className="relative z-10">
                    <div className={`w-full h-48 mb-6 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-black/20"></div>
                          <Code className="text-white/80 relative z-10" size={64} />
                        </>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.name}</h3>

                    <p className="text-gray-700 dark:text-white/70 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-400/40 dark:border-purple-500/30 text-purple-700 dark:text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
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