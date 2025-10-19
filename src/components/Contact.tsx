import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'fr';
}

const Contact = ({ language }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const content = {
    en: {
      title: "Let's Stay in Touch",
      subtitle: "Have a project in mind? Let's work together!",
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Your Message',
      sendButton: 'Send Message',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location'
    },
    fr: {
      title: "Restons en Contact",
      subtitle: "Un projet en tête ? Travaillons ensemble !",
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Votre Email',
      messagePlaceholder: 'Votre Message',
      sendButton: 'Envoyer',
      emailLabel: 'Email',
      phoneLabel: 'Téléphone',
      locationLabel: 'Localisation'
    }
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-32 px-6 lg:pl-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent fade-in">
          {t.title}
        </h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full mb-4"></div>
        <p className="text-center text-white/70 text-lg mb-16 fade-in">{t.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 fade-in">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white/60 text-sm mb-1">{t.emailLabel}</h3>
                  <p className="text-white font-medium">eya.naffeti01@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white/60 text-sm mb-1">{t.phoneLabel}</h3>
                  <p className="text-white font-medium">+216 29 160 766</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white/60 text-sm mb-1">{t.locationLabel}</h3>
                  <p className="text-white font-medium">Manouba, Tunisia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in">
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.namePlaceholder}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.emailPlaceholder}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 transition-colors"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  rows={6}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="group w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                {t.sendButton}
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
