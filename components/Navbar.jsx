"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: t('navigation.home'), href: "#home" },
    { name: t('navigation.services'), href: "#services" },
    { name: t('navigation.about'), href: "#about" },
    { name: t('navigation.solutions'), href: "#solutions" },
    { name: t('navigation.contact'), href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`absolute left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white shadow-lg shadow-black/20 backdrop-blur-xl"
            : "bg-transparent"
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className={`mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-12 lg:py-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <motion.a
            href="#home"
            className="relative z-50 flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/CaLogo.png"
              alt="Creative Accounting"
              width={80}
              height={80}
              priority
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative text-lg font-semibold uppercase tracking-widest
                  ${isScrolled ? 'text-black/70' : "text-white/70"} transition-colors duration-300 hover:text-[#00b7ff]`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#00b7ff] transition-all duration-300 ease-out group-hover:w-full" />
              </motion.a>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                isOpen
                  ? { rotate: 45, y: 6, backgroundColor: "#00b7ff" }
                  : { rotate: 0, y: 0, backgroundColor: isScrolled ? "#000000" : "#ffffff" }
              }
              transition={{ duration: 0.3 }}
              className="h-0.5 w-7"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`h-0.5 w-7 ${isScrolled ? 'bg-black' : 'bg-white'}`}
            />
            <motion.span
              animate={
                isOpen
                  ? { rotate: -45, y: -6, backgroundColor: "#00b7ff" }
                  : { rotate: 0, y: 0, backgroundColor: isScrolled ? "#000000" : "#ffffff" }
              }
              transition={{ duration: 0.3 }}
              className="h-0.5 w-7"
            />
          </button>
        </div>

        {/* Top Border Accent */}
        <AnimatePresence>
          {isScrolled && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.5 }}
              className="h-px w-full origin-left bg-gradient-to-r from-transparent via-[#00b7ff] to-transparent"
            />
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden overflow-hidden w-screen h-screen max-w-full"
            dir={isRTL ? "rtl" : "ltr"}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full bg-[linear-gradient(to_right,#00b7ff_1px,transparent_1px),linear-gradient(to_bottom,#00b7ff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>

            {/* Menu Content */}
            <div className={`relative flex h-full flex-col items-center justify-center gap-8 ${isRTL ? 'text-right' : 'text-center'}`}>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRTL ? -50 : 50 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group relative text-3xl font-bold text-gray-600 transition-colors duration-300 hover:text-[#00b7ff]"
                >
                  {link.name}
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 w-0 bg-[#00b7ff] transition-all duration-300 group-hover:w-full"
                  />
                </motion.a>
              ))}

              {/* Language Switcher for Mobile */}
              <div className="mt-8">
                <LanguageSwitcher isMobile={true} />
              </div>

              {/* Bottom Accent Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-20 left-0 h-1 w-full origin-center bg-gradient-to-r from-transparent via-[#00b7ff] to-transparent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}