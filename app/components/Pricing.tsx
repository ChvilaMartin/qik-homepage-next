"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";

const plans = [
  {
    name: "Freelancer",
    monthlyPrice: "199",
    yearlyPrice: "159",
    description: "Ideální pro freelancery a OSVČ",
    features: ["1 uživatel", "5GB uložiště", "10 projektů"],
    popular: false,
    buttonText: "Registrovat",
  },
  {
    name: "Business",
    monthlyPrice: "499",
    yearlyPrice: "399",
    description: "Ideální pro firmy",
    features: ["Neomezeně uživatelů", "50GB uložiště", "Neomezené využití AI"],
    popular: true,
    buttonText: "Registrovat",
  },
  {
    name: "Enterprise",
    monthlyPrice: "Dle dohody",
    yearlyPrice: "Dle dohody",
    description: "Pro velké firmy co potřebují řešení na míru",
    features: [
      "Vše z Business",
      "500GB uložiště",
      "24/7 prémiová podpora",
      "Vlastní integrace",
      "Statistiky",
    ],
    popular: false,
    buttonText: "Kontaktujte nás",
    isCustom: true,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Ceník"
          subtitle="Vyberte si plán který vám sedne"
        />

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <span
            className={`text-sm font-medium transition-colors ${
              !isYearly ? "text-gray-900" : "text-gray-500"
            }`}
          >
            Měsíčně
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-14 h-7 rounded-full bg-primary-600 p-1 cursor-pointer transition-colors"
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`w-5 h-5 rounded-full bg-white shadow-md ${
                isYearly ? "ml-auto" : ""
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors ${
              isYearly ? "text-gray-900" : "text-gray-500"
            }`}
          >
            Ročně
          </span>
          {isYearly && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full"
            >
              Ušetříte 20%
            </motion.span>
          )}
        </motion.div>

        {/* Pricing cards */}
        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-primary-600 text-white shadow-2xl shadow-primary-600/30 scale-105 lg:scale-110"
                  : "bg-white shadow-lg shadow-gray-200/50 border border-gray-100"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                >
                  <span className="px-4 py-1 bg-white text-primary-600 text-sm font-semibold rounded-full shadow-lg">
                    Populární
                  </span>
                </motion.div>
              )}

              {/* Plan name */}
              <h3
                className={`text-xl font-bold ${
                  plan.popular ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={isYearly ? "yearly" : "monthly"}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className={`text-4xl font-bold ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.isCustom
                      ? plan.monthlyPrice
                      : isYearly
                      ? plan.yearlyPrice
                      : plan.monthlyPrice}
                  </motion.span>
                </AnimatePresence>
                {!plan.isCustom && (
                  <span
                    className={
                      plan.popular ? "text-white/70" : "text-gray-500"
                    }
                  >
                    Kč / měsíčně
                  </span>
                )}
              </div>

              {/* Billing period */}
              <p
                className={`mt-1 text-sm ${
                  plan.popular ? "text-white/70" : "text-gray-500"
                }`}
              >
                {plan.isCustom
                  ? " "
                  : isYearly
                  ? "placeno ročně"
                  : "placeno měsíčně"}
              </p>

              {/* Description */}
              <p
                className={`mt-4 ${
                  plan.popular ? "text-white/80" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.popular ? "text-white" : "text-primary-600"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={plan.popular ? "text-white/90" : "text-gray-700"}
                    >
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-8">
                <Button
                  href="#"
                  variant={plan.popular ? "secondary" : "primary"}
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
