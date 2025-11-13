import SolutionsSection from "../components/home/SolutionFeatures";
import Hero from "../components/Hero";
import About from "../components/home/About";
import Services from "../components/Services";
import TestimonialSection from "@/components/home/Testimonial";
import Contact from "../components/home/Contact";
export const metadata = {
  title: "خدمات محاسبة محترفة في الرياض والمدن السعودية",
  description: "استمتع بخدمات محاسبة شاملة تشمل ضريبة القيمة المضافة، المراجعة، المحاسبة، الرواتب، والاستشارات المالية في الرياض، جدة، الدمام، الخبر، مكة، المدينة. حلول موثوقة لأعمالك.",
  keywords: [
    "محاسبة", "خدمات محاسبة", "محاسبة في السعودية", "ضريبة القيمة المضافة", "مراجعة حسابات", "محاسبة كتب", "رواتب", "استشارات مالية", "محاسبة الرياض", "محاسبة جدة", "محاسبة الدمام", "محاسبة الخبر", "محاسبة مكة", "محاسبة المدينة", "خدمات محاسبية سعودية",
    "accounting", "accounting services", "Saudi Arabia accounting", "VAT", "audit", "bookkeeping", "payroll", "financial consulting", "Riyadh accounting", "Jeddah accounting", "Dammam accounting", "Khobar accounting", "Makkah accounting", "Madinah accounting", "Saudi accounting services"
  ],
  openGraph: {
    title: "خدمات محاسبة محترفة في الرياض والمدن السعودية",
    description: "استمتع بخدمات محاسبة شاملة تشمل ضريبة القيمة المضافة، المراجعة، المحاسبة، الرواتب، والاستشارات المالية في الرياض، جدة، الدمام، الخبر، مكة، المدينة.",
    images: ["/CaLogo.png"],
    locale: "ar_SA"
  },
  alternates: {
    canonical: 'https://creativeeaccounting.com'
  }
};



export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Sticky Hero Section */}
      <div className="relative h-[200vh]">
        <div className="sticky top-0 h-screen bg-gradient-to-br from-[#000814] to-[#001d3d] text-white">
          <Hero />
        </div>
      </div>

      {/* About scrolls over Hero */}
      <section id="about" className="relative z-10 bg-white">
        <div className="text-gray-900">
          <About />
        </div>
      </section>

      {/* Rest of the site */}
      <section id="services" className="bg-gray-50">
        <div className="text-gray-900">
          <Services />
        </div>
      </section>

      <section id="solutions" className="bg-white">
        <div className="text-gray-900">
          <SolutionsSection />
        </div>
      </section>

      <section id="testimonials" className="bg-gray-50">
        <div className="text-gray-900">
          <TestimonialSection />
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-br from-[#000814] to-[#001d3d]">
        <div className="text-white">
          <Contact />
        </div>
      </section>
    </div>
  );
}
