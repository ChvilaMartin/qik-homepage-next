"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const apps = [
  {
    id: "vady-nedodelky",
    number: "01",
    title: "Vady & Nedodělky",
    subtitle: "Kompletní správa závad a nedodělků",
    description:
      "Profesionální nástroj pro evidenci, sledování a řešení veškerých vad a nedodělků během výstavby. Od prvního nálezu až po finální předání.",
    highlights: [
      { value: "100%", label: "Přehled o stavu" },
      { value: "2x", label: "Rychlejší řešení" },
      { value: "0", label: "Ztracených závad" },
    ],
    features: [
      {
        icon: "camera",
        title: "Fotodokumentace závad",
        desc: "Každá závada s fotkou a přesnou lokací",
      },
      {
        icon: "users",
        title: "Přiřazení řemeslníků",
        desc: "Jasná odpovědnost za každou položku",
      },
      {
        icon: "link",
        title: "Veřejný odkaz",
        desc: "Řemeslníci označují vyřešené online",
      },
      {
        icon: "chart",
        title: "Statistiky & reporty",
        desc: "Přehled progresu pro investory",
      },
    ],
    image: "/vady-01.png",
    imageAlt: "Správa vad a nedodělků v QIK",
    available: true,
  },
  {
    id: "fotodokumentace",
    number: "02",
    title: "Fotodokumentace",
    subtitle: "Vizuální historie vaší stavby",
    description:
      "Systematická správa fotografií z průběhu výstavby. Vše organizované, snadno dohledatelné a připravené ke sdílení s kýmkoliv potřebujete.",
    highlights: [
      { value: "∞", label: "Fotografií" },
      { value: "1 klik", label: "Ke sdílení" },
      { value: "100%", label: "V cloudu" },
    ],
    features: [
      {
        icon: "folder",
        title: "Chytrá organizace",
        desc: "Podle lokace, data i etapy",
      },
      {
        icon: "upload",
        title: "Hromadné nahrávání",
        desc: "Desítky fotek najednou",
      },
      {
        icon: "share",
        title: "Snadné sdílení",
        desc: "S investory, úřady i kolegy",
      },
      {
        icon: "timeline",
        title: "Časová osa",
        desc: "Vizuální průběh stavby",
      },
    ],
    image: "/screenshot.png",
    imageAlt: "Fotodokumentace stavby v QIK",
    available: false,
  },
  {
    id: "stavebni-denik",
    number: "03",
    title: "Stavební deník",
    subtitle: "Elektronický deník v souladu s legislativou",
    description:
      "Digitální stavební deník, který splňuje všechny zákonné požadavky. Jednoduché zapisování, přehledná evidence a snadný export.",
    highlights: [
      { value: "100%", label: "Digitální" },
      { value: "✓", label: "Dle legislativy" },
      { value: "PDF", label: "Export" },
    ],
    features: [
      {
        icon: "calendar",
        title: "Denní záznamy",
        desc: "Průběh prací každý den",
      },
      {
        icon: "users",
        title: "Evidence pracovníků",
        desc: "Kdo byl kdy na stavbě",
      },
      {
        icon: "sun",
        title: "Počasí & podmínky",
        desc: "Automatický záznam",
      },
      {
        icon: "download",
        title: "Export pro úřady",
        desc: "Vše připravené k odevzdání",
      },
    ],
    image: "/screenshot.png",
    imageAlt: "Stavební deník v QIK",
    available: false,
  },
];

const FeatureIcon = ({ icon }: { icon: string }) => {
  const icons: Record<string, ReactNode> = {
    camera: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      />
    ),
    users: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    ),
    link: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      />
    ),
    chart: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    ),
    folder: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
      />
    ),
    upload: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
      />
    ),
    share: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
      />
    ),
    timeline: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    calendar: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
    sun: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    ),
    download: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    ),
  };

  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {icons[icon]}
    </svg>
  );
};

