"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { createWorkspaceSchema, type CreateWorkspaceInput } from "@/app/lib/schemas";
import { useWorkspaceAvailability } from "@/app/lib/hooks/use-workspace-availability";
import { createWorkspace } from "@/app/lib/actions";
import Button from "@/app/components/ui/Button";

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [workspaceUrl, setWorkspaceUrl] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<CreateWorkspaceInput>({
    resolver: zodResolver(createWorkspaceSchema)
  });

  const workspaceSlug = watch("workspace.slug");

  const handleWorkspaceNameChange = (value: string) => {
    const slug = value
      .toLowerCase()
      .replace(/[áàâäã]/g, 'a')
      .replace(/[éèêë]/g, 'e')
      .replace(/[íìîï]/g, 'i')
      .replace(/[óòôöõ]/g, 'o')
      .replace(/[úùûü]/g, 'u')
      .replace(/[ýÿ]/g, 'y')
      .replace(/č/g, 'c')
      .replace(/ď/g, 'd')
      .replace(/ě/g, 'e')
      .replace(/ň/g, 'n')
      .replace(/ř/g, 'r')
      .replace(/š/g, 's')
      .replace(/ť/g, 't')
      .replace(/ů/g, 'u')
      .replace(/ž/g, 'z')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    setValue("workspace.slug", slug);
  };

  const availability = useWorkspaceAvailability(workspaceSlug || "");

  const onSubmit = async (data: CreateWorkspaceInput) => {
    if (availability.isAvailable === false) {
      setSubmitError("Vybraná URL adresa není dostupná. Zvolte prosím jinou.");
      return;
    }

    setIsLoading(true);
    setSubmitError("");

    try {
      const result = await createWorkspace(data);

      if (result.success && result.workspaceUrl) {
        setWorkspaceUrl(result.workspaceUrl);
        setIsSuccess(true);
      } else {
        setSubmitError(result.error || "Při vytváření pracoviště došlo k chybě.");
      }

    } catch (error) {
      setSubmitError("Při vytváření pracoviště došlo k chybě. Zkuste to prosím znovu.");
      console.error("Error creating workspace:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Success state
  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8">
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Pracoviště bylo úspěšně vytvořeno!
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Vaše nové pracoviště je připraveno k použití.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="w-full pt-4"
            >
              <Button
                href={workspaceUrl}
                className="w-full"
              >
                Přejít do pracoviště
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-2xl"
    >
      <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 text-center border-b border-gray-100 bg-gradient-to-b from-primary-50/50 to-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
          >
            <svg
              className="w-7 h-7 text-white"
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
          </motion.div>
          <h1 className="text-2xl font-bold text-gray-900">Založení pracoviště</h1>
          <p className="mt-2 text-gray-600">
            Vytvořte si nové pracoviště pro správu vašich technických zpráv
          </p>
        </div>

        {/* Form */}
        <div className="p-8 relative">
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
              <p className="text-sm font-medium text-gray-700 mb-1">Vytváříme vaše pracoviště...</p>
              <p className="text-xs text-gray-500">Tento proces může trvat několik sekund</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Workspace Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Informace o pracovišti</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="workspace-name" className="block text-sm font-medium text-gray-700">
                    Název pracoviště
                  </label>
                  <input
                    id="workspace-name"
                    type="text"
                    placeholder="Moje stavební firma"
                    {...register("workspace.name", {
                      onChange: (e) => handleWorkspaceNameChange(e.target.value)
                    })}
                    className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 ${
                      errors.workspace?.name ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {errors.workspace?.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500"
                    >
                      {errors.workspace.name.message}
                    </motion.p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="workspace-slug" className="block text-sm font-medium text-gray-700">
                    URL adresa
                  </label>
                  <div className="relative">
                    <input
                      id="workspace-slug"
                      type="text"
                      placeholder="moje-stavebni-firma"
                      {...register("workspace.slug")}
                      className={`w-full px-4 py-3 pr-10 rounded-xl border bg-gray-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 ${
                        errors.workspace?.slug ? "border-red-500" :
                        availability.isAvailable === false ? "border-red-500" :
                        availability.isAvailable === true ? "border-green-500" : "border-gray-200"
                      }`}
                    />
                    {availability.isChecking && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="h-5 w-5 border-2 border-gray-300 border-t-primary-600 rounded-full"
                        />
                      </div>
                    )}
                    {!availability.isChecking && availability.isAvailable === true && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 8 8">
                            <path d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z"/>
                          </svg>
                        </div>
                      </div>
                    )}
                    {!availability.isChecking && availability.isAvailable === false && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <div className="h-5 w-5 rounded-full bg-red-500 flex items-center justify-center">
                          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 8 8">
                            <path d="M1.41 0l-1.41 1.41.72.72 1.78 1.81-1.78 1.78-.72.69 1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72-1.44-1.41-.69.72-1.78 1.78-1.81-1.78z"/>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  {errors.workspace?.slug && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500"
                    >
                      {errors.workspace.slug.message}
                    </motion.p>
                  )}
                  {availability.error && (
                    <p className="text-sm text-red-500">{availability.error}</p>
                  )}
                  {!availability.isChecking && availability.isAvailable === false && !availability.error && (
                    <p className="text-sm text-red-500">Tato URL adresa již není dostupná</p>
                  )}
                  {!availability.isChecking && availability.isAvailable === true && (
                    <p className="text-sm text-green-600">URL adresa je dostupná</p>
                  )}
                </div>
              </div>
            </div>

            {/* User Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Vaše údaje</h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="user-name" className="block text-sm font-medium text-gray-700">
                    Jméno a příjmení
                  </label>
                  <input
                    id="user-name"
                    type="text"
                    placeholder="Jan Novák"
                    {...register("user.name")}
                    className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 ${
                      errors.user?.name ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {errors.user?.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500"
                    >
                      {errors.user.name.message}
                    </motion.p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="user-email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      id="user-email"
                      type="email"
                      placeholder="jan@example.com"
                      {...register("user.email")}
                      className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 ${
                        errors.user?.email ? "border-red-500" : "border-gray-200"
                      }`}
                    />
                    {errors.user?.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-500"
                      >
                        {errors.user.email.message}
                      </motion.p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="user-password" className="block text-sm font-medium text-gray-700">
                      Heslo
                    </label>
                    <input
                      id="user-password"
                      type="password"
                      placeholder="Minimálně 8 znaků"
                      {...register("user.password")}
                      className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 ${
                        errors.user?.password ? "border-red-500" : "border-gray-200"
                      }`}
                    />
                    {errors.user?.password && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-500"
                      >
                        {errors.user.password.message}
                      </motion.p>
                    )}
                  </div>
                </div>
              </div>
            </div>

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

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isLoading || availability.isAvailable === false || availability.isChecking}
            >
              {isLoading ? "Vytváří se..." : "Vytvořit pracoviště"}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Už máte účet?{" "}
              <Link href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                Přihlásit se
              </Link>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
