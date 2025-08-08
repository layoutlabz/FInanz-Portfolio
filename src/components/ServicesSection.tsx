"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { 
  TrendingUp, 
  Shield, 
  PieChart, 
  Building2, 
  Users, 
  Target,
  ArrowRight,
  Star,
  Zap,
  CheckCircle
} from "lucide-react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: TrendingUp,
      title: "Vermögensverwaltung",
      description: "Professionelle Verwaltung Ihres Vermögens mit maßgeschneiderten Strategien für optimale Renditen.",
      features: ["Diversifizierte Portfolios", "Regelmäßige Rebalancing", "Risikomanagement", "Performance-Tracking"],
      color: "from-emerald-400 to-teal-500",
      bgColor: "from-emerald-500/10 to-teal-600/10",
      popular: false
    },
    {
      icon: Shield,
      title: "Rentenplanung",
      description: "Sichern Sie Ihre finanzielle Zukunft mit intelligenten Rentenstrategien und Altersvorsorge.",
      features: ["Riester-Rente", "Rürup-Rente", "Betriebliche Altersvorsorge", "Private Vorsorge"],
      color: "from-blue-400 to-indigo-500",
      bgColor: "from-blue-500/10 to-indigo-600/10",
      popular: true
    },
    {
      icon: PieChart,
      title: "Investmentberatung",
      description: "Strategische Beratung für Ihre Investments mit Fokus auf langfristigen Erfolg.",
      features: ["Aktien & ETFs", "Anleihen", "Immobilien", "Alternative Investments"],
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-600/10",
      popular: false
    },
    {
      icon: Building2,
      title: "Unternehmensfinanzierung",
      description: "Unterstützung bei der Finanzierung Ihres Unternehmens und Wachstumsstrategien.",
      features: ["Kreditberatung", "Kapitalbeschaffung", "M&A Beratung", "Strukturierung"],
      color: "from-amber-400 to-orange-500",
      bgColor: "from-amber-500/10 to-orange-600/10",
      popular: false
    },
    {
      icon: Users,
      title: "Familienvermögen",
      description: "Ganzheitliche Beratung für Familienvermögen und Nachfolgeplanung.",
      features: ["Vermögensstrukturierung", "Nachfolgeplanung", "Steueroptimierung", "Philanthropie"],
      color: "from-rose-400 to-red-500",
      bgColor: "from-rose-500/10 to-red-600/10",
      popular: false
    },
    {
      icon: Target,
      title: "Strategische Beratung",
      description: "Umfassende Finanzstrategien für komplexe Vermögenssituationen und Ziele.",
      features: ["Finanzplanung", "Risikoanalyse", "Portfolio-Optimierung", "Regelmäßige Reviews"],
      color: "from-cyan-400 to-blue-500",
      bgColor: "from-cyan-500/10 to-blue-600/10",
      popular: false
    }
  ];

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-50"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 glass-effect-subtle px-6 py-3 rounded-full mb-6"
          >
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-gray-300">Unsere Dienstleistungen</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">Maßgeschneiderte</span>
            <br />
            <span className="text-white">Finanzlösungen</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Entdecken Sie unsere umfassenden Finanzdienstleistungen, die auf Ihre individuellen 
            Bedürfnisse und Ziele zugeschnitten sind.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative group ${service.popular ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index + 0.3 }}
                  className="absolute -top-4 -right-4 z-10"
                >
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-glow-gold">
                    <Star className="w-4 h-4" />
                    <span>Beliebt</span>
                  </div>
                </motion.div>
              )}

              <div className={`glass-effect-strong p-8 rounded-3xl h-full group-hover:shadow-glow transition-all duration-500 ${service.popular ? 'lg:p-10' : ''}`}>
                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Content */}
                <div className="space-y-4">
                  <h3 className={`font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 ${service.popular ? 'text-2xl' : 'text-xl'}`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-gray-300 leading-relaxed ${service.popular ? 'text-lg' : 'text-base'}`}>
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 pt-4">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.1 * index + 0.1 * featureIndex + 0.5 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index + 0.8 }}
                    className="pt-6"
                  >
                    <Link href="/services">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="button-outline w-full group"
                      >
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="glass-effect-strong p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Bereit für den nächsten Schritt?
            </h3>
            <p className="text-gray-300 mb-6">
              Lassen Sie uns gemeinsam Ihre finanzielle Zukunft gestalten. 
              Vereinbaren Sie ein kostenloses Beratungsgespräch.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="button-primary text-lg px-8 py-4 group"
              >
                Beratung anfragen
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
