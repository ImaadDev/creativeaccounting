"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useRouter } from "next/navigation";
import ScrollBasedAnimation from "../../../components/ScrollBasedAnimation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, User, Tag, Share2, BookOpen, Calendar } from "lucide-react";

export default function BlogDetailPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const params = useParams();
  const router = useRouter();
  
  // Get article slug from URL
  const slug = params.slug;

  // Blog articles with translation support
  const fullArticles = {
    automation: {
      slug: "automation",
      title: t('blogArticles.automation.title'),
      excerpt: t('blogArticles.automation.excerpt'),
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      author: "Ahmed Al-Rashid",
      authorBio: t('blogArticles.automation.authorBio'),
      date: "Nov 10, 2025",
      category: t('blogArticles.automation.category'),
      readTime: t('blogArticles.automation.readTime'),
      tags: t('blogArticles.automation.tags', { returnObjects: true }),
      content: t('blogArticles.automation.content')
    },
    zatca: {
      slug: "zatca",
      title: t('blogArticles.zatca.title'),
      excerpt: t('blogArticles.zatca.excerpt'),
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      author: "Sarah Mohamed",
      authorBio: t('blogArticles.zatca.authorBio'),
      date: "Oct 22, 2025",
      category: t('blogArticles.zatca.category'),
      readTime: t('blogArticles.zatca.readTime'),
      tags: t('blogArticles.zatca.tags', { returnObjects: true }),
      content: t('blogArticles.zatca.content')
    },
    security: {
      slug: "security",
      title: t('blogArticles.security.title'),
      excerpt: t('blogArticles.security.excerpt'),
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80",
      author: "Khalid Hassan",
      authorBio: t('blogArticles.security.authorBio'),
      date: "Sep 15, 2025",
      category: t('blogArticles.security.category'),
      readTime: t('blogArticles.security.readTime'),
      tags: t('blogArticles.security.tags', { returnObjects: true }),
      content: t('blogArticles.security.content')
    },
    analytics: {
      slug: "analytics",
      title: t('blogArticles.analytics.title'),
      excerpt: t('blogArticles.analytics.excerpt'),
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
      author: "Fatima Al-Zahrani",
      authorBio: t('blogArticles.analytics.authorBio'),
      date: "Aug 30, 2025",
      category: t('blogArticles.analytics.category'),
      readTime: t('blogArticles.analytics.readTime'),
      tags: t('blogArticles.analytics.tags', { returnObjects: true }),
      content: t('blogArticles.analytics.content')
    },
    scaling: {
      slug: "scaling",
      title: t('blogArticles.scaling.title'),
      excerpt: t('blogArticles.scaling.excerpt'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      author: "Omar Abdullah",
      authorBio: t('blogArticles.scaling.authorBio'),
      date: "Jul 12, 2025",
      category: t('blogArticles.scaling.category'),
      readTime: t('blogArticles.scaling.readTime'),
      tags: t('blogArticles.scaling.tags', { returnObjects: true }),
      content: t('blogArticles.scaling.content')
    },
    tips: {
      slug: "tips",
      title: t('blogArticles.tips.title'),
      excerpt: t('blogArticles.tips.excerpt'),
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      author: "Layla Ibrahim",
      authorBio: t('blogArticles.tips.authorBio'),
      date: "Jun 5, 2025",
      category: t('blogArticles.tips.category'),
      readTime: t('blogArticles.tips.readTime'),
      tags: t('blogArticles.tips.tags', { returnObjects: true }),
      content: t('blogArticles.tips.content')
    }
  };

  // Find the current article
  const article = fullArticles[slug];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center" dir={isRTL ? "rtl" : "ltr"}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('blogPage.navigation.articleNotFound')}
          </h1>
          <Link href="/blog" className="text-[#00b7ff] hover:underline">
            {t('blogPage.navigation.backToBlog')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      {/* Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={() => router.back()}
            className={`flex items-center gap-2 text-[#00b7ff] hover:text-[#00a0d1] transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            {t('blogPage.navigation.backToBlog')}
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Article Meta */}
          <ScrollBasedAnimation direction="up" delay={0} duration={0.6}>
            <div className={`flex items-center gap-6 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#00b7ff]" />
                <span className="text-[#00b7ff] font-semibold">{article.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">{article.readTime}</span>
              </div>
            </div>
          </ScrollBasedAnimation>

          {/* Article Title */}
          <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              {article.title}
            </h1>
          </ScrollBasedAnimation>

          {/* Article Excerpt */}
          <ScrollBasedAnimation direction="up" delay={0.2} duration={0.6}>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {article.excerpt}
            </p>
          </ScrollBasedAnimation>

          {/* Author Info */}
          <ScrollBasedAnimation direction="up" delay={0.3} duration={0.6}>
            <div className={`flex items-center gap-4 pb-8 border-b border-gray-200 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-12 h-12 bg-[#00b7ff] rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{article.author}</h3>
                <p className="text-sm text-gray-600">{article.authorBio}</p>
              </div>
            </div>
          </ScrollBasedAnimation>
        </div>
      </section>

      {/* Featured Image */}
      <ScrollBasedAnimation direction="up" delay={0.4} duration={0.6}>
        <div className="relative h-64 md:h-96 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      </ScrollBasedAnimation>

      {/* Article Content */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <ScrollBasedAnimation direction="up" delay={0.5} duration={0.6}>
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-blockquote:border-[#00b7ff] prose-blockquote:bg-gray-50 prose-blockquote:p-6 prose-blockquote:rounded-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </ScrollBasedAnimation>

          {/* Tags */}
          <ScrollBasedAnimation direction="up" delay={0.6} duration={0.6}>
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {isRTL ? 'العلامات' : 'Tags'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-none hover:bg-[#00b7ff] hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollBasedAnimation>

          {/* Share Buttons */}
          <ScrollBasedAnimation direction="up" delay={0.7} duration={0.6}>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-gray-900 font-semibold">
                  {isRTL ? 'مشاركة' : 'Share'}
                </span>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:border-[#00b7ff] hover:text-[#00b7ff] transition-colors duration-300">
                  <Share2 className="w-4 h-4" />
                  {isRTL ? 'مشاركة' : 'Share'}
                </button>
              </div>
            </div>
          </ScrollBasedAnimation>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <ScrollBasedAnimation direction="up" delay={0.8} duration={0.6}>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {isRTL ? 'مقالات ذات صلة' : 'Related Articles'}
            </h2>
          </ScrollBasedAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(fullArticles)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, relatedArticle], index) => (
              <ScrollBasedAnimation key={key} direction="up" delay={0.9 + index * 0.1} duration={0.6}>
                <Link href={`/blog/${relatedArticle.slug}`}>
                  <div className="group bg-white border border-gray-200 hover:border-[#00b7ff] transition-colors duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#00b7ff] transition-colors duration-300">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {relatedArticle.excerpt.substring(0, 100)}...
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{relatedArticle.date}</span>
                        <BookOpen className="w-4 h-4 text-[#00b7ff]" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollBasedAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}