"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('footer.sections.services'), href: "#services" },
    { name: t('footer.sections.about'), href: "#about" },
    { name: t('footer.sections.contact'), href: "#contact" },
    { name: t('footer.sections.blog'), href: "#blogs" },
    { name: t('footer.sections.careers'), href: "#" },
  ];

  const legalLinks = t('footer.legal', { returnObjects: true });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-gray-700" dir={isRTL ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Main Content: Logo & Links */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-12 lg:gap-24">
          {/* Logo and Tagline */}
          <div className="md:col-span-1">
            <div className="relative mb-3 h-12 w-12">
              <Image
                src="/CaLogo.png"
                alt={t('footer.company.logoAlt')}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3 className={`mb-2 text-lg font-bold text-gray-800 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('footer.company.name')}
            </h3>
            <p className={`text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('footer.company.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className={`mb-4 text-base font-semibold text-gray-800 border-l-4 border-[#00b7ff] ${isRTL ? 'border-l-0 border-r-4 pr-3 text-right' : 'pl-3 text-left'}`}>
              {t('footer.sections.quickLinks')}
            </h4>
            <ul className={`space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#00b7ff] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Simplified) */}
          <div className="md:col-span-1">
            <h4 className={`mb-4 text-base font-semibold text-gray-800 border-l-4 border-[#00b7ff] ${isRTL ? 'border-l-0 border-r-4 pr-3 text-right' : 'pl-3 text-left'}`}>
              {t('footer.sections.contact')}
            </h4>
            <div className={`space-y-2 text-sm ${isRTL ? 'text-right' : 'text-left'}`}>
              <p>
                {t('footer.contactInfo.emailLabel')} <a href="mailto:hello@creativeaccounting.sa" className="hover:text-[#00b7ff]">hello@creativeaccounting.sa</a>
              </p>
              <p>
                {t('footer.contactInfo.phoneLabel')} <a href="tel:+966111234567" className="hover:text-[#00b7ff]">+966 11 123 4567</a>
              </p>
              <p>
                {t('footer.contactInfo.locationLabel')} Riyadh, Saudi Arabia
              </p>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="my-8 border-t border-gray-200" />

        {/* Bottom Bar: Copyright & Legal & Back to Top */}
        <div className={`flex flex-col items-center justify-between gap-4 md:flex-row ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Copyright */}
          <p className={`text-xs text-gray-600 ${isRTL ? 'text-right' : 'text-center md:text-left'}`}>
            © {currentYear} {t('footer.company.name')}. {t('footer.copyright')}
          </p>

          <div className={`flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Legal Links */}
            <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs text-gray-600 hover:text-[#00b7ff] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className={`group flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#00b7ff] hover:text-gray-800 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              {t('footer.backToTop')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}