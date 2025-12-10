import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logoWhite from '@/assets/dreevn_logo_white.png';

const footerLinks = {
  company: [
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Process', path: '/process' },
    { name: 'Careers', path: '/contact' },
  ],
  services: [
    { name: 'Brand Identity', path: '/services#branding' },
    { name: 'Web Design', path: '/services#web' },
    { name: 'Growth Marketing', path: '/services#growth' },
    { name: 'AI Suite', path: '/ai' },
  ],
  work: [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Case Studies', path: '/portfolio' },
    { name: 'Insights', path: '/insights' },
  ],
 legal: [
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms & Conditions', path: '/terms' },
  { name: 'Refund Policy', path: '/refund-policy' },
],

};

const socialLinks = [
  { name: 'X / Twitter', href: 'https://x.com/dreevnofficial' },
  { name: 'Instagram', href: 'https://instagram.com/dreevnofficial' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/dreevn' },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* AI CTA Strip */}
      <div className="section-container py-12">
        <div className="relative overflow-hidden rounded-2xl bg-secondary border border-gold/20 p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Want AI working for you 24/7?
              </h3>
              <p className="text-muted-foreground">
                Autonomous agents that handle sales, support, and growth while you sleep.
              </p>
            </div>
            <Link to="/ai" className="btn-gold shrink-0 inline-flex items-center gap-2">
              Explore AI Suite
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main CTA */}
      <div className="section-container py-16 border-t border-border">
        <div className="relative overflow-hidden rounded-3xl bg-secondary border border-gold/30 p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to build a world-class brand?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Tell us about your project — we will respond with a project plan & budget within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact#form" className="btn-gold">
                Work With Us
              </Link>
              <a 
                href="https://wa.me/919281163366" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-container py-16 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img src={logoWhite} alt="Dreevn" className="h-10 mb-6" />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Premium digital studio specializing in brand identity, high-performance websites, and AI-powered growth systems for ambitious businesses.
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:mahesh@dreevn.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
              >
                <Mail size={18} />
                <span>mahesh@dreevn.com</span>
              </a>
              <a 
                href="https://wa.me/919281163366" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
              >
                <Phone size={18} />
                <span>+91 9281163366</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} />
                <span>Hyderabad, India · Global Delivery</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Work</h3>
            <ul className="space-y-3">
              {footerLinks.work.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Connect</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="section-container py-6 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dreevn. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            {footerLinks.legal.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className="hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};