"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { z } from "zod";
import { checkWorkspaceAvailability } from "@/app/lib/actions";
import Button from "@/app/components/ui/Button";

const workspaceSchema = z.object({
  slug: z.string().min(1, "Název pracoviště je povinný"),
});

type WorkspaceInput = z.infer<typeof workspaceSchema>;

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [workspaceUrl, setWorkspaceUrl] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WorkspaceInput>({
    resolver: zodResolver(workspaceSchema)
  });

  const onSubmit = async (data: WorkspaceInput) => {
    setIsLoading(true);
    setSubmitError("");

    try {
      const result = await checkWorkspaceAvailability(data.slug);

      if (result.exists) {
        const publicDomain = process.env.NEXT_PUBLIC_QIK_APP_PUBLIC;
        const rawProtocol = process.env.NEXT_PUBLIC_QIK_APP_PUBLIC_PROTOCOL?.trim();
        const protocol = rawProtocol
          ? rawProtocol.replace("://", "").replace(/:$/, "")
          : "https";
        const url = `${protocol}://${data.slug}${publicDomain}`;

        setWorkspaceUrl(url);
        setIsSuccess(true);

        setTimeout(() => {
          window.location.href = url;
        }, 3000);
      } else {
        setSubmitError(result.error || "Pracoviště s tímto názvem neexistuje. Zkontrolujte prosím název nebo si vytvořte nové pracoviště.");
      }

    } catch (error) {
      setSubmitError("Při ověřování pracoviště došlo k chybě. Zkuste to prosím znovu.");
      console.error("Error checking workspace:", error);
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
                Pracoviště bylo nalezeno!
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Přesměrováváme vás do vašeho pracoviště...
              </p>
              <p className="text-xs text-gray-500">
                Automatické přesměrování za 3 sekundy
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="w-full pt-4"
            >
              <Button
                onClick={() => window.location.href = workspaceUrl}
                className="w-full"
              >
                Přejít do pracoviště nyní
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
      className="w-full max-w-md"
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </motion.div>
          <h1 className="text-2xl font-bold text-gray-900">Přihlášení</h1>
          <p className="mt-2 text-gray-600">
            Zadejte název vašeho pracoviště pro pokračování
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
              <p className="text-sm font-medium text-gray-700">Ověřujeme pracoviště...</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                Název pracoviště
              </label>
              <input
                id="slug"
                type="text"
                placeholder="nazev-pracoviste"
                {...register("slug")}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 ${
                  errors.slug ? "border-red-500" : "border-gray-200"
                }`}
              />
              {errors.slug && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500"
                >
                  {errors.slug.message}
                </motion.p>
              )}
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

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Ověřuje se..." : "Pokračovat"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Nemáte ještě pracoviště?{" "}
              <Link href="/signup" className="text-primary-600 hover:text-primary-700 font-medium">
                Vytvořit nové
              </Link>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