export default function StavbaPage() {
  return (
    <>
      <Header variant="dark" />

      {/* WIP Warning Banner */}
      <div className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-amber-500 text-amber-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center gap-3 text-sm font-medium">
          <svg
            className="w-5 h-5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>
            Modul Stavba je aktuálně ve vývoji. Některé funkce nemusí být dostupné.
          </span>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="bg-white pt-36 md:pt-40 px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
          {/* Card container */}
          <div className="relative h-[calc(100vh-11rem)] md:h-[calc(100vh-12rem)] rounded-3xl shadow-xl overflow-hidden">
            {/* Background image */}
            <Image
              src="/header-stavba.jpeg"
              alt="Stavba pozadí"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6"
                >
                  3 aplikace v jednom řešení
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                >
                  Modul Stavba
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-6 text-xl text-white/90 max-w-3xl mx-auto"
                >
                  Komplexní sada nástrojů pro řízení stavební dokumentace.
                  Evidence vad, fotodokumentace i stavební deník – vše propojené
                  v jedné platformě.
                </motion.p>

                {/* App badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-10 flex flex-wrap justify-center gap-4"
                >
                  {apps.map((app) => (
                    <Link
                      key={app.id}
                      href={`#${app.id}`}
                      className={`px-5 py-3 rounded-xl font-medium transition-all ${
                        app.available
                          ? "bg-white text-gray-900 hover:bg-white/90"
                          : "bg-white/20 text-white/80 backdrop-blur-sm"
                      }`}
                    >
                      <span className="text-xs opacity-60 mr-2">
                        {app.number}
                      </span>
                      {app.title}
                      {!app.available && (
                        <span className="ml-2 text-xs opacity-60">
                          (Připravujeme)
                        </span>
                      )}
                    </Link>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* App Sections */}
        {apps.map((app, index) => {
          const isEven = index % 2 === 0;
          const bgClass = isEven ? "bg-white" : "bg-gray-50";

          return (
            <section
              key={app.id}
              id={app.id}
              className={`py-24 md:py-32 ${bgClass} overflow-hidden`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  {/* App number */}
                  <span className="inline-block text-7xl md:text-8xl font-bold text-gray-100 mb-4">
                    {app.number}
                  </span>

                  {/* Availability badge */}
                  {!app.available && (
                    <div className="mb-4">
                      <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">
                        Připravujeme
                      </span>
                    </div>
                  )}

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                    {app.title}
                  </h2>
                  <p className="mt-3 text-xl text-primary-600 font-medium">
                    {app.subtitle}
                  </p>
                  <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    {app.description}
                  </p>
                </motion.div>

                {/* Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex justify-center gap-8 md:gap-16 mb-16"
                >
                  {app.highlights.map((highlight, i) => (
                    <div key={i} className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-primary-600">
                        {highlight.value}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {highlight.label}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Screenshot */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="max-w-5xl mx-auto mb-16"
                >
                  <div className="relative">
                    {/* Background decoration */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-primary-50 rounded-3xl -z-10" />

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
                      <div className="relative aspect-[16/9] bg-gray-100 flex items-center justify-center">
                        {!app.available ? (
                          <div className="text-center p-8">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                              <svg
                                className="w-10 h-10 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                />
                              </svg>
                            </div>
                            <p className="text-gray-500 font-medium text-lg">
                              Již brzy
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                              Pracujeme na tom
                            </p>
                          </div>
                        ) : (
                          <Image
                            src={app.image}
                            alt={app.imageAlt}
                            width={1200}
                            height={675}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                    </div>

                    {/* Floating decorations */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary-500/10 rounded-2xl -z-10"
                    />
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -left-4 -top-4 w-16 h-16 bg-primary-300/20 rounded-full -z-10"
                    />
                  </div>
                </motion.div>

                {/* Feature grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                  {app.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.4 + featureIndex * 0.1,
                      }}
                      className="text-center group"
                    >
                      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center text-primary-600 transition-colors">
                        <FeatureIcon icon={feature.icon} />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-500">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            >
              Připraveni zefektivnit vaši stavbu?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Kontaktujte nás a zjistěte, jak může Modul Stavba pomoct právě
              vašemu týmu. Rádi vám připravíme ukázku na míru.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="mailto:info@qik.cz"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-full shadow-lg shadow-primary-600/30 hover:bg-primary-700 transition-colors"
              >
                Kontaktujte nás
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors"
              >
                Zpět na hlavní stránku
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
