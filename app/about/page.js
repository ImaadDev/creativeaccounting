"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import SmoothMotion from "@/components/ScrollBasedAnimation";
import AboutHeroSection from "../../components/AboutHero";
import { Building, Lightbulb, Handshake, CheckCircle, Target, DollarSign } from 'lucide-react';


export default function About() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const aboutSections = t('about.sections', { returnObjects: true });

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <AboutHeroSection />

      {/* Company Stats Section */}
      <section className="py-16 bg-[#00B7FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <SmoothMotion direction="up" delay={0}>
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">10+</div>
                <div className="text-sm lg:text-base opacity-90">
                  {t('about.stats.experience')}
                </div>
              </div>
            </SmoothMotion>
            <SmoothMotion direction="up" delay={0.1}>
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
                <div className="text-sm lg:text-base opacity-90">
                  {t('about.stats.clients')}
                </div>
              </div>
            </SmoothMotion>
            <SmoothMotion direction="up" delay={0.2}>
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">50+</div>
                <div className="text-sm lg:text-base opacity-90">
                  {t('about.stats.professionals')}
                </div>
              </div>
            </SmoothMotion>
            <SmoothMotion direction="up" delay={0.3}>
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm lg:text-base opacity-90">
                  {t('about.stats.support')}
                </div>
              </div>
            </SmoothMotion>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Alternating Content Sections */}
          <div className="space-y-24">
            {aboutSections.map((section, index) => (
              <SmoothMotion
                key={index}
                direction={index % 2 === 0 ? (isRTL ? "right" : "left") : (isRTL ? "left" : "right")}
                delay={0.2}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Content Side */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                          {section.title}
                        </h3>
                        <p className="text-lg font-semibold text-[#00B7FF] mb-4">
                          {section.subtitle}
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {section.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">
                          {isRTL ? 'النقاط الرئيسية:' : 'Key Highlights:'}
                        </h4>
                        <ul className="space-y-2">
                          {section.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                              <div className="text-[#00B7FF] mt-1">✓</div>
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative">
                      <Image
                        src={`https://images.unsplash.com/photo-${[
                          "1522202176988-66273c2fd55f",
                          "1552664730-d307ca884978",
                          "1553484771-371a605b060b"
                        ][index]}?w=600&q=80`}
                        alt={section.title}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                      <div className={`absolute -bottom-4 ${isRTL ? '-left-4' : '-right-4'} bg-[#00B7FF] text-white p-4 font-bold text-sm shadow-lg`}>
                        {section.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              </SmoothMotion>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <SmoothMotion direction="up" delay={0}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('about.whyChoose.title')}
              </h2>
            </SmoothMotion>
            <SmoothMotion direction="up" delay={0.1}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('about.whyChoose.subtitle')}
              </p>
            </SmoothMotion>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                key: "local",
                title: t('about.whyChoose.items.local.title'),
                description: t('about.whyChoose.items.local.description'),
                icon: <Building />,
                backContent: t('about.whyChoose.items.local.backContent')
              },
              {
                key: "innovative",
                title: t('about.whyChoose.items.innovative.title'),
                description: t('about.whyChoose.items.innovative.description'),
                icon: <Lightbulb />,
                backContent: t('about.whyChoose.items.innovative.backContent')
              },
              {
                key: "support",
                title: t('about.whyChoose.items.support.title'),
                description: t('about.whyChoose.items.support.description'),
                icon: <Handshake />,
                backContent: t('about.whyChoose.items.support.backContent')
              },
              {
                key: "compliance",
                title: t('about.whyChoose.items.compliance.title'),
                description: t('about.whyChoose.items.compliance.description'),
                icon: <CheckCircle />,
                backContent: t('about.whyChoose.items.compliance.backContent')
              },
              {
                key: "personalized",
                title: t('about.whyChoose.items.personalized.title'),
                description: t('about.whyChoose.items.personalized.description'),
                icon: <Target />,
                backContent: t('about.whyChoose.items.personalized.backContent')
              },
              {
                key: "value",
                title: t('about.whyChoose.items.value.title'),
                description: t('about.whyChoose.items.value.description'),
                icon: <DollarSign />,
                backContent: t('about.whyChoose.items.value.backContent')
              }
            ].map((item, index) => (
              <SmoothMotion key={index} direction="up" delay={0.2 + index * 0.1}>
                <div
                  className="group relative h-[300px] cursor-pointer"
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
                      <div className="flex flex-col p-8 flex-grow justify-center items-center text-center">
                        <div className="text-5xl mb-6">{item.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#00b7ff] transition-all duration-500 group-hover:w-full" />
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center border-2 border-[#00b7ff] bg-[#00b7ff] p-8 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div className="text-4xl mb-6">{item.icon}</div>
                      <h3 className="mb-6 text-2xl font-bold">{item.title}</h3>
                      <p className="text-base leading-relaxed">{item.backContent}</p>
                    </div>
                  </div>
                </div>
              </SmoothMotion>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-[#00B7FF] to-[#0099CC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <SmoothMotion direction="up" delay={0}>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('about.cta.title')}
            </h2>
          </SmoothMotion>
          <SmoothMotion direction="up" delay={0.1}>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              {t('about.cta.description')}
            </p>
          </SmoothMotion>
          <SmoothMotion direction="up" delay={0.2}>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <a
                href="/contact"
                className="bg-white text-[#00B7FF] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                {t('about.cta.contact')}
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-[#00B7FF] transition-colors duration-300"
              >
                {t('about.cta.services')}
              </a>
            </div>
          </SmoothMotion>
        </div>
      </section>
    </div>
  );
}

