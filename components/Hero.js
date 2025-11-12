"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollBasedAnimation from "./ScrollBasedAnimation";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const heroRef = useRef(null);
  const { t, i18n } = useTranslation();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const isRTL = i18n.language === 'ar';

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-black"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Video */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 h-[120%] w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source src="https://www.pexels.com/download/video/7947407/" type="video/mp4" />
        </video>
      </motion.div>

      {/* Minimal Gradient Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className={`relative z-10 flex flex-col justify-center h-full pt-24 ${
          isRTL ? 'lg:pr-12 lg:pl-6' : 'lg:pl-12 lg:pr-6'
        }`}
      >
        <div className="max-w-7xl px-6">
          <div className={`max-w-3xl space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            {/* Headline */}
            <ScrollBasedAnimation delay={0.1} duration={0.6} direction="up" offset={30}>
              <h1 className="font-bold leading-tight text-white">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  {t('hero.title.part1')}
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#00b7ff] mt-2">
                  {t('hero.title.part2')}
                </span>
              </h1>
            </ScrollBasedAnimation>

            {/* Vision Paragraph */}
            <ScrollBasedAnimation delay={0.2} duration={0.6} direction="up" offset={20}>
              <p className="text-white/80 text-base sm:text-lg md:text-xl">
                {t('hero.description')}
              </p>
            </ScrollBasedAnimation>

            {/* CTA Buttons */}
            <ScrollBasedAnimation delay={0.3} duration={0.6} direction="up" offset={20}>
              <div className={`flex flex-wrap gap-4 pt-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                <a
                  href="#services"
                  className="bg-[#00b7ff] px-8 py-4 text-white font-semibold text-base transition-colors duration-300 hover:bg-[#0099dd]"
                >
                  {t('hero.cta.services')}
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white/30 px-8 py-4 text-white font-semibold text-base transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
                >
                  {t('hero.cta.contact')}
                </a>
              </div>
            </ScrollBasedAnimation>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
