import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Palette, Globe, TrendingUp, Zap, MessageSquare, BarChart3 } from 'lucide-react';
import logoWhite from '@/assets/dreevn_logo_white.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services', hasDropdown: true },
  { name: 'AI Suite', path: '/ai' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Process', path: '/process' },
  { name: 'About', path: '/about' },
  { name: 'Team', path: '/team' },
];

const serviceDropdown = [
  { name: 'Brand Identity', desc: 'Full visual systems & messaging', icon: Palette, path: '/services#branding' },
  { name: 'Web Design', desc: 'High-performance websites', icon: Globe, path: '/services#web' },
  { name: 'Growth Marketing', desc: 'Paid campaigns & CRO', icon: TrendingUp, path: '/services#growth' },
  { name: 'AI Agents', desc: 'Custom automation', icon: Zap, path: '/ai' },
  { name: 'WhatsApp Automation', desc: 'Conversational flows', icon: MessageSquare, path: '/services#whatsapp' },
  { name: 'Analytics & CRO', desc: 'Data-driven optimization', icon: BarChart3, path: '/services#analytics' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isAIPage = location.pathname === '/ai';


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <img 
                src={logoWhite} 
                alt="Dreevn" 
                className="h-8 md:h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setIsDropdownOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setIsDropdownOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`nav-link text-sm flex items-center gap-1 ${
                      location.pathname === link.path ? 'active' : ''
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                        >
                          <div className="bg-card border border-border rounded-2xl shadow-2xl shadow-black/20 p-6 min-w-[480px]">
                            <div className="grid grid-cols-2 gap-4">
                              {serviceDropdown.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors group"
                                >
                                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                                    <item.icon className="w-5 h-5 text-gold" />
                                  </div>
                                  <div>
                                    <p className="font-medium text-foreground group-hover:text-gold transition-colors">{item.name}</p>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-border">
                              <Link to="/services" className="text-sm text-gold hover:underline inline-flex items-center gap-1">
                                View all services →
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
               <div className="hidden lg:block">
                <Link
                    to="/contact#form"
                     className="btn-primary text-sm"
                     >
                    {isAIPage ? "Explore AI Suite" : "Work With Us"}
                </Link>
                </div>


            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-card border-l border-border p-8 pt-24 overflow-y-auto"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-xl font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'text-gold'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Service Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4 border-t border-border"
                >
                  <p className="text-sm text-muted-foreground mb-4">Services</p>
                  <div className="space-y-3">
                    {serviceDropdown.slice(0, 4).map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <item.icon className="w-4 h-4 text-gold" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-6"
                >
                  <Link  
                  to="/contact#form"
    className="btn-primary w-full text-center block"
  >
    {isAIPage ? "Explore AI Suite" : "Work With Us"}
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};