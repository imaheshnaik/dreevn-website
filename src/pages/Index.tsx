import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Globe, TrendingUp, Bot, Package, BarChart3, Palette, Code, Megaphone, MessageCircle, PenTool, FileText } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/animations';
import { SEOHead } from '@/components/SEOHead';
import logoGold from '@/assets/dreevn_logo_gold.png';
import founderImage from '@/assets/founder-circle.png';
import heroTexture from '@/assets/hero_grid_texture.png';

const industries = [
  { name: 'Startups', desc: 'Rapid MVPs & scale-ready stacks' },
  { name: 'D2C', desc: 'High-converting storefronts & packaging' },
  { name: 'SaaS', desc: 'Onboarding & retention systems' },
  { name: 'Healthcare', desc: 'Secure & compliant platforms' },
  { name: 'Real Estate', desc: 'Lead-gen microsites' },
  { name: 'Finance', desc: 'Conversion-driven landing pages' },
  { name: 'Education', desc: 'Enrollment funnels' },
  { name: 'Mobility', desc: 'Campaign-driven launches' },
];

const capabilities = [
  { icon: Palette, title: 'Brand Strategy', desc: 'Market positioning & identity foundations' },
  { icon: PenTool, title: 'Visual Identity', desc: 'Logo systems & brand guidelines' },
  { icon: Sparkles, title: 'UI/UX Design', desc: 'User-centered product experiences' },
  { icon: Code, title: 'Next.js Engineering', desc: 'Production-ready websites & apps' },
  { icon: Globe, title: 'Shopify & E-commerce', desc: 'Conversion-optimized storefronts' },
  { icon: BarChart3, title: 'Dashboards & Analytics', desc: 'Data visualization & reporting' },
  { icon: TrendingUp, title: 'Conversion Optimization', desc: 'A/B testing & CRO systems' },
  { icon: Megaphone, title: 'Paid Ads & Funnels', desc: 'Performance marketing systems' },
  { icon: MessageCircle, title: 'WhatsApp Automations', desc: 'Conversational sales flows' },
  { icon: Zap, title: 'CRM Integrations', desc: 'Unified data workflows' },
  { icon: Package, title: 'Packaging Design', desc: 'Shelf-ready visual systems' },
  { icon: FileText, title: 'Content & Creative', desc: 'Brand storytelling assets' },
];

const valueBanners = [
  {
    title: 'Brand Identity & Strategy',
    desc: 'Full visual systems, messaging frameworks and positioning to lead markets.',
    cta: 'See Branding',
    link: '/services#branding',
  },
  {
    title: 'Websites & Web Applications',
    desc: 'Performance-first websites and Next.js apps engineered for conversion.',
    cta: 'See Web',
    link: '/services#web',
  },
  {
    title: 'Growth & Automation',
    desc: 'Performance marketing, funnels and automation for predictable revenue.',
    cta: 'See Growth',
    link: '/services#growth',
  },
];

const techStack = [
  'Next.js', 'React', 'Shopify', 'Tailwind', 'Figma', 'AWS', 
  'MongoDB', 'MySQL', 'Google Ads', 'Meta Ads', 'WhatsApp API'
];

const portfolioItems = [
  { title: 'Kavya Studios', category: 'Brand & E-commerce', metric: '+74% conversions' },
  { title: 'Lumen Labs', category: 'Web Platform', metric: '+420% signups' },
  { title: 'Aurora Coffee', category: 'Brand & Retail', metric: '+28% revenue' },
  { title: 'MetroDrive', category: 'AI & Growth', metric: '4x installs' },
];

const testimonials = [
  {
    quote: "Dreevn scaled our product site and doubled paid signups within 60 days.",
    author: "Head of Growth",
    company: "Fintech Startup",
  },
  {
    quote: "Their brand system made our packaging stand out on shelves overnight.",
    author: "Founder",
    company: "Consumer Brand",
  },
  {
    quote: "From strategy to launch, Dreevn ran a clean process — the product shipped on time and the metrics followed.",
    author: "CMO",
    company: "SaaS Company",
  },
];

const whyChooseUs = [
  { title: 'Enterprise Reliability', desc: 'Proven systems, documented processes, on-time delivery.' },
  { title: 'Conversion Engineering', desc: 'Design + measurement = revenue uplift.' },
  { title: 'Design × Growth Fusion', desc: 'Creative campaigns tuned for performance.' },
  { title: 'Scalable Development', desc: 'Engineering standards for product teams.' },
  { title: 'Fast Sprints', desc: 'Weekly deliveries, fast learning cycles.' },
  { title: 'Global Partner Network', desc: 'Scale capacity with vetted partners.' },
];

