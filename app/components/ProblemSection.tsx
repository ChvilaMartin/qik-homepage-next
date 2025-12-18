"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const problems = [
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Spousta psaní a opakování",
    description:
      "Architekti a projektanti tráví hodiny ručním vypisováním zpráv, které se často liší jen v detailech – ztráta času i energie.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Nutnost dodržet formát a vyhlášky",
    description:
      "Každá zpráva musí odpovídat striktnímu formátu a aktuální legislativě. Jedna chyba a úřad vám dokument vrátí.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    title: "Chyby a nesrovnalosti",
    description:
      "Manuální přepisování a kopírování vede k rozporům mezi částmi dokumentu – zbytečným komplikacím se dá předejít.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 md:py-32 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          title="Problém"
          subtitle="Manuální vyplňování zpráv je ztráta času"
          light
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:to-transparent transition-all duration-500" />

                {/* Large number */}
                <div className="absolute -top-3 -right-2 text-8xl font-black text-gray-800/50 select-none group-hover:text-red-500/20 transition-colors duration-500">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative flex flex-col">
                  {/* Icon with animated glow */}
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15 + 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="relative mb-6"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center shadow-lg shadow-red-500/25 group-hover:shadow-red-500/40 transition-shadow duration-500">
                      {problem.icon}
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-xl bg-red-500/20 animate-ping opacity-0 group-hover:opacity-75" style={{ animationDuration: "2s" }} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {problem.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 h-1 w-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
