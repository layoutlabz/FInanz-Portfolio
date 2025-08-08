'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Dr. Sarah Müller',
      position: 'Geschäftsführerin',
      company: 'TechStart GmbH',
      content: 'FinanzPortfolio hat mir geholfen, mein Unternehmen finanziell optimal aufzustellen. Die Beratung war professionell und die Ergebnisse sprechen für sich.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Michael Weber',
      position: 'Rentner',
      company: 'Privatperson',
      content: 'Nach 30 Jahren im Beruf wollte ich meine Altersvorsorge optimieren. Das Team hat mir eine maßgeschneiderte Lösung erstellt, die perfekt zu meinen Zielen passt.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Lisa Schmidt',
      position: 'Freiberuflerin',
      company: 'Design Studio',
      content: 'Als Selbstständige war ich unsicher bei Investmententscheidungen. FinanzPortfolio hat mir nicht nur ein Portfolio erstellt, sondern auch viel erklärt.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Thomas Fischer',
      position: 'Familienvater',
      company: 'Angestellter',
      content: 'Die Finanzplanung für unsere Familie war eine Herausforderung. Das Team hat alle Aspekte berücksichtigt und uns eine sichere Zukunft ermöglicht.',
      rating: 5,
      image: '/api/placeholder/60/60'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Was unsere <span className="gradient-text">Kunden</span> sagen
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Echte Erfahrungsberichte von zufriedenen Kunden, die ihre finanziellen Ziele erreicht haben
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="glass-effect p-8 md:p-12 rounded-2xl max-w-4xl mx-auto"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Quote className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-300 text-sm">
                  {testimonials[currentIndex].position} bei {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed italic">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </blockquote>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-blue-500 to-emerald-500' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Vertrauen Sie auf bewährte Qualität</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Preview - Beispiel Berater',
                  description: 'Preview - Beispiel Beschreibung für Beraterqualifikationen.'
                },
                {
                  title: 'Preview - Beispiel Gebühren',
                  description: 'Preview - Beispiel Beschreibung für transparente Preisgestaltung.'
                },
                {
                  title: 'Preview - Beispiel Betreuung',
                  description: 'Preview - Beispiel Beschreibung für persönliche Kundenbetreuung.'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="glass-effect p-6 rounded-xl"
                >
                  <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default TestimonialsSection;
