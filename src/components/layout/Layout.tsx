import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { GlobalSchema } from "@/components/GlobalSchema";

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
