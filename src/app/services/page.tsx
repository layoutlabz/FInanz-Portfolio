'use client';

import { motion } from 'framer-motion';
import { 
  DollarSign, 
  PieChart, 
  Shield, 
  TrendingUp, 
  Users, 
  Calculator,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Target,
  Award,
  Clock
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 'investment',
      icon: DollarSign,
      title: 'Investment Management',
      subtitle: 'Professionelle Portfolioverwaltung',
      description: 'Wir verwalten Ihr Vermögen professionell und entwickeln maßgeschneiderte Anlagestrategien, die zu Ihren Zielen und Ihrer Risikotoleranz passen.',
      features: [
        'Individuelle Anlagestrategien',
        'Regelmäßige Portfolioüberprüfung',
        'Risikomanagement',
        'Diversifikation',
        'Performance-Tracking',
        'Steueroptimierung'
      ],
      process: [
        'Analyse Ihrer finanziellen Situation',
        'Definition Ihrer Anlageziele',
        'Entwicklung einer maßgeschneiderten Strategie',
        'Umsetzung und kontinuierliche Überwachung'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'wealth',
      icon: PieChart,
      title: 'Vermögensverwaltung',
      subtitle: 'Umfassende Betreuung Ihres Vermögens',
      description: 'Unsere Vermögensverwaltung bietet Ihnen eine vollständige Lösung für die Verwaltung Ihres Kapitals mit Fokus auf langfristige Wertsteigerung.',
      features: [
        'Vollständige Vermögensverwaltung',
        'Professionelle Anlageentscheidungen',
        'Kontinuierliche Überwachung',
        'Regelmäßige Berichterstattung',
        'Steuerliche Optimierung',
        'Nachfolgeplanung'
      ],
      process: [
        'Umfassende Vermögensanalyse',
        'Strategieentwicklung',
        'Implementierung',
        'Kontinuierliche Optimierung'
      ],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'planning',
      icon: Shield,
      title: 'Finanzplanung',
      subtitle: 'Strategische Planung für Ihre Zukunft',
      description: 'Wir entwickeln umfassende Finanzpläne, die alle Aspekte Ihres finanziellen Lebens berücksichtigen und Ihnen Sicherheit für die Zukunft geben.',
      features: [
        'Altersvorsorgeplanung',
        'Versicherungsplanung',
        'Steuerplanung',
        'Nachfolgeplanung',
        'Immobilienplanung',
        'Bildungsfinanzierung'
      ],
      process: [
        'Analyse Ihrer aktuellen Situation',
        'Definition Ihrer Lebensziele',
        'Entwicklung eines Finanzplans',
        'Regelmäßige Anpassung'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'retirement',
      icon: TrendingUp,
      title: 'Rentenplanung',
      subtitle: 'Sichern Sie Ihre finanzielle Unabhängigkeit',
      description: 'Wir helfen Ihnen dabei, Ihre finanzielle Unabhängigkeit im Ruhestand zu sichern und die bestmögliche Altersvorsorge aufzubauen.',
      features: [
        'Riester-Rente',
        'Rürup-Rente',
        'Betriebliche Altersvorsorge',
        'Private Vorsorge',
        'Rentenoptimierung',
        'Auszahlungsplanung'
      ],
      process: [
        'Analyse Ihrer Vorsorgesituation',
        'Berechnung Ihres Vorsorgebedarfs',
        'Auswahl der optimalen Produkte',
        'Kontinuierliche Anpassung'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'corporate',
      icon: Users,
      title: 'Unternehmensberatung',
      subtitle: 'Spezialisierte Beratung für Unternehmen',
      description: 'Wir unterstützen Unternehmen und Geschäftsführer bei allen finanziellen Fragestellungen und der optimalen Aufstellung ihres Unternehmens.',
      features: [
        'Unternehmensbewertung',
        'M&A-Beratung',
        'Finanzierungsberatung',
        'Strukturplanung',
        'Nachfolgeplanung',
        'Steueroptimierung'
      ],
      process: [
        'Analyse der Unternehmenssituation',
        'Identifikation von Optimierungspotentialen',
        'Entwicklung von Lösungsansätzen',
        'Umsetzung und Begleitung'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'calculators',
      icon: Calculator,
      title: 'Finanzrechner',
      subtitle: 'Tools für Ihre Finanzplanung',
      description: 'Nutzen Sie unsere professionellen Finanzrechner und Tools, um Ihre Finanzplanung zu optimieren und fundierte Entscheidungen zu treffen.',
      features: [
        'Sparrechner',
        'Rentabilitätsrechner',
        'Risikoanalyse',
        'Portfolio-Optimierung',
        'Rentenrechner',
        'Kreditrechner'
      ],
      process: [
        'Eingabe Ihrer Daten',
        'Automatische Berechnung',
        'Detaillierte Auswertung',
        'Handlungsempfehlungen'
      ],
      color: 'from-green-500 to-emerald-500'
    }
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
              Unsere <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Entdecken Sie unser umfassendes Angebot an Finanzdienstleistungen, 
              maßgeschneidert für Ihre individuellen Bedürfnisse und Ziele.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="scroll-mt-20"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                    <h3 className="text-xl text-blue-400 mb-6">{service.subtitle}</h3>
                    
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4 flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                          Leistungen
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="text-gray-300 flex items-center">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-4 flex items-center">
                          <Target className="w-5 h-5 text-blue-400 mr-2" />
                          Unser Prozess
                        </h4>
                        <ul className="space-y-2">
                          {service.process.map((step, stepIndex) => (
                            <li key={step} className="text-gray-300 flex items-center">
                              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 text-xs font-bold">
                                {stepIndex + 1}
                              </div>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="button-primary flex items-center space-x-2"
                      >
                        <span>Beratung anfordern</span>
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className={`glass-effect p-8 rounded-2xl h-full flex items-center justify-center`}>
                      <div className="text-center">
                        <div className={`w-32 h-32 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-8`}>
                          <service.icon className="w-16 h-16 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-gray-300">{service.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Lassen Sie uns gemeinsam Ihre finanziellen Ziele erreichen. 
              Vereinbaren Sie ein kostenloses Beratungsgespräch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button-primary"
                >
                  Beratung vereinbaren
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button-secondary"
                >
                  Portfolio ansehen
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
