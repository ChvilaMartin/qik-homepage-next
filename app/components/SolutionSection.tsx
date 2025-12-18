"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";

const features = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    title: "Předpřipravené formuláře",
    description:
      "Formuláře pro technické zprávy jsou navrženy podle aktuálních právních předpisů. Vyplnění trvá minuty, ne hodiny.",
    image: "/screenshot.png",
    imageAlt: "Předpřipravené formuláře v QIK",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "Doplňování pomocí AI",
    description:
      "Zapomeňte na přepisování. QIK přečte vaše podklady a doplní informace do zprávy za vás. Získáte přesné výstupy rychleji a bez rutinní práce.",
    image: "/screenshot.png",
    imageAlt: "AI doplňování v QIK",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
    ),
    title: "Výstup připravený k odevzdání",
    description:
      "Hotovou zprávu si jednoduše stáhnete ve formátu .docx nebo .pdf – připravenou k odevzdání, archivaci nebo dalším úpravám.",
    image: "/screenshot.png",
    imageAlt: "Export dokumentů v QIK",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Automatická kontrola",
    description:
      "Zkontrolujeme za vás technickou zprávu před podáním na úřady. Ověříme platnost vyhlášek, odhalíme nesrovnalosti a předejdeme zbytečným průtahům.",
    image: "/screenshot.png",
    imageAlt: "Automatická kontrola v QIK",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Řešení"
          subtitle="Technické zprávy na pár kliknutí"
          description="Už žádné zdlouhavé psaní. QIK využívá předpřipravené formuláře a specializovanou AI k tomu, aby vám pomohl s dokumentací snadno, rychle a v souladu s vyhláškami. Ušetříte čas i nervy."
        />

        <div className="mt-20 space-y-24 lg:space-y-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
              >
                {/* Text Content */}
                <div className="flex-1 max-w-xl">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {/* Feature title with icon */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-600 text-white">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Decorative line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: 80 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="h-1 bg-primary-600 rounded-full mt-6"
                    />
                  </motion.div>
                </div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex-1 w-full max-w-2xl"
                >
                  <div className="relative">
                    {/* Background decoration */}
                    <div className={`absolute -inset-4 bg-gradient-to-br ${isEven ? 'from-primary-100 to-primary-50' : 'from-primary-50 to-primary-100'} rounded-3xl -z-10`} />

                    {/* Browser frame */}
                    <div className="bg-white rounded-2xl shadow-2xl shadow-gray-200/50 border border-gray-200 overflow-hidden">
                      {/* Browser header */}
                      <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-400" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex-1 mx-4">
                          <div className="bg-gray-200 rounded-lg h-6 max-w-xs" />
                        </div>
                      </div>

                      {/* Screenshot */}
                      <Image
                        src={feature.image}
                        alt={feature.imageAlt}
                        width={800}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>

                    {/* Floating elements */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className={`absolute ${isEven ? '-right-6 -bottom-6' : '-left-6 -bottom-6'} w-20 h-20 bg-primary-500/10 rounded-2xl -z-10`}
                    />
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className={`absolute ${isEven ? '-left-4 -top-4' : '-right-4 -top-4'} w-16 h-16 bg-primary-300/20 rounded-full -z-10`}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
