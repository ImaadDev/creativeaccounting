"use client";

import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import ScrollBasedAnimation from "../../components/ScrollBasedAnimation";
import Image from "next/image";

export default function BlogPage() {
  const heroRef = useRef(null);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Blog article data with translation support
  const blogArticles = {
    automation: {
      title: t('blogArticles.automation.title'),
      excerpt: t('blogArticles.automation.excerpt'),
      author: 'Ahmed Al-Rashid',
      date: 'Nov 10, 2025',
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      readTime: t('blogArticles.automation.readTime'),
      category: t('blogArticles.automation.category'),
      tags: t('blogArticles.automation.tags', { returnObjects: true })
    },
    zatca: {
      title: t('blogArticles.zatca.title'),
      excerpt: t('blogArticles.zatca.excerpt'),
      author: 'Sarah Mohamed',
      date: 'Oct 22, 2025',
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      readTime: t('blogArticles.zatca.readTime'),
      category: t('blogArticles.zatca.category'),
      tags: t('blogArticles.zatca.tags', { returnObjects: true })
    },
    security: {
      title: t('blogArticles.security.title'),
      excerpt: t('blogArticles.security.excerpt'),
      author: 'Khalid Hassan',
      date: 'Sep 15, 2025',
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80",
      readTime: t('blogArticles.security.readTime'),
      category: t('blogArticles.security.category'),
      tags: t('blogArticles.security.tags', { returnObjects: true })
    },
    analytics: {
      title: t('blogArticles.analytics.title'),
      excerpt: t('blogArticles.analytics.excerpt'),
      author: 'Fatima Al-Zahrani',
      date: 'Aug 30, 2025',
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
      readTime: t('blogArticles.analytics.readTime'),
      category: t('blogArticles.analytics.category'),
      tags: t('blogArticles.analytics.tags', { returnObjects: true })
    },
    scaling: {
      title: t('blogArticles.scaling.title'),
      excerpt: t('blogArticles.scaling.excerpt'),
      author: 'Omar Abdullah',
      date: 'Jul 12, 2025',
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      readTime: t('blogArticles.scaling.readTime'),
      category: t('blogArticles.scaling.category'),
      tags: t('blogArticles.scaling.tags', { returnObjects: true })
    },
    tips: {
      title: t('blogArticles.tips.title'),
      excerpt: t('blogArticles.tips.excerpt'),
      author: 'Layla Ibrahim',
      date: 'Jun 5, 2025',
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      readTime: t('blogArticles.tips.readTime'),
      category: t('blogArticles.tips.category'),
      tags: t('blogArticles.tips.tags', { returnObjects: true })
    }
  };

  // Generate slugs for articles
  const articles = Object.entries(blogArticles).map(([key, article]) => ({
    ...article,
    slug: key
  }));

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <div className="min-h-screen bg-gray-50" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section - Full Screen */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden bg-black"
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* Background Image */}
        <motion.div style={{ y: videoY }} className="absolute inset-0 h-[120%] w-full">
          <img
            src="https://images.unsplash.com/photo-1657639028182-24e11504c7c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Professional workspace and technology"
            className="h-full w-full object-cover opacity-70"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00B7FF]/80 to-[#0099CC]/60" />

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
                    {t('solutionFeatures.section.title')}
                  </span>
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-100 mt-2">
                    {isRTL ? 'ونصائح حصرية' : 'Insights & Tips'}
                  </span>
                </h1>
              </ScrollBasedAnimation>

              {/* Description */}
              <ScrollBasedAnimation delay={0.2} duration={0.6} direction="up" offset={20}>
                <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl">
                  {t('solutionFeatures.section.description')}
                </p>
              </ScrollBasedAnimation>

            
            </div>
          </div>
        </motion.div>
      </section>

      {/* Articles Section */}
      <section
        id="articles"
        className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-20 lg:py-32"
      >
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#00b7ff_2px,transparent_2px),linear-gradient(to_bottom,#00b7ff_2px,transparent_2px)] bg-[size:3rem_3rem]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          {/* Featured Article */}
          <ScrollBasedAnimation direction="up" delay={0.3} duration={0.6}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {t('blogPage.hero.featured')}
              </h2>
              <div className="group relative max-w-4xl mx-auto cursor-pointer transform transition-all duration-500 hover:scale-105">
                <Link href={`/blog/${featuredArticle.slug}`}>
                  <div className="relative h-80 lg:h-96 overflow-hidden transition-colors duration-300">
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                      <div className={`flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="bg-[#00b7ff] px-3 py-1 text-sm font-semibold">
                          {featuredArticle.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-[#00b7ff] transition-colors duration-300">
                        {featuredArticle.title}
                      </h3>
                      <p className="text-lg leading-relaxed mb-6">
                        {featuredArticle.excerpt}
                      </p>
                      <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="text-sm">{featuredArticle.author} • {featuredArticle.date}</span>
                        <span className={`flex items-center gap-2 text-sm font-semibold group-hover:text-[#00b7ff] transition-colors duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          {t('blogPage.hero.readMore')}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </ScrollBasedAnimation>

          {/* Blog Cards Grid - 3D Flip Cards */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {otherArticles.map((article, index) => (
              <ScrollBasedAnimation
                key={article.slug}
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
                      <div className="relative h-40 w-full overflow-hidden">
                        <Image
                          src={article.image}
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
                        {article.author} • {article.date}
                      </p>
                      <p className="mb-6 text-sm">
                        {article.readTime} • {article.category}
                      </p>
                      <Link
                        href={`/blog/${article.slug}`}
                        className={`border-2 border-white px-6 py-2 text-sm font-semibold transition-all hover:bg-white hover:text-[#00b7ff] ${isRTL ? 'self-start' : 'self-center'}`}
                      >
                        {t('blogPage.hero.readMore')}
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollBasedAnimation>
            ))}
          </div>

          {/* CTA Section */}
          <ScrollBasedAnimation direction="up" delay={0.8} duration={0.6}>
            <div className="mt-20 lg:mt-32 text-center">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-16 px-8">
                <div className="relative z-10 max-w-2xl mx-auto text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    {isRTL ? 'هل تحتاج إلى مساعدة مالية؟' : 'Need Expert Financial Guidance?'}
                  </h3>
                  <p className="text-gray-600 text-lg mb-8">
                    {isRTL
                      ? 'فريق المحاسبة الإبداعية هنا لمساعدتك في تحقيق النجاح المالي والامتثال للوائح السعودية.'
                      : 'Our team of financial experts is here to help you achieve financial success and ensure ZATCA compliance.'
                    }
                  </p>
                  <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center bg-[#00b7ff] px-8 py-4 text-base font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#0099dd] hover:scale-105"
                    >
                      {isRTL ? 'احجز استشارة مجانية' : 'Book Free Consultation'}
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center border-2 border-[#00b7ff] px-8 py-4 text-base font-bold uppercase tracking-wider text-[#00b7ff] transition-all duration-300 hover:bg-[#00b7ff] hover:text-white"
                    >
                      {isRTL ? 'عرض خدماتنا' : 'View Our Services'}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollBasedAnimation>
        </div>
      </section>
    </div>
  );
}