"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Shield,
  Award,
  Users
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Vermögensverwaltung", href: "/services#wealth" },
      { name: "Rentenplanung", href: "/services#retirement" },
      { name: "Investmentberatung", href: "/services#investment" },
      { name: "Unternehmensfinanzierung", href: "/services#corporate" },
      { name: "Familienvermögen", href: "/services#family" }
    ],
    company: [
      { name: "Über uns", href: "/about" },
      { name: "Team", href: "/about#team" },
      { name: "Karriere", href: "/careers" },
      { name: "Presse", href: "/press" },
      { name: "Blog", href: "/blog" }
    ],
    support: [
      { name: "Kontakt", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Support", href: "/support" },
      { name: "Datenschutz", href: "/privacy" },
      { name: "Impressum", href: "/legal" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-cyan-400" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-500" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-400" }
  ];

  const trustIndicators = [
    { icon: Shield, text: "Preview - Beispiel Lizenz", color: "text-emerald-400" },
    { icon: Award, text: "Preview - Beispiel Zertifizierung", color: "text-amber-400" },
    { icon: Users, text: "Preview - Beispiel Kunden", color: "text-blue-400" }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"></div>
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-glow">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold gradient-text">Finanz Portfolio</h3>
                  <p className="text-sm text-gray-400">Ihr Partner für finanzielle Freiheit</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Professionelle Finanzberatung und Vermögensverwaltung für Privatpersonen 
                und Unternehmen. Wir machen Ihre finanziellen Ziele zur Realität.
              </p>

              {/* Trust Indicators */}
              <div className="space-y-3">
                {trustIndicators.map((indicator, index) => (
                  <motion.div
                    key={indicator.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <indicator.icon className={`w-5 h-5 ${indicator.color}`} />
                    <span className="text-sm text-gray-400">{indicator.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Unternehmen</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Kontakt</h4>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-start space-x-3"
                >
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Musterstraße 123</p>
                    <p className="text-gray-300 text-sm">10115 Berlin, Deutschland</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-center space-x-3"
                >
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <a href="tel:+493012345678" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                    +49 30 123 456 78
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex items-center space-x-3"
                >
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <a href="mailto:info@finanz-portfolio.de" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                    info@finanz-portfolio.de
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="flex items-center space-x-3"
                >
                  <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Mo-Fr: 9:00 - 18:00</p>
                    <p className="text-gray-300 text-sm">Sa: 10:00 - 14:00</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-effect-strong p-8 rounded-3xl mb-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Bleiben Sie informiert
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Erhalten Sie regelmäßige Updates zu Marktentwicklungen, Investment-Tipps 
              und exklusive Finanzberichte direkt in Ihr Postfach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="form-input flex-1"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-primary whitespace-nowrap"
              >
                Abonnieren
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Demo Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 py-6"
        >
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-4 mb-6">
              <p className="text-orange-300 text-sm font-medium">
                ⚠️ DEMO/VORSCHAU WEBSITE - Alle Inhalte sind fiktiv und dienen nur Präsentationszwecken. 
                Keine echten Finanzdienstleistungen oder Datenerfassung.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Finanz Portfolio. Alle Rechte vorbehalten.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-10 h-10 glass-effect-subtle rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              {footerLinks.support.slice(-3).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};


export default Footer;
