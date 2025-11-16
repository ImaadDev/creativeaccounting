"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import ScrollBasedAnimation from "../ScrollBasedAnimation";
import Image from "next/image";

export default function BlogSection() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const articles = t('solutionFeatures.articles', { returnObjects: true });

  const articleImages = [
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80",
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
  ];

  return (
    <section
      id="blogs"
      className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-20 lg:py-32"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#00b7ff_2px,transparent_2px),linear-gradient(to_bottom,#00b7ff_2px,transparent_2px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className={`mb-16 text-center lg:mb-24 ${isRTL ? 'text-right' : 'text-left'}`}>
          <ScrollBasedAnimation direction="up" delay={0} duration={0.6}>
            <div className={`inline-flex items-center gap-3 justify-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="h-px w-12 bg-[#00b7ff]" />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#00b7ff]">
                {t('solutionFeatures.section.badge')}
              </span>
              <div className="h-px w-12 bg-[#00b7ff]" />
            </div>
          </ScrollBasedAnimation>

          <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              {t('solutionFeatures.section.title')}
            </h2>
          </ScrollBasedAnimation>

          <ScrollBasedAnimation direction="up" delay={0.2} duration={0.6}>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
              {t('solutionFeatures.section.description')}
            </p>
          </ScrollBasedAnimation>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(articles) && articles.map((article, index) => (
            <ScrollBasedAnimation
              key={index}
              direction="up"
              delay={0.1 + index * 0.05}
              duration={0.6}
            >
              <div
                className="group relative h-[400px] cursor-pointer"
                style={{ perspective: "1000px" }}
                onMouseEnter={() => setFlippedIndex(index)}
                onMouseLeave={() => setFlippedIndex(null)}
              >
                <div
                  className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    flippedIndex === index ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 flex flex-col bg-white [backface-visibility:hidden] [transform:rotateY(0deg)]">
                    <div className="relative h-60 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={articleImages[index]}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Top Accent Line */}
                      <div className="absolute left-0 top-0 h-1 w-0 bg-[#00b7ff] transition-all duration-500 group-hover:w-full" />
                    </div>

                    <div className="flex flex-col p-6 flex-grow">
                      <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#00b7ff]">
                        {article.title}
                      </h3>
                      <p className="flex-grow text-sm leading-relaxed text-gray-600">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#00b7ff] transition-all duration-500 group-hover:w-full" />
                  </div>

                  {/* Back Side */}
                  <div className={`absolute inset-0 flex flex-col items-center justify-center border-2 border-[#00b7ff] bg-[#00b7ff] p-6 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)] ${isRTL ? 'text-right' : 'text-center'}`}>
                    <h3 className="mb-4 text-2xl font-bold">{article.title}</h3>
                    <p className="mb-4 text-sm">
                      {t('solutionFeatures.buttons.by')} {article.author} • {article.date}
                    </p>
                    <a
                      href="#"
                      className={`border-2 border-white px-6 py-2 text-sm font-semibold transition-all hover:bg-white hover:text-[#00b7ff] ${isRTL ? 'self-start' : 'self-center'}`}
                    >
                      {t('solutionFeatures.buttons.readMore')}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollBasedAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
