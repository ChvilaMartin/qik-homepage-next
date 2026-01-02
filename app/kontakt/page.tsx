"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { contactFormSchema, type ContactFormInput } from "@/app/lib/schemas";
import { submitContactForm } from "@/app/lib/actions";
import Button from "@/app/components/ui/Button";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormInput) => {
    setIsLoading(true);
    setSubmitError("");

    try {
      const result = await submitContactForm(data);

      if (result.success) {
        setIsSuccess(true);
        reset(); // Clear form
      } else {
        setSubmitError(result.error || "Při odesílání zprávy došlo k chybě.");
      }
    } catch (error) {
      setSubmitError("Při odesílání zprávy došlo k chybě. Zkuste to prosím znovu.");
      console.error("Error submitting contact form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header variant="dark" />
      <main className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Page Header */}
            <div className="text-center mb-12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              >
                Kontaktujte nás
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Máte otázku nebo potřebujete pomoc? Napište nám a my se vám ozveme co nejdříve.
              </motion.p>
            </div>

            {/* Success State */}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 mb-8"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center"
                  >
                    <svg
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Zpráva byla úspěšně odeslána!
                    </h2>
                    <p className="text-sm text-gray-600">
                      Děkujeme za vaši zprávu. Ozveme se vám co nejdříve.
                    </p>
                  </div>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    size="md"
                  >
                    Odeslat další zprávu
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Contact Form */}
            {!isSuccess && (
              <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                <div className="p-8 md:p-12 relative">
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center z-10"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="h-10 w-10 border-4 border-primary-600 border-t-transparent rounded-full mb-4"
                      />
                      <p className="text-sm font-medium text-gray-700">Odesíláme vaši zprávu...</p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Jméno a příjmení
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Jan Novák"
                        {...register("name")}
                        className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 ${
                          errors.name ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-red-500"
                        >
                          {errors.name.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="jan@example.com"
                        {...register("email")}
                        className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 ${
                          errors.email ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-red-500"
                        >
                          {errors.email.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Question Field */}
                    <div className="space-y-2">
                      <label htmlFor="question" className="block text-sm font-medium text-gray-700">
                        Vaše zpráva
                      </label>
                      <textarea
                        id="question"
                        rows={6}
                        placeholder="Napište nám vaši otázku nebo zprávu..."
                        {...register("question")}
                        className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 resize-y ${
                          errors.question ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                      {errors.question && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-red-500"
                        >
                          {errors.question.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Submit Error */}
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-xl bg-red-50 border border-red-200 p-4"
                      >
                        <div className="flex items-start gap-3">
                          <svg
                            className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <p className="text-sm text-red-800">{submitError}</p>
                        </div>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={isLoading}
                    >
                      {isLoading ? "Odesílá se..." : "Odeslat zprávu"}
                    </Button>
                  </form>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Background decorations */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -left-20 w-60 h-60 bg-primary-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-primary-100/40 rounded-full blur-2xl" />
        </div>
      </main>
      <Footer />
    </>
  );
}
