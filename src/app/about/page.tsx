'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Target, 
  Shield, 
  TrendingUp, 
  Heart,
  CheckCircle,
  Calendar,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const team = [
    {
      name: 'Dr. Sarah Müller',
      position: 'Geschäftsführerin & Senior Beraterin',
              experience: 'Preview - Beispiel Jahre',
      expertise: ['Investment Management', 'Vermögensverwaltung', 'Strategische Planung'],
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Michael Weber',
      position: 'Leiter Investment Management',
      experience: '12+ Jahre',
      expertise: ['Portfolio Management', 'Risikomanagement', 'Marktanalyse'],
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Lisa Schmidt',
      position: 'Senior Finanzberaterin',
      experience: '10+ Jahre',
      expertise: ['Finanzplanung', 'Altersvorsorge', 'Versicherungen'],
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Thomas Fischer',
      position: 'Leiter Unternehmensberatung',
      experience: '8+ Jahre',
      expertise: ['M&A', 'Unternehmensbewertung', 'Strukturplanung'],
      image: '/api/placeholder/200/200'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Vertrauen & Sicherheit',
      description: 'Wir setzen auf bewährte Strategien und transparente Kommunikation. Ihr Vermögen ist bei uns in sicheren Händen.'
    },
    {
      icon: Target,
      title: 'Maßgeschneiderte Lösungen',
      description: 'Jeder Kunde ist einzigartig. Wir entwickeln individuelle Strategien, die perfekt zu Ihren Zielen passen.'
    },
    {
      icon: TrendingUp,
      title: 'Nachhaltiger Erfolg',
      description: 'Langfristige Wertsteigerung durch intelligente Diversifikation und kontinuierliche Optimierung.'
    },
    {
      icon: Heart,
      title: 'Kundenzentrierung',
      description: 'Ihre Zufriedenheit steht an erster Stelle. Wir sind Ihr Partner für alle Finanzfragen.'
    }
  ];

  const milestones = [
    { year: '2009', title: 'Gründung', description: 'FinanzPortfolio wird in Berlin gegründet' },
    { year: '2012', title: 'Erste 100 Kunden', description: 'Wir erreichen unseren ersten Meilenstein' },
    { year: '2015', title: 'Expansion', description: 'Eröffnung weiterer Standorte in Deutschland' },
    { year: '2018', title: 'Digitalisierung', description: 'Einführung modernster Technologien' },
            { year: '2021', title: 'Preview - Beispiel Vermögen', description: 'Preview - Beispiel Meilenstein' },
            { year: '2024', title: 'Preview - Beispiel Kunden', description: 'Preview - Beispiel Beschreibung' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-emerald-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Über <span className="gradient-text">FinanzPortfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Seit über 15 Jahren sind wir Ihr vertrauensvoller Partner für alle Finanzfragen. 
              Wir kombinieren jahrelange Erfahrung mit modernster Technologie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Unsere Mission</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Wir helfen Menschen dabei, ihre finanziellen Ziele zu erreichen und ihre Zukunft abzusichern. 
                Preview - Beispiel Beschreibung für maßgeschneiderte Lösungen und Kundenbetreuung.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Unser Ziel ist es, Ihnen die bestmöglichen Finanzlösungen zu bieten, die zu Ihren individuellen 
                Bedürfnissen und Zielen passen. Wir glauben an langfristige Partnerschaften und transparente Kommunikation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Unsere Vision</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Führender Finanzpartner</h4>
                      <p className="text-gray-300">Wir streben danach, der vertrauensvollste Finanzpartner für Privatpersonen und Unternehmen zu werden.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Innovation & Wachstum</h4>
                      <p className="text-gray-300">Kontinuierliche Innovation und Wachstum, um unseren Kunden die besten Lösungen zu bieten.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Kundenzentrierung</h4>
                      <p className="text-gray-300">Ihre Zufriedenheit und Ihr Erfolg stehen im Mittelpunkt unseres Handelns.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Unsere Werte</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Diese Grundsätze leiten unser Handeln und prägen unsere Unternehmenskultur
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-8 rounded-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4" id="team">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Unser Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Erfahrene Experten, die Ihr Vertrauen verdienen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-2xl text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-2">{member.position}</p>
                <p className="text-gray-300 text-sm mb-4">{member.experience} Erfahrung</p>
                <div className="space-y-2">
                  {member.expertise.map((skill) => (
                    <div key={skill} className="text-sm text-gray-300">
                      • {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Unsere Geschichte</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Von der Gründung bis heute - eine Erfolgsgeschichte
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-emerald-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="glass-effect p-6 rounded-2xl">
                      <div className="text-2xl font-bold gradient-text mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center z-10">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Lassen Sie uns sprechen</h2>
            <p className="text-xl text-gray-300 mb-12">
              Wir freuen uns darauf, von Ihnen zu hören
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-gray-300 text-sm">Telefon</p>
                  <p className="text-white font-semibold">+49 (0) 30 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-gray-300 text-sm">E-Mail</p>
                  <p className="text-white font-semibold">info@finanzportfolio.de</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-gray-300 text-sm">Adresse</p>
                  <p className="text-white font-semibold">Berlin, Deutschland</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button-primary"
                >
                  Kontakt aufnehmen
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
  
}
