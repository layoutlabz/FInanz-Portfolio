'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { TrendingUp, Users, DollarSign, Award } from 'lucide-react';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counts, setCounts] = useState({
    clients: 0,
    assets: 0,
    years: 0,
    satisfaction: 0
  });

  const stats = [
    {
      icon: Users,
      number: 500,
      suffix: '+',
      label: 'Zufriedene Kunden',
      description: 'Vertrauen uns seit Jahren'
    },
    {
      icon: DollarSign,
      number: 50,
      suffix: 'M€',
      label: 'Verwaltetes Vermögen',
      description: 'Professionell gemanagt'
    },
    {
      icon: Award,
      number: 15,
      suffix: '+',
      label: 'Jahre Erfahrung',
      description: 'Bewährte Expertise'
    },
    {
      icon: TrendingUp,
      number: 98,
      suffix: '%',
      label: 'Kundenzufriedenheit',
      description: 'Höchste Qualität'
    }
  ];

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      const intervals = stats.map((stat, index) => {
        return setInterval(() => {
          setCounts(prev => {
            const target = stat.number;
            const current = prev[Object.keys(prev)[index] as keyof typeof prev] as number;
            const increment = target / steps;
            
            if (current < target) {
              return {
                ...prev,
                [Object.keys(prev)[index]]: Math.min(current + increment, target)
              };
            }
            return prev;
          });
        }, stepDuration);
      });

      return () => intervals.forEach(interval => clearInterval(interval));
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Unsere <span className="gradient-text">Erfolge</span> in Zahlen
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vertrauen Sie auf bewährte Erfahrung und nachweisbare Ergebnisse
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="glass-effect p-8 rounded-2xl card-hover">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {Math.round(counts[Object.keys(counts)[index] as keyof typeof counts] as number)}
                  {stat.suffix}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Portfolio Performance
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Konservativ', return: '4.2%', risk: 'Niedrig', color: 'from-green-500 to-emerald-500' },
                { label: 'Ausgewogen', return: '6.8%', risk: 'Mittel', color: 'from-blue-500 to-cyan-500' },
                { label: 'Dynamisch', return: '9.1%', risk: 'Hoch', color: 'from-purple-500 to-pink-500' }
              ].map((strategy, index) => (
                <motion.div
                  key={strategy.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${strategy.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold text-lg">{strategy.return}</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{strategy.label}</h4>
                  <p className="text-gray-300 text-sm">Risiko: {strategy.risk}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-300 text-sm">
                * Durchschnittliche Jahresrendite der letzten 5 Jahre. 
                Vergangene Performance ist kein Indikator für zukünftige Ergebnisse.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
