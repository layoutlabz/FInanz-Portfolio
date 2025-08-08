'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  ArrowRight,
  Search,
  Filter,
  TrendingUp,
  DollarSign,
  Shield,
  Target
} from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Alle Artikel', icon: TrendingUp },
    { id: 'investment', name: 'Investment', icon: DollarSign },
    { id: 'planning', name: 'Finanzplanung', icon: Target },
    { id: 'retirement', name: 'Altersvorsorge', icon: Shield },
    { id: 'market', name: 'Marktanalysen', icon: TrendingUp }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Die 5 wichtigsten Investment-Grundsätze für Anfänger',
      excerpt: 'Entdecken Sie die fundamentalen Prinzipien erfolgreicher Geldanlage und wie Sie Ihr Portfolio optimal aufbauen können.',
      category: 'investment',
      author: 'Dr. Sarah Müller',
      date: '2024-01-15',
      readTime: '8 Min',
      tags: ['Investment', 'Anfänger', 'Portfolio'],
      featured: true
    },
    {
      id: 2,
      title: 'Altersvorsorge 2024: Was Sie jetzt wissen müssen',
      excerpt: 'Die wichtigsten Änderungen und Trends in der Altersvorsorge für das Jahr 2024 und wie Sie optimal vorsorgen.',
      category: 'retirement',
      author: 'Lisa Schmidt',
      date: '2024-01-10',
      readTime: '12 Min',
      tags: ['Altersvorsorge', 'Rente', 'Vorsorge'],
      featured: false
    },
    {
      id: 3,
      title: 'Marktanalyse: Ausblick auf 2024',
      excerpt: 'Unsere Experten analysieren die wichtigsten Trends und Entwicklungen für das kommende Jahr.',
      category: 'market',
      author: 'Michael Weber',
      date: '2024-01-05',
      readTime: '10 Min',
      tags: ['Marktanalyse', 'Trends', '2024'],
      featured: false
    },
    {
      id: 4,
      title: 'Finanzplanung für Familien: Ein umfassender Guide',
      excerpt: 'Wie Sie als Familie Ihre Finanzen optimal planen und für alle Lebensphasen vorsorgen.',
      category: 'planning',
      author: 'Thomas Fischer',
      date: '2023-12-28',
      readTime: '15 Min',
      tags: ['Familie', 'Finanzplanung', 'Vorsorge'],
      featured: false
    },
    {
      id: 5,
      title: 'ETF vs. Aktien: Was ist die bessere Wahl?',
      excerpt: 'Ein detaillierter Vergleich zwischen ETFs und Einzelaktien und wann welche Anlageform sinnvoll ist.',
      category: 'investment',
      author: 'Dr. Sarah Müller',
      date: '2023-12-20',
      readTime: '11 Min',
      tags: ['ETF', 'Aktien', 'Vergleich'],
      featured: false
    },
    {
      id: 6,
      title: 'Steuern sparen durch intelligente Anlagestrategien',
      excerpt: 'Wie Sie durch geschickte Anlageentscheidungen Ihre Steuerlast reduzieren und mehr Rendite erzielen.',
      category: 'investment',
      author: 'Michael Weber',
      date: '2023-12-15',
      readTime: '9 Min',
      tags: ['Steuern', 'Optimierung', 'Rendite'],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
              Finanz <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Bleiben Sie informiert über die neuesten Trends, Tipps und Insights aus der Finanzwelt. 
              Von Investment-Strategien bis zur Altersvorsorge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Artikel durchsuchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white'
                      : 'glass-effect text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Empfohlener Artikel</h2>
              <p className="text-gray-300">Unser aktueller Top-Artikel für Sie</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-effect p-8 rounded-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full text-sm font-medium">
                      Empfohlen
                    </span>
                    <div className="flex items-center space-x-2 text-gray-300 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(featuredPost.date)}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={`/blog/${featuredPost.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="button-primary flex items-center space-x-2"
                    >
                      <span>Artikel lesen</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
                
                <div className="w-full h-64 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-16 h-16 text-white/50" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Alle Artikel</h2>
            <p className="text-xl text-gray-300">
              {filteredPosts.length} Artikel gefunden
            </p>
          </motion.div>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect p-6 rounded-2xl card-hover"
                >
                  <div className="w-full h-48 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-12 h-12 text-white/50" />
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-gray-300">
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-300 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={`/blog/${post.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full button-secondary flex items-center justify-center space-x-2"
                    >
                      <span>Lesen</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-white/50" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Keine Artikel gefunden</h3>
              <p className="text-gray-300 mb-8">
                Versuchen Sie andere Suchbegriffe oder Kategorien
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="button-primary"
              >
                Alle Artikel anzeigen
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Bleiben Sie informiert
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Erhalten Sie die neuesten Finanz-Insights direkt in Ihr Postfach
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-primary"
              >
                Abonnieren
              </motion.button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              Kostenlos und jederzeit kündbar. Keine Spam-E-Mails.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
