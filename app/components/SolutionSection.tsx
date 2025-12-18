"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";

const features = [
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    title: "Předpřipravené formuláře",
    description:
      "Formuláře pro technické zprávy jsou navrženy podle aktuálních právních předpisů. Vyplnění trvá minuty, ne hodiny.",
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
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "Doplňování pomocí AI",
    description:
      "Zapomeňte na přepisování. QIK přečte vaše podklady a doplní informace do zprávy za vás. Získáte přesné výstupy rychleji a bez rutinní práce.",
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
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
    ),
    title: "Výstup připravený k odevzdání",
    description:
      "Hotovou zprávu si jednoduše stáhnete ve formátu .docx nebo .pdf – připravenou k odevzdání, archivaci nebo dalším úpravám.",
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Automatická kontrola",
    description:
      "Zkontrolujeme za vás technickou zprávu před podáním na úřady. Ověříme platnost vyhlášek, odhalíme nesrovnalosti a předejdeme zbytečným průtahům.",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Řešení"
          subtitle="Technické zprávy na pár kliknutí"
          description="Už žádné zdlouhavé psaní. QIK využívá předpřipravené formuláře a specializovanou AI k tomu, aby vám pomohl s dokumentací snadno, rychle a v souladu s vyhláškami. Ušetříte čas i nervy."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className="flex gap-5">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center"
                >
                  {feature.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
