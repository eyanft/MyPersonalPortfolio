import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Volunteer from './components/Volunteer';
import Languages from './components/Languages';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingShapes from './components/FloatingShapes';
import InteractiveBackground from './components/InteractiveBackground';
import Navigation from './components/Navigation';

function App() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-[#0a0a1a] min-h-screen overflow-hidden">
      <InteractiveBackground />
      <FloatingShapes />
      <Navigation language={language} toggleLanguage={toggleLanguage} />

      <Hero language={language} />
      <About language={language} />
      <Experience language={language} />
      <Projects language={language} />
      <Skills language={language} />
      <Volunteer language={language} />
      <Languages language={language} />
      <Certifications language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
