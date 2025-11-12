import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
  weight: ['300', '400', '600', '700', '900'], // choose the weights you need
  display: 'swap',                    // Prevent FOIT (flash of invisible text)
})


export const metadata = {
  title: "Creative Accounting - Professional Financial Services",
  description: "Expert accounting, auditing, and financial advisory services in Saudi Arabia. Empowering businesses with precision, transparency, and impact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${cairo.variable} antialiased relative font-sans`}
        style={{ backgroundColor: '#000814', color: '#FFFFFF' }}
      >
        <div className="min-h-screen flex flex-col">
          <div className="relative z-10 flex-grow">
            <Navbar/>
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
