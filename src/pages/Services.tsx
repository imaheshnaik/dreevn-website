import { Link } from 'react-router-dom';
import { ArrowRight, Check, Palette, Globe, TrendingUp, Zap, MessageSquare, BarChart3, Sparkles, Target, Layers, Bot } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/animations';
import { SEOHead } from '@/components/SEOHead';

const services = [
  {
    id: 'branding',
    icon: Palette,
    title: 'Brand Identity & Strategy',
    desc: 'Full visual systems, messaging, and positioning that command premium pricing.',
    deliverables: ['Logo System', 'Visual Identity', 'Brand Guidelines', 'Messaging Framework', 'Tone & Voice'],
    link: '/contact',
  },
  {
    id: 'web',
    icon: Globe,
    title: 'Web Design & Development',
    desc: 'Next.js, headless CMS, pixel-perfect UI & blazing-fast performance.',
    deliverables: ['UI/UX Design', 'Next.js Development', 'CMS Integration', 'SEO Optimization', 'Analytics Setup'],
    link: '/contact',
  },
  {
    id: 'growth',
    icon: TrendingUp,
    title: 'Growth & Performance Marketing',
    desc: 'Paid campaigns, creative tests & CRO for predictable revenue growth.',
    deliverables: ['Paid Media Strategy', 'Creative Testing', 'Landing Pages', 'Conversion Optimization', 'Monthly Reports'],
    link: '/contact',
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'AI Agents & Automation',
    desc: 'Custom agents for sales, support, and intelligent workflows.',
    deliverables: ['AI Chat Agents', 'Voice Agents', 'CRM Integration', 'Workflow Automation', 'Analytics Dashboard'],
    link: '/ai',
  },
  {
    id: 'whatsapp',
    icon: MessageSquare,
    title: 'WhatsApp Business Automation',
    desc: 'Automated conversations, order tracking, and broadcast engines.',
    deliverables: ['Lead Capture Flows', 'Order Updates', 'Broadcast Campaigns', 'CRM Sync', '24/7 Responses'],
    link: '/contact',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Analytics & CRO',
    desc: 'Dashboards, tracking setup & A/B testing for continuous improvement.',
    deliverables: ['GA4 Setup', 'Custom Dashboards', 'Heatmap Analysis', 'A/B Testing', 'Conversion Tracking'],
    link: '/contact',
  },
];

const productizedOfferings = [
  {
    name: 'Foundational Brand',
    duration: '4–6 weeks',
    desc: 'Complete brand identity system with strategy, visual design, and guidelines.',
    features: ['Brand Strategy Workshop', 'Logo System Design', 'Color & Typography', 'Brand Guidelines', 'Asset Library'],
    popular: false,
  },
  {
    name: 'Premium Website',
    duration: '6–10 weeks',
    desc: 'High-performance, SEO-optimized website with CMS and analytics.',
    features: ['UI/UX Design', 'Next.js Development', 'CMS Integration', 'SEO Setup', 'Analytics Dashboard'],
    popular: true,
  },
  {
    name: 'Growth Sprint',
    duration: '90 days',
    desc: 'Full-funnel growth with paid media, creative testing, and optimization.',
    features: ['Paid Media Strategy', 'Creative Production', 'Landing Pages', 'Weekly Optimization', 'Monthly Reporting'],
    popular: false,
  },
  {
    name: 'AI Agent Suite',
    duration: '2–6 weeks',
    desc: 'Custom AI agents for sales, support, and automation workflows.',
    features: ['AI Sales Agent', 'WhatsApp Automation', 'CRM Integration', 'Voice Agent', 'Analytics'],
    popular: false,
  },
];

const deepDives = [
  {
    id: 'branding',
    title: 'Foundational Brand',
    duration: '4–6 weeks',
    outcome: 'Position for premium pricing & clear brand architecture.',
    process: ['Discovery & Research', 'Strategy Development', 'Identity Design', 'Guidelines Creation', 'Asset Production'],
    deliverables: ['Brand Strategy', 'Logo System', 'Visual Identity', 'Brand Book', 'Asset Library'],
  },
  {
    id: 'web',
    title: 'Premium Website — Design + Build',
    duration: '6–10 weeks',
    outcome: 'High-performance, SEO-friendly, conversion-first website.',
    process: ['Discovery & Audit', 'UX Strategy', 'UI Design', 'Development', 'Launch & Optimize'],
    deliverables: ['Figma Design System', 'Next.js Codebase', 'CMS Setup', 'Analytics', 'SEO Configuration'],
  },
  {
    id: 'growth',
    title: 'Growth Sprint',
    duration: '90 days',
    outcome: 'Acquisition lift through creative tests, funnels & paid media.',
    process: ['Audit & Strategy', 'Creative Production', 'Campaign Launch', 'Optimization', 'Scale'],
    deliverables: ['Ad Creatives', 'Landing Variants', 'Campaign Setup', 'Analytics Dashboard', 'Weekly Reports'],
  },
  {
    id: 'ai',
    title: 'AI Agent Build',
    duration: '2–6 weeks',
    outcome: 'Autonomous agents handling sales, support & workflows 24/7.',
    process: ['Workflow Mapping', 'Agent Architecture', 'Integration', 'Training', 'Deployment'],
    deliverables: ['Custom AI Agents', 'CRM Integration', 'WhatsApp Flows', 'Analytics', 'Documentation'],
  },
];

