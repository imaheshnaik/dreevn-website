import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const StickyCTA = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isAIPage = location.pathname === '/ai';

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = 'https://wa.me/919281163366?text=Hi%20Dreevn%2C%20I%27m%20interested%20in%20discussing%20a%20project.';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-24 right-6 z-50 flex gap-3"
        >
          {/* WhatsApp Quick Link */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </a>

          {/* Main CTA Button */}
          <Link
            to="/contact#form"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group flex items-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-primary to-gold-deep text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            {isAIPage ? (
              <>
                <Sparkles className="w-5 h-5" />
                <span className="hidden sm:inline">Explore AI Suite</span>
                <span className="sm:hidden">AI Suite</span>
              </>
            ) : (
              <>
                <span className="hidden sm:inline">Work With Us</span>
                <span className="sm:hidden">Let's Talk</span>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </>
            )}
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
