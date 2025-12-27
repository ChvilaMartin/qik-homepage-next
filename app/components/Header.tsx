"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

const navLinks = [
  { href: "/#problem", label: "Problém" },
  { href: "/#solution", label: "Řešení" },
  { href: "/#how-it-works", label: "Jak to funguje" },
  { href: "/stavba", label: "Stavba" },
  { href: "/#pricing", label: "Ceník" },
];

interface HeaderProps {
  variant?: "light" | "dark";
}

export default function Header({ variant = "light" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // For dark variant, always use dark styling; for light variant, use dark when scrolled
  const useDarkStyle = variant === "dark" || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          useDarkStyle
            ? "bg-white/80 backdrop-blur-lg shadow-lg shadow-gray-200/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="QIK"
                width={100}
                height={48}
                className={`h-8 md:h-10 w-auto transition-all duration-300 ${
                  useDarkStyle ? "" : "invert"
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-primary-500 ${
                    useDarkStyle ? "text-gray-700" : "text-white/90"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/login"
                className={`text-sm font-medium transition-colors duration-300 ${
                  useDarkStyle
                    ? "text-gray-700 hover:text-primary-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Přihlásit se
              </Link>
              <Button
                href="/signup"
                variant={useDarkStyle ? "primary" : "secondary"}
                size="sm"
              >
                Vyzkoušet zdarma
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 transition-all duration-300 ${
                    useDarkStyle ? "bg-gray-900" : "bg-white"
                  } ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-2"
                      : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 transition-all duration-300 ${
                    useDarkStyle ? "bg-gray-900" : "bg-white"
                  } ${isMobileMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`w-full h-0.5 transition-all duration-300 ${
                    useDarkStyle ? "bg-gray-900" : "bg-white"
                  } ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-2"
                      : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-6">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-medium text-gray-900 hover:text-primary-600"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto pb-8 flex flex-col gap-4">
                <Button href="/login" variant="outline" size="lg" className="w-full">
                  Přihlásit se
                </Button>
                <Button href="/signup" variant="primary" size="lg" className="w-full">
                  Vyzkoušet zdarma
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
