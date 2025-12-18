"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";

const problems = [
  {
    icon: (
      <svg
        className="w-8 h-8"
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
        className="w-8 h-8"
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
        className="w-8 h-8"
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
    <section id="problem" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Problém"
          subtitle="Manuální vyplňování zpráv je ztráta času"
        />

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-6"
                >
                  {problem.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
