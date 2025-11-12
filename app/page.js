import SolutionsSection from "../components/home/SolutionFeatures";
import Hero from "../components/Hero";
import About from "../components/home/About";
import Services from "../components/Services";
import TestimonialSection from "@/components/home/Testimonial";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <SolutionsSection/>
      <TestimonialSection/>
      <Contact/>
    </div>
  );
}
