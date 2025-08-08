'use client';

import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Shield, 
  Target, 
  Users, 
  ArrowRight, 
  CheckCircle,
  DollarSign,
  PieChart,
  BarChart3,
  Award
} from 'lucide-react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Warum <span className="gradient-text">FinanzPortfolio</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Wir kombinieren jahrelange Erfahrung mit modernster Technologie, 
              um Ihnen die bestmöglichen Finanzlösungen zu bieten.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Sicherheit & Vertrauen',
                description: 'Ihr Vermögen ist bei uns in sicheren Händen. Wir setzen auf bewährte Strategien und transparente Kommunikation.',
                features: ['Sichere Anlagestrategien', 'Regelmäßige Berichte', 'Persönliche Betreuung']
              },
              {
                icon: Target,
                title: 'Maßgeschneiderte Lösungen',
                description: 'Jeder Kunde ist einzigartig. Wir entwickeln individuelle Strategien, die zu Ihren Zielen passen.',
                features: ['Persönliche Beratung', 'Flexible Anlagemöglichkeiten', 'Anpassbare Portfolios']
              },
              {
                icon: TrendingUp,
                title: 'Nachhaltiger Erfolg',
                description: 'Langfristige Wertsteigerung durch intelligente Diversifikation und kontinuierliche Optimierung.',
                features: ['Langfristige Strategien', 'Risikomanagement', 'Performance-Tracking']
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-effect p-8 rounded-2xl card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Unser <span className="gradient-text">Investment-Prozess</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ein strukturierter Ansatz für nachhaltigen Anlageerfolg
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Analyse',
                description: 'Wir analysieren Ihre aktuelle finanzielle Situation und definieren Ihre Ziele.',
                icon: BarChart3
              },
              {
                step: '02',
                title: 'Strategie',
                description: 'Basierend auf der Analyse entwickeln wir eine maßgeschneiderte Anlagestrategie.',
                icon: Target
              },
              {
                step: '03',
                title: 'Umsetzung',
                description: 'Wir setzen die Strategie professionell um und überwachen die Performance.',
                icon: PieChart
              },
              {
                step: '04',
                title: 'Optimierung',
                description: 'Regelmäßige Anpassungen und Optimierungen für langfristigen Erfolg.',
                icon: TrendingUp
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <process.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
