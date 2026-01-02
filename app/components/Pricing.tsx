"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Ceník"
          subtitle="Vyzkoušejte Qik zdarma během testovacího období"
        />

        {/* Free Testing Card */}
        <div className="mt-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl p-10 md:p-12 bg-primary-600 text-white shadow-2xl shadow-primary-600/30"
          >
            {/* Beta Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-4 left-1/2 -translate-x-1/2"
            >
              <span className="px-4 py-1 bg-white text-primary-600 text-sm font-semibold rounded-full shadow-lg">
                Testovací režim
              </span>
            </motion.div>

            {/* Heading */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Zdarma pro všechny
              </h3>

              {/* Price */}
            </div>

            {/* Description */}
            <div className="mt-8 text-center">
              <p className="text-white/90 text-lg">
                Qik je momentálně v testovacím režimu a je zcela zdarma pro všechny uživatele.
                Využijte této příležitosti vyzkoušet všechny funkce bez jakýchkoliv omezení.
              </p>
            </div>

            {/* Early Adopter Benefit */}


            {/* Features */}


            {/* CTA Button */}
            <div className="mt-10 text-center">
              <Button
                href="/signup"
                variant="secondary"
                className="w-full md:w-auto md:px-12"
              >
                Registrovat zdarma
              </Button>
              <p className="mt-4 text-white/60 text-sm">
                Žádná platební karta není potřeba
              </p>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Máte dotazy ohledně cenové politiky po spuštění?{" "}
            <a href="/kontakt" className="text-primary-600 hover:text-primary-700 font-medium">
              Kontaktujte nás
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