const faqs = [
  { q: 'What makes Dreevn different from other agencies?', a: 'We combine brand, product, and growth into one unified team — eliminating the multi-Company approach and delivering measurable outcomes.' },
  { q: 'How long does a typical project take?', a: 'Brand systems: 4-6 weeks. Websites: 4-8 weeks. AI agents: 2-6 weeks. Growth sprints: 90 days.' },
  { q: 'Do you work with startups or only enterprises?', a: 'We work with ambitious companies of all sizes — from funded startups to established enterprises.' },
  { q: 'Can you integrate AI into our existing systems?', a: 'Yes, we build custom AI agents and automations that integrate with your CRM, WhatsApp, and existing workflows.' },
  { q: 'What is your pricing model?', a: 'We provide custom quotes after discovery. No hidden fees, clear deliverables, and milestone-based payments.' },
  { q: 'Do you offer ongoing support?', a: 'Yes, we offer retainer packages for continuous optimization, growth sprints, and technical support.' },
];

const aiPreviewCards = [
  { icon: Bot, title: 'AI Sales Agent', desc: '24/7 qualification and booking — reduces manual work and speeds pipeline.' },
  { icon: MessageCircle, title: 'WhatsApp Automation', desc: 'Auto-responses, order tracking and broadcast flows with CRM sync.' },
  { icon: Zap, title: 'AI Support Agent', desc: 'Instant answers, ticket triage and knowledgebase escalation.' },
];

const Index = () => {
  const location = useLocation();

  // Reset scroll position on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <SEOHead
           title="Dreevn — Luxury Digital Company | Branding · Web · Growth"
  description="Dreevn builds premium brand systems, high-performance websites and AI-powered growth engines for ambitious companies."
  path="/"                      // homepage path
  image="/og/home.jpg"          // file you put in /public/og/home.jpg
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 hero-gradient" />
        
        {/* Subtle ambient lighting */}
        <div className="absolute w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] top-20 -right-48 opacity-40" />
        <div className="absolute w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] bottom-20 -left-40 opacity-30" />

        <div className="section-container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <Reveal>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                  World-class design.{' '}
                  <span className="text-gold">Measurable growth.</span>
                </h1>
              </Reveal>
              
              <Reveal delay={0.2}>
                <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                  We build premium brand systems, high-performance websites and AI-powered growth engines that run 24/7.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link to="/contact#form" className="btn-gold inline-flex items-center gap-2">
                    Work With Us
                    <ArrowRight size={18} />
                  </Link>
                  <Link to="/portfolio" className="btn-secondary inline-flex items-center gap-2">
                    See Our Work
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.6}>
                <p className="text-sm text-muted-foreground">
                  Trusted by growth teams and founders — boutique experience, enterprise reliability.
                </p>
              </Reveal>

              <Reveal delay={0.8}>
                <p className="text-sm text-muted-foreground mt-4">
                  Now offering AI agents: chat, voice, WhatsApp & automated growth workflows —{' '}
                  <Link to="/ai" className="text-gold hover:underline">learn more →</Link>
                </p>
              </Reveal>
            </div>

            {/* Hero Logo Animation */}
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
  className="hidden lg:flex justify-center items-center lg:-mt-10"
>
  <div className="relative">
    <div className="absolute inset-0 bg-gold/10 blur-[80px] rounded-full scale-125 opacity-50" />
    <img 
      src={logoGold} 
      alt="Dreevn logo gold" 
      className="w-80 h-80 lg:w-88 lg:h-88  object-contain relative z-10"
    />
  </div>
</motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gold rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* AI at Dreevn Preview */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-gold font-medium mb-4 block">AI at Dreevn</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                AI Agents Working 24/7
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Autonomous systems that qualify leads, respond to customers, and drive growth while you sleep.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-8">
            {aiPreviewCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="card-premium h-full">
                  <card.icon className="w-10 h-10 text-gold mb-4" />
                  <h3 className="font-display text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal delay={0.4}>
            <div className="text-center">
              <Link to="/ai" className="btn-gold inline-flex items-center gap-2">
                Explore AI Suite
                <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who We Build For */}
      <section className="section-padding">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Who we build for
            </h2>
          </Reveal>
          
          <StaggerContainer className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <StaggerItem key={industry.name}>
                <div className="card-glass px-6 py-4 text-center hover:border-gold/50 transition-colors cursor-default">
                  <h3 className="font-semibold text-foreground mb-1">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Capabilities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From brand systems to full-stack engineering — these are our core capabilities.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {capabilities.map((cap) => (
              <StaggerItem key={cap.title}>
                <div className="card-premium group">
                  <cap.icon className="w-8 h-8 text-gold mb-3 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <h3 className="font-semibold mb-2 group-hover:text-gold transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cap.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Value Banners */}
      <section className="section-padding">
        <div className="section-container space-y-6">
          {valueBanners.map((banner, index) => (
            <Reveal key={banner.title} delay={index * 0.1}>
              <div className="relative overflow-hidden rounded-2xl p-8 md:p-12 bg-secondary border border-border hover:border-gold/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">{banner.title}</h3>
                    <p className="text-muted-foreground max-w-xl">{banner.desc}</p>
                  </div>
                  <Link to={banner.link} className="btn-secondary shrink-0 inline-flex items-center gap-2">
                    {banner.cta}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-16 border-y border-border overflow-hidden">
        <div className="section-container mb-8">
          <Reveal>
            <p className="text-center text-muted-foreground">
              Trusted by growth teams and founders — trusted systems, measurable outcomes.
            </p>
          </Reveal>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex overflow-hidden">
            <div className="marquee">
              {[...techStack, ...techStack].map((tech, i) => (
                <span key={i} className="text-muted-foreground/60 text-lg font-medium whitespace-nowrap">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Result */}
      <section className="section-padding">
        <div className="section-container">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-secondary p-12 md:p-16 border border-border">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
              <div className="relative z-10">
                <span className="text-gold font-medium mb-4 block">Featured Result</span>
                <h2 className="font-display text-5xl md:text-7xl font-bold text-gold mb-4">
                  +420%
                </h2>
                <p className="text-2xl font-semibold text-foreground mb-2">Organic Signups — Lumen Labs</p>
                <p className="text-muted-foreground mb-8 max-w-lg">
                  We rebuilt Lumen's marketing site and docs hub. Organic signups rose 420% in 60 days.
                </p>
                <Link to="/portfolio" className="btn-gold inline-flex items-center gap-2">
                  View Case Study
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mini Case Strip */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Selected Work
            </h2>
          </Reveal>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item) => (
              <StaggerItem key={item.title}>
                <Link to="/portfolio" className="card-premium block group">
                  <span className="text-sm text-gold mb-2 block">{item.category}</span>
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                  <p className="text-gold font-bold">{item.metric}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal delay={0.4}>
            <div className="text-center mt-12">
              <Link to="/portfolio" className="btn-secondary inline-flex items-center gap-2">
                View All Work
                <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
              Why choose Dreevn
            </h2>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <StaggerItem key={item.title}>
                <div className="card-premium h-full">
                  <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
              What our clients say
            </h2>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <div className="card-glass h-full flex flex-col">
                  <blockquote className="text-lg italic text-foreground mb-6 flex-1">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Founder Message */}
      <section className="section-padding">
  <div className="section-container">
    <div className="mx-auto max-w-5xl lg:max-w-6xl grid lg:grid-cols-[auto,minmax(0,1.3fr)] gap-8 lg:gap-10 items-center">
      <Reveal>
        <div className="relative mx-auto lg:mx-0">
          <div className="w-56 h-56 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-gold/30">
            <img
              src={founderImage}
              alt="Mahesh Banoth, Founder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <span className="text-gold font-medium mb-4 block">From the Founder</span>
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
          Built for founders who expect premium execution.
        </h3>
        <blockquote className="text-lg text-muted-foreground mb-4">
          "Dreevn was created for ambitious brands that expect clarity, speed and measurable
          outcomes — not Company fluff. We combine brand, product, and growth into one
          accountable team."
        </blockquote>
        <p className="font-semibold text-gold">— Mahesh Banoth, Founder & CEO</p>
      </Reveal>
    </div>
  </div>
</section>

      {/* FAQ */}
      <section className="section-padding bg-card">
        <div className="section-container max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <StaggerContainer className="space-y-4">
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <details className="group card-glass">
                  <summary className="cursor-pointer list-none p-6 flex items-center justify-between">
                    <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                    <span className="text-gold shrink-0 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground">
                    {faq.a}
                  </div>
                </details>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="section-container">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-secondary border border-gold/30 p-12 md:p-16 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
              <div className="relative z-10">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to build something exceptional?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Tell us about your project — we will respond with a custom plan within 48 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact#form" className="btn-gold">
                    Work With Us
                  </Link>
                  <Link to="/ai" className="btn-secondary">
                    Explore AI Suite
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Index;