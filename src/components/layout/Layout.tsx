import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { GlobalSchema } from "@/components/GlobalSchema";
import { SEO } from '@/components/SEO';  // your generic SEO component using react-helmet-async

// inside Layout JSX, as the very first child
<SEO
  title="Dreevn — Luxury Digital Company"
  description="Dreevn builds premium brands, high-performing websites and AI-powered growth systems for ambitious companies."
  url="https://dreevn.com"
  image="/og/default.jpg"   // <- global fallback (you created this)
  />




interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* ✅ SEO SCHEMA INJECTED ON EVERY PAGE */}
      <GlobalSchema />

      <Navbar />
      <main>{children}</main>
      <Footer />
      
    </div>
  );
};
