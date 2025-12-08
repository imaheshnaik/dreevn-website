import { Link } from 'react-router-dom';
import { ArrowRight, Target, Zap, Shield, Users, Rocket, TrendingUp } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/animations';
import founderImage from '@/assets/founder-circle.png';

const timeline = [
  { year: '2024', title: 'Founded', desc: 'Branding & web projects across startups and local businesses.' },
  { year: '2025', title: 'AI Suite launched', desc: 'AI Sales Agents, WhatsApp automations, internal tools.' },
  { year: '2025', title: 'Multi-disciplinary studio', desc: 'Brand + Web + Growth + Automation as one unified stack.' },
  { year: '2026', title: 'Scaling global clients', desc: 'Expanding reach with international partnerships.' },
];

const principles = [
  { icon: Target, title: 'Clarity Over Noise', desc: 'Great work starts with clear thinking, not complexity.' },
  { icon: TrendingUp, title: 'Design × Growth Fusion', desc: 'Every design decision supports measurable outcomes.' },
  { icon: Zap, title: 'Speed With Precision', desc: 'Fast execution, without sacrificing craftsmanship.' },
  { icon: Shield, title: 'Accountability', desc: 'We own the KPIs. We deliver what we promise.' },
  { icon: Users, title: 'Systems, Not One-Offs', desc: 'Everything we build scales — brand, design, automation.' },
  { icon: Rocket, title: 'Long-Term Partnerships', desc: 'We act as an extension of your team, not a vendor.' },
];

const leadership = [
  { name: 'Mahesh Banoth', role: 'Founder & CEO', image: founderImage },
  { name: 'Aisha Rao', role: 'Head of Design', image: null },
  { name: 'Rohan Mehta', role: 'Head of Engineering / AI Lead', image: null },
  { name: 'Hari Priya ', role: 'Director of Growth', image: null },
  { name: 'Sameer K.', role: 'Head of Production', image: null },
];

const differentiators = [
  { title: 'Enterprise-Level Execution', desc: 'Systems, documentation, reliability.' },
  { title: 'Premium Design Craftsmanship', desc: 'World-class visuals and UX.' },
  { title: 'AI-Driven Automation', desc: 'Agents, WhatsApp flows, voice, pipelines.' },
  { title: 'Performance Engineering', desc: 'Everything optimized for speed and conversions.' },
  { title: 'Scalable Partnerships', desc: 'We grow with our clients — not just deliver and disappear.' },
];

const metrics = [
  { value: '120+', label: 'Projects Delivered' },
  { value: '74%', label: 'Avg Conversion Uplift' },
  { value: '3-5×', label: 'Growth Multipliers' },
  { value: '90%', label: 'Client Retention' },
  { value: '12+', label: 'Industries Served' },
];

const techLogos = ['Next.js', 'Figma', 'AWS', 'Shopify', 'Google', 'WhatsApp API', 'Meta'];

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="section-container relative z-10">
          <Reveal>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
              We build brands, products, and growth systems that{' '}
              <span className="text-gold">shape the future.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              Dreevn is a global digital studio blending strategy, design, engineering, and AI automation to help ambitious companies grow with clarity, speed, and measurable outcomes.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-sm text-muted-foreground mb-8">
              Founded by Mahesh Banoth — built for founders, creators, and brands that expect world-class execution.
            </p>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/portfolio" className="btn-gold inline-flex items-center gap-2">
                Explore Our Work <ArrowRight size={18} />
              </Link>
              <a href="#team" className="btn-secondary inline-flex items-center gap-2">
                Meet the Team
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-center mb-4">Our Story</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-muted-foreground text-lg mb-6">
                Dreevn was founded with a simple belief: world-class digital execution shouldn't be limited to big enterprises with massive budgets.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                Brands of all sizes deserve premium design, powerful technology, and growth systems that actually move numbers — not just pretty screens.
              </p>
              <p className="text-muted-foreground text-lg">
                We blend branding, product design, engineering, performance marketing, and AI automation into one unified offering. This eliminates the messy multi-agency approach and gives clients a single, accountable partner for strategy, delivery, and growth.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            <Reveal>
              <div className="card-premium h-full">
                <h3 className="font-display text-2xl font-bold mb-4 text-gold">Mission</h3>
                <p className="text-muted-foreground text-lg">
                  To help ambitious brands grow through clarity, premium design, scalable systems, and data-backed execution.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="card-premium h-full">
                <h3 className="font-display text-2xl font-bold mb-4 text-gold">Vision</h3>
                <p className="text-muted-foreground text-lg">
                  To become the world's most trusted partner for brand, product, and AI-driven growth.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-center mb-16">Our Journey</h2>
          </Reveal>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 transform md:-translate-x-1/2" />
              
              {timeline.map((item, index) => (
                <Reveal key={item.year} delay={index * 0.1}>
                  <div className={`relative flex items-start gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <span className="text-gold font-bold text-xl">{item.year}</span>
                      <h3 className="font-semibold text-lg mt-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gold rounded-full transform md:-translate-x-1/2 mt-1.5" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-center mb-16">Our Principles</h2>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle) => (
              <StaggerItem key={principle.title}>
                <div className="card-premium h-full">
                  <principle.icon className="w-8 h-8 text-gold mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{principle.title}</h3>
                  <p className="text-muted-foreground text-sm">{principle.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Founder Message */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative mx-auto lg:mx-0">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gold/30">
                  <img src={founderImage} alt="Mahesh Banoth, Founder" className="w-full h-full object-cover" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h3 className="font-display text-2xl font-bold mb-4">A message from our Founder</h3>
              <blockquote className="text-lg italic text-muted-foreground mb-4">
                "I built Dreevn to bridge strategy, design, engineering, and now — intelligence. Great brands are built through clarity. Great products through precision. And great growth through systems that learn. Our mission is to deliver all three, consistently and measurably."
              </blockquote>
              <p className="font-semibold text-gold">— Mahesh Banoth, Founder & CEO</p>
              <p className="text-sm text-muted-foreground">Dreevn Digital Studio</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="team" className="section-padding">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-center mb-4">Leadership</h2>
            <p className="text-muted-foreground text-center mb-16">
              Supported by a global network of designers, engineers, AI specialists & growth partners.
            </p>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {leadership.map((member) => (
              <StaggerItem key={member.name}>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 overflow-hidden border-2 border-gold/20">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-gold/40">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-gold text-sm">{member.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-center mb-16">What Makes Us Different</h2>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {differentiators.map((item) => (
              <StaggerItem key={item.title}>
                <div className="card-premium text-center h-full">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-padding">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-center mb-16">Our Impact</h2>
          </Reveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {metrics.map((metric) => (
              <StaggerItem key={metric.label}>
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-gold mb-2">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tech Partners */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-center mb-4">Powered By</h2>
            <p className="text-muted-foreground text-center mb-12">Industry-leading platforms we build with.</p>
          </Reveal>

          <StaggerContainer className="flex flex-wrap justify-center gap-6">
            {techLogos.map((logo) => (
              <StaggerItem key={logo}>
                <span className="px-6 py-3 rounded-lg bg-muted border border-border text-sm font-medium">
                  {logo}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="section-container text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to build with us?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's design, engineer and scale something exceptional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact#form" className="btn-gold inline-flex items-center gap-2">
                Work With Us <ArrowRight size={18} />
              </Link>
              <Link to="/ai" className="btn-secondary inline-flex items-center gap-2">
                Explore AI Suite <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default About;
