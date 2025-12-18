"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const testimonial = {
  quote:
    "Nikdy bych nevěřil, jak moc se dá tvorba technické zprávy zjednodušit. Díky chytrému formuláři a automatickým kontrolám už netrávíme hodiny zbytečným přepisováním a opravami. Výstupy jdou rovnou na úřad bez vracení – ušetřilo nám to spoustu času i nervů.",
  author: "Ing. Tomáš Beran",
  role: "Jednatel",
  company: "Beran Architects",
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Reference" subtitle="Co říkají naši zákazníci" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 md:p-12 shadow-xl shadow-primary-100/50 border border-primary-100/50">
            {/* Quote mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -top-6 left-8 md:left-12"
            >
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </motion.div>

            {/* Quote text */}
            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium italic">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
                {testimonial.author.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-gray-600 text-sm">{testimonial.role}</div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-100/50 rounded-full blur-2xl" />
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-primary-200/30 rounded-full blur-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
