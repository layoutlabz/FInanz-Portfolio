'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  TrendingUp, 
  PieChart, 
  BarChart3, 
  DollarSign,
  ArrowUp,
  ArrowDown,
  Target,
  Shield,
  Zap,
  Calendar,
  Award,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

export default function PortfolioPage() {
  const [selectedStrategy, setSelectedStrategy] = useState('balanced');

  const strategies = [
    {
      id: 'conservative',
      name: 'Konservativ',
      description: 'Fokus auf Sicherheit und stabile Erträge',
      return: '4.2%',
      risk: 'Niedrig',
      color: 'from-green-500 to-emerald-500',
      allocation: {
        'Aktien': 20,
        'Anleihen': 60,
        'Immobilien': 15,
        'Rohstoffe': 5
      },
      features: ['Geringes Risiko', 'Stabile Erträge', 'Konservative Anlage']
    },
    {
      id: 'balanced',
      name: 'Ausgewogen',
      description: 'Gleichgewicht zwischen Sicherheit und Wachstum',
      return: '6.8%',
      risk: 'Mittel',
      color: 'from-blue-500 to-cyan-500',
      allocation: {
        'Aktien': 50,
        'Anleihen': 35,
        'Immobilien': 10,
        'Rohstoffe': 5
      },
      features: ['Ausgewogenes Risiko', 'Moderate Erträge', 'Langfristige Anlage']
    },
    {
      id: 'aggressive',
      name: 'Dynamisch',
      description: 'Fokus auf Wachstum und höhere Erträge',
      return: '9.1%',
      risk: 'Hoch',
      color: 'from-purple-500 to-pink-500',
      allocation: {
        'Aktien': 80,
        'Anleihen': 10,
        'Immobilien': 5,
        'Rohstoffe': 5
      },
      features: ['Höheres Risiko', 'Potenzielle Höhererträge', 'Wachstumsorientiert']
    }
  ];

  const performanceData = [
    { year: '2019', conservative: 4.1, balanced: 6.5, aggressive: 8.9 },
    { year: '2020', conservative: 3.8, balanced: 5.2, aggressive: 7.1 },
    { year: '2021', conservative: 4.5, balanced: 7.8, aggressive: 12.3 },
    { year: '2022', conservative: 3.9, balanced: 4.1, aggressive: -2.1 },
    { year: '2023', conservative: 4.8, balanced: 8.2, aggressive: 15.7 },
    { year: '2024', conservative: 4.2, balanced: 6.8, aggressive: 9.1 }
  ];

  const currentStrategy = strategies.find(s => s.id === selectedStrategy);

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
              Unser <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Entdecken Sie unsere bewährten Anlagestrategien und deren Performance. 
              Jede Strategie ist maßgeschneidert für unterschiedliche Risikoprofile und Anlageziele.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategy Selection */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Wählen Sie Ihre Strategie</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Jede Strategie ist auf unterschiedliche Anlageziele und Risikotoleranzen abgestimmt
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {strategies.map((strategy, index) => (
              <motion.div
                key={strategy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedStrategy(strategy.id)}
                className={`glass-effect p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  selectedStrategy === strategy.id 
                    ? 'ring-2 ring-blue-500 bg-white/20' 
                    : 'hover:bg-white/10'
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${strategy.color} rounded-xl flex items-center justify-center mb-4`}>
                  {strategy.id === 'conservative' && <Shield className="w-8 h-8 text-white" />}
                  {strategy.id === 'balanced' && <Target className="w-8 h-8 text-white" />}
                  {strategy.id === 'aggressive' && <Zap className="w-8 h-8 text-white" />}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{strategy.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{strategy.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Rendite</p>
                    <p className="text-2xl font-bold gradient-text">{strategy.return}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Risiko</p>
                    <p className="text-lg font-semibold">{strategy.risk}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {strategy.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Selected Strategy Details */}
          {currentStrategy && (
            <motion.div
              key={selectedStrategy}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-effect p-8 rounded-2xl mb-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Allocation Chart */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Asset Allocation</h3>
                  <div className="space-y-4">
                    {Object.entries(currentStrategy.allocation).map(([asset, percentage]) => (
                      <div key={asset} className="flex items-center justify-between">
                        <span className="text-gray-300">{asset}</span>
                        <div className="flex items-center space-x-4">
                          <div className="w-32 bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full bg-gradient-to-r ${currentStrategy.color}`}
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-white font-semibold w-12 text-right">{percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strategy Info */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Strategie Details</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Erwartete Rendite:</span>
                      <span className="text-2xl font-bold gradient-text">{currentStrategy.return}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Risikoprofil:</span>
                      <span className="text-lg font-semibold">{currentStrategy.risk}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Anlagehorizont:</span>
                      <span className="text-lg font-semibold">5-10 Jahre</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Mindestanlage:</span>
                      <span className="text-lg font-semibold">€10.000</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Performance Chart */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Historische Performance</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Vergangene Performance ist kein Indikator für zukünftige Ergebnisse
            </p>
          </motion.div>

          <div className="glass-effect p-8 rounded-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-4 text-gray-300">Jahr</th>
                    <th className="text-center py-4 px-4 text-gray-300">Konservativ</th>
                    <th className="text-center py-4 px-4 text-gray-300">Ausgewogen</th>
                    <th className="text-center py-4 px-4 text-gray-300">Dynamisch</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceData.map((data, index) => (
                    <motion.tr
                      key={data.year}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="border-b border-white/10"
                    >
                      <td className="py-4 px-4 font-semibold">{data.year}</td>
                      <td className="py-4 px-4 text-center">
                        <span className={`flex items-center justify-center ${data.conservative >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {data.conservative >= 0 ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                          {data.conservative}%
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className={`flex items-center justify-center ${data.balanced >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {data.balanced >= 0 ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                          {data.balanced}%
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className={`flex items-center justify-center ${data.aggressive >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {data.aggressive >= 0 ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                          {data.aggressive}%
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Bereit zu investieren?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Lassen Sie uns gemeinsam die beste Strategie für Ihre finanziellen Ziele finden.
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
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button-secondary"
                >
                  Services ansehen
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
