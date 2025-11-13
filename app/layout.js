import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisScroll from "@/components/LenisScroll";
import SmoothScroll from "@/components/SmoothScroll";


const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
  weight: ['300', '400', '600', '700', '900'], // choose the weights you need
  display: 'swap',                    // Prevent FOIT (flash of invisible text)
})


export const metadata = {
  metadataBase: new URL('https://creativeeaccounting.com'),
  title: {
    default: "Creative Accounting | Professional Accounting Services Saudi Arabia",
    template: "%s | Creative Accounting Riyadh"
  },
  description: "Leading accounting firm in Riyadh, Saudi Arabia. Expert bookkeeping, VAT compliance, auditing, payroll & financial advisory services. ZATCA certified. Call +966 11 123 4567.",
  keywords: [
    "accounting services Riyadh", "bookkeeping Saudi Arabia", "VAT compliance Riyadh", "audit services Jeddah",
    "payroll management Saudi Arabia", "financial advisory Riyadh", "ZATCA compliance", "accounting firm Riyadh",
    "tax services Saudi Arabia", "business accounting Riyadh", "محاسبة الرياض", "خدمات محاسبية السعودية",
    "ضريبة القيمة المضافة الرياض", "مراجعة الحسابات جدة", "إدارة الرواتب السعودية"
  ],
  authors: [{ name: "Creative Accounting" }],
  creator: "Creative Accounting",
  publisher: "Creative Accounting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'ar': '/ar'
    }
  },
  openGraph: {
    title: "Creative Accounting Riyadh | Professional Accounting Services Saudi Arabia",
    description: "Leading accounting firm in Riyadh, Saudi Arabia. Expert bookkeeping, VAT compliance, auditing, payroll & financial advisory services. ZATCA certified.",
    url: "https://creativeeaccounting.com",
    siteName: "Creative Accounting",
    images: [
      {
        url: "/CaLogo.png",
        width: 1200,
        height: 630,
        alt: "Creative Accounting Riyadh Logo"
      }
    ],
    locale: "en_SA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Accounting Riyadh | Professional Accounting Services Saudi Arabia",
    description: "Leading accounting firm in Riyadh, Saudi Arabia. Expert bookkeeping, VAT compliance, auditing, payroll & financial advisory services.",
    images: ["/CaLogo.png"],
    creator: "@creativeaccounting"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code'
  }
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Creative Accounting",
    "description": "Leading accounting firm in Riyadh, Saudi Arabia providing expert bookkeeping, VAT compliance, auditing, payroll and financial advisory services.",
    "url": "https://creativeeaccounting.com",
    "logo": "https://creativeeaccounting.com/logo.png",
    "image": "https://creativeeaccounting.com/logo.png",
    "telephone": "+966-11-123-4567",
    "email": "info@creativeeaccounting.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rifah Ibn Rafi Street - Olaya District",
      "addressLocality": "Riyadh",
      "addressRegion": "Riyadh Province",
      "postalCode": "12345",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.68066,
      "longitude": 46.69795
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Riyadh"
      },
      {
        "@type": "City",
        "name": "Jeddah"
      },
      {
        "@type": "City",
        "name": "Dammam"
      },
      {
        "@type": "City",
        "name": "Khobar"
      },
      {
        "@type": "City",
        "name": "Makkah"
      },
      {
        "@type": "City",
        "name": "Madinah"
      }
    ],
    "serviceType": [
      "Bookkeeping Services",
      "VAT Compliance",
      "Audit Services",
      "Payroll Management",
      "Financial Advisory",
      "Tax Services",
      "ZATCA Compliance"
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 08:00-17:00",
    "sameAs": [
      "https://www.facebook.com/creativeaccounting",
      "https://www.linkedin.com/company/creative-accounting",
      "https://twitter.com/creativeacc"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Accounting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bookkeeping Services",
            "description": "Professional bookkeeping and financial record management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "VAT Compliance Services",
            "description": "ZATCA VAT registration and compliance services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Audit Services",
            "description": "Comprehensive financial auditing and assurance services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Payroll Management",
            "description": "Complete payroll processing and HR accounting services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Financial Advisory",
            "description": "Strategic financial planning and business advisory services"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="canonical" href="https://creativeeaccounting.com" />
        <link rel="alternate" hrefLang="en" href="https://creativeeaccounting.com" />
      </head>
      <body
        className={`${cairo.variable} antialiased relative font-sans`}
        style={{ backgroundColor: '#000814', color: '#FFFFFF' }}
      >
      

        <div className="min-h-screen flex flex-col relative z-10">
          <div className="relative z-10 flex-grow">
            <Navbar/>
        <SmoothScroll>{children}</SmoothScroll >
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
