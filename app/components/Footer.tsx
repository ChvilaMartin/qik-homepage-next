"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { href: "#", label: "Ochrana osobních údajů" },
  { href: "#", label: "Podmínky používání" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <a href="#" className="inline-block">
              <span className="text-2xl font-bold text-white">QIK</span>
            </a>
            <p className="mt-4 text-gray-400 max-w-sm">
              Zjednodušujeme projektovou dokumentaci ve stavebnictví
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Navigace
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#problem"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Problém
                </a>
              </li>
              <li>
                <a
                  href="#solution"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Řešení
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Jak to funguje
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ceník
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Právní informace
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <p className="text-center text-gray-500 text-sm">
            Copyright © 2025 QIK - Zjednodušujeme projektovou dokumentaci ve
            stavebnictví
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
