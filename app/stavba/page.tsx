"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const features = [
  {
    id: "fotodokumentace",
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
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Fotodokumentace stavby",
    description:
      "Mějte přehled o vizuálním stavu vaší stavby v každé fázi. Systematicky ukládejte a organizujte fotografie podle lokace, data či etapy výstavby. Jednoduše sdílejte dokumentaci s investory, úřady nebo kolegy – vše na jednom místě, kdykoliv k dispozici.",
    image: "/screenshot.png",
    imageAlt: "Fotodokumentace stavby v QIK",
    comingSoon: false,
  },
  {
    id: "vady-nedodelky",
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
    title: "Vady & Nedodělky",
    description:
      "Evidujte a spravujte veškeré závady a nedodělky během výstavby. Vytvářejte reporty, přiřazujte odpovědné osoby a sledujte stav řešení. Řemeslníci mohou přímo z veřejné stránky označovat závady jako vyřešené. Přehledné statistiky vám ukáží celkový progres a pomohou dodržet termíny.",
    image: "/screenshot.png",
    imageAlt: "Správa vad a nedodělků v QIK",
    comingSoon: false,
  },
  {
    id: "stavebni-denik",
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
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: "Stavební deník",
    description:
      "Elektronický stavební deník v souladu s legislativou. Zapisujte denní záznamy, evidujte pracovníky na stavbě, počasí i důležité události. Vše digitálně, přehledně a s možností exportu pro úřady.",
    image: "/screenshot.png",
    imageAlt: "Stavební deník v QIK",
    comingSoon: true,
  },
];

export default function StavbaPage() {
  return (
    <>
      <Header variant="dark" />
      <main>
        {/* Hero Section */}
        <section className="bg-white pt-24 md:pt-28 px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
          {/* Card container */}
          <div className="relative h-[calc(100vh-8rem)] md:h-[calc(100vh-9rem)] rounded-3xl shadow-xl overflow-hidden">
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
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                >
                  Modul Stavba
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-6 text-xl text-white/90 max-w-3xl mx-auto"
                >
                  Kompletní nástroje pro správu stavební dokumentace. Od
                  fotodokumentace přes evidenci vad až po stavební deník – vše v
                  jedné aplikaci.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24 lg:space-y-32">
              {features.map((feature, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={feature.id}
                    id={feature.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`flex flex-col ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } items-center gap-12 lg:gap-16`}
                  >
                    {/* Text Content */}
                    <div className="flex-1 max-w-xl">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {/* Coming soon badge */}
                        {feature.comingSoon && (
                          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full mb-4">
                            Připravujeme
                          </span>
                        )}

                        {/* Feature title with icon */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-600 text-white">
                            {feature.icon}
                          </div>
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                            {feature.title}
                          </h2>
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
                        <div
                          className={`absolute -inset-4 bg-gradient-to-br ${
                            isEven
                              ? "from-primary-100 to-primary-50"
                              : "from-primary-50 to-primary-100"
                          } rounded-3xl -z-10`}
                        />

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

                          {/* Screenshot placeholder */}
                          <div className="relative aspect-[16/10] bg-gray-100 flex items-center justify-center">
                            {feature.comingSoon ? (
                              <div className="text-center p-8">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                                  <svg
                                    className="w-8 h-8 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                  </svg>
                                </div>
                                <p className="text-gray-500 font-medium">
                                  Screenshot již brzy
                                </p>
                              </div>
                            ) : (
                              <Image
                                src={feature.image}
                                alt={feature.imageAlt}
                                width={800}
                                height={500}
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={`absolute ${
                            isEven ? "-right-6 -bottom-6" : "-left-6 -bottom-6"
                          } w-20 h-20 bg-primary-500/10 rounded-2xl -z-10`}
                        />
                        <motion.div
                          animate={{ y: [0, 10, 0] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={`absolute ${
                            isEven ? "-left-4 -top-4" : "-right-4 -top-4"
                          } w-16 h-16 bg-primary-300/20 rounded-full -z-10`}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Máte zájem o Modul Stavba?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-gray-600"
            >
              Kontaktujte nás a dozvíte se více o možnostech nasazení pro vaši
              firmu.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <a
                href="mailto:info@qik.cz"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-full shadow-lg shadow-primary-600/30 hover:bg-primary-700 transition-colors"
              >
                Kontaktujte nás
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