const faqs = [
  {
    q: 'How do I get started?',
    a: 'Fill out our project brief form or book a discovery call. We respond within 48 hours with a custom plan and timeline.',
  },
  {
    q: 'What is included in a project?',
    a: 'Every project includes discovery, strategy, design/build, and launch support. Specific deliverables vary by package and are detailed in your proposal.',
  },
  {
    q: 'Do you offer ongoing support?',
    a: 'Yes, we offer monthly retainers for continuous optimization, growth sprints, and technical support. Many clients stay with us for years.',
  },
  {
    q: 'Can I see examples of your work?',
    a: 'Absolutely. Check out our portfolio page for detailed case studies with measurable outcomes.',
  },
  {
    q: 'What are your payment terms?',
    a: 'We typically work on a 50% upfront, 50% on delivery model. Monthly retainers are billed at the start of each month.',
  },
  {
    q: 'Do you work with startups or only enterprises?',
    a: 'We work with growth-stage companies of all sizes. Our sweet spot is businesses ready to invest in premium positioning and measurable growth.',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead
       title="Services — Dreevn | Branding, Web, Growth & AI"
  description="Full-stack brand, website and AI services for founders and growth teams."
  path="/services"
  image="/og/services.jpg"
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="section-container relative z-10">
          <Reveal>
            <span className="text-gold font-medium mb-4 block">Our Services</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
              Services — Brand. Product.{' '}
              <span className="text-gold">Growth.</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              We combine strategy, design, and engineering to deliver measurable outcomes — brand systems that resonate, websites that convert, and growth systems that scale.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact#form" className="btn-gold inline-flex items-center gap-2">
                Request Proposal
                <ArrowRight size={18} />
              </Link>
              <a href="#pricing" className="btn-secondary inline-flex items-center gap-2">
                See Packages
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="py-16 bg-card border-y border-border">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: 'Strategy-First', desc: 'Every project starts with deep research and strategic thinking.' },
              { icon: Layers, title: 'Full-Stack Delivery', desc: 'From brand to code to growth — we handle the complete stack.' },
              { icon: Target, title: 'Measurable Outcomes', desc: 'We track KPIs and optimize for real business results.' },
            ].map((item) => (
              <Reveal key={item.title}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="section-padding">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              All Services
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              End-to-end capabilities for brand, product, and growth.
            </p>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div id={service.id} className="card-premium h-full flex flex-col scroll-mt-24">
                  <service.icon className="w-10 h-10 text-gold mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">{service.desc}</p>
                  <div className="space-y-2 mb-6">
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check size={14} className="text-gold shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={service.link} 
                    className="text-gold font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Request Proposal
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Productized Offerings */}
      <section id="pricing" className="section-padding bg-card">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              Productized Offerings
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Pick a product path — we run full end-to-end sprints with clear deliverables and KPIs.
            </p>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productizedOfferings.map((offering) => (
              <StaggerItem key={offering.name}>
                <div className={`card-premium h-full flex flex-col relative ${offering.popular ? 'border-gold' : ''}`}>
                  {offering.popular && (
                    <span className="absolute -top-3 left-6 bg-gold text-background text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <span className="text-sm text-muted-foreground mb-1">{offering.duration}</span>
                  <h3 className="font-display text-xl font-bold mb-4">{offering.name}</h3>
                  <p className="text-muted-foreground mb-6 flex-1 text-sm">{offering.desc}</p>
                  <div className="space-y-2 mb-6">
                    {offering.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check size={14} className="text-gold shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact#form" 
                    className={offering.popular ? 'btn-gold w-full text-center' : 'btn-secondary w-full text-center'}
                  >
                    Request Proposal
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal delay={0.4}>
            <p className="text-center text-muted-foreground mt-8 text-sm">
              Contact us for a custom quote tailored to your specific requirements.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Deep Dive Sections */}
      <section className="section-padding">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
              Service Deep-Dives
            </h2>
          </Reveal>

          <div className="space-y-8">
            {deepDives.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.1}>
                <div id={service.id} className="card-glass scroll-mt-24">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                        <span className="text-sm text-gold bg-gold/10 px-3 py-1 rounded-full">
                          {service.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-6">{service.outcome}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 text-sm">Process</h4>
                          <div className="space-y-2">
                            {service.process.map((step, i) => (
                              <div key={step} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span className="w-5 h-5 rounded-full bg-gold/10 text-gold text-xs flex items-center justify-center shrink-0">
                                  {i + 1}
                                </span>
                                {step}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 text-sm">Deliverables</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.deliverables.map((d) => (
                              <span key={d} className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground">
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link to="/contact#form" className="btn-secondary shrink-0 self-start">
                      Request Proposal
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-secondary border border-gold/30 p-12 md:p-16 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
              <div className="relative z-10">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to start your project?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Tell us about your goals. We will respond with a custom proposal within 48 hours.
                </p>
                <Link to="/contact#form" className="btn-gold">
                  Request Proposal
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
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
    </div>
  );
};

export default Services;