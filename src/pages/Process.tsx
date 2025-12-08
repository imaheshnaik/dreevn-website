import { Link } from 'react-router-dom';
import { ArrowRight, Search, Lightbulb, Palette, Code, TrendingUp, Bot, Shield, Clock } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/animations';
import { SEOHead } from '@/components/SEOHead';

const phases = [
  { 
    step: '01', 
    icon: Search,
    title: 'Discover & Blueprint', 
    outcome: 'Full clarity before any design/build begins.',
    desc: 'We turn chaos into clarity with structured exploration — shaping goals, problems, audiences and opportunities.',
    includes: [
      'Deep discovery call',
      'Brand, product, growth questionnaires',
      'Competitor & industry audit',
      'Technical audit (if existing system)',
      'AI-readiness audit',
      'KPI & business goal mapping',
    ],
    deliverables: ['Blueprint PDF', 'Requirements sheet', 'Timeline draft', 'Tech architecture plan'],
  },
  { 
    step: '02', 
    icon: Lightbulb,
    title: 'Strategy & Concepts', 
    outcome: 'Sharper direction → better creative decisions.',
    desc: 'We define positioning, messaging, and architecture to guide all creative work.',
    includes: [
      'Positioning strategy',
      'Messaging framework',
      'Information architecture',
      'Sitemap / funnel mapping',
      'Brand territory exploration',
      'AI agent opportunity mapping',
    ],
    deliverables: ['Strategy deck', 'Messaging + tone guide', 'IA / sitemap'],
  },
  { 
    step: '03', 
    icon: Palette,
    title: 'Design & Experience', 
    outcome: 'UI/UX crafted for brand, conversion, and user intent.',
    desc: 'We create high-fidelity designs, prototypes, and complete design systems.',
    includes: [
      'High-fidelity UI design',
      'Brand identity creation',
      'Component library & design system',
      'Prototypes / microinteractions',
      'Animation previews',
      'AI bot flow design + conversational UX',
    ],
    deliverables: ['Figma system', 'Interaction previews', 'Full responsive design suite'],
  },
  { 
    step: '04', 
    icon: Code,
    title: 'Build, Engineer & Integrate', 
    outcome: 'Production-level engineering, tuned for performance.',
    desc: 'We build with Next.js, integrate APIs, and configure AI agents.',
    includes: [
      'Next.js / React development',
      'Backend + CMS',
      'API integrations',
      'Webhooks / automation setup',
      'Schema + SEO',
      'AI agents: WhatsApp, web widget, voice',
    ],
    deliverables: ['Production-ready code', 'CMS training', 'Integration report', 'AI agents configured'],
  },
  { 
    step: '05', 
    icon: TrendingUp,
    title: 'Launch, Grow & Optimize', 
    outcome: 'The project doesn\'t "end" — it begins scaling.',
    desc: 'We set up analytics, run CRO, and continuously optimize.',
    includes: [
      'CRO setup',
      'Heatmaps & analytics',
      'Funnel optimization',
      'Paid performance setup (optional)',
      'AI automation learning loop',
      'A/B testing cycles',
    ],
    deliverables: ['Launch report', 'Analytics dashboard', 'Growth sprint plan', 'Monthly optimization roadmap'],
  },
];

const aiTimeline = [
  { step: '1', title: 'Blueprint', desc: 'Identify use-cases, data sources, workflows' },
  { step: '2', title: 'Prototype', desc: 'Build flow drafts, test agent responses' },
  { step: '3', title: 'Integrate', desc: 'CRM, WhatsApp, web widget, calendar' },
  { step: '4', title: 'Scale', desc: 'Logging, memory, vector DB, autoscaling' },
  { step: '5', title: 'Optimize', desc: 'Weekly KPI review, accuracy boosts' },
];

const qualityStandards = [
  'Production-ready engineering',
  'Component-based design systems',
  'SLA-backed commitments',
  'NDA + IP protection',
  'Secure hosting environments',
  'Zero-downtime deployments',
  'Documentation + handover',
];

const timelines = [
  { name: 'Brand System', duration: '4–6 weeks' },
  { name: 'Premium Website', duration: '4–8 weeks' },
  { name: 'AI Agent Build', duration: '2–6 weeks' },
  { name: 'Growth Sprint', duration: '90 days' },
  { name: 'E-commerce Builds', duration: '4–10 weeks' },
];

const caseResults = [
  { name: 'Kavya Studios', type: 'Brand + Web', result: '+74% conversions' },
  { name: 'Lumen Labs', type: 'Platform + AI Agent', result: '+420% signups' },
  { name: 'MetroDrive', type: 'AI Voice + Paid Growth', result: 'x3 pipeline increase' },
];

const faqs = [
  { q: 'How long does a typical project take?', a: 'Depends on scope. Usually 4–8 weeks for websites, 2–6 weeks for AI.' },
  { q: 'How do revisions work?', a: 'We work in weekly sprints, so feedback and iteration are baked into the process.' },
  { q: 'Do you sign NDAs?', a: 'Yes. We can sign your NDA or provide ours before sharing any details.' },
  { q: 'Who owns the work?', a: 'You own all IP, files, and code once the project is complete and paid.' },
  { q: 'Can you work with our internal team?', a: 'Yes — we often collaborate with in-house engineering, design or marketing teams.' },
  { q: 'What tools do you use?', a: 'Figma, Next.js, Supabase, AI frameworks, CRM tools, analytics, and automation platforms.' },
];

const Process = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Process — How Dreevn Delivers Premium Work | Dreevn"
        description="Dreevn’s 5-phase workflow for brand, web and AI projects — from discovery and strategy to design, engineering and ongoing optimization."
        path="/process"
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="section-container relative z-10">
          <Reveal>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
              Our Process — Precision. Speed.{' '}
              <span className="text-gold">Predictability.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              A structured, measurable, strategy-to-execution workflow used by top global studios — engineered by Dreevn for brands that demand excellence.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-sm text-muted-foreground mb-8">
              Clarity, velocity, accountability — this is how premium work happens.
            </p>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact#form" className="btn-gold inline-flex items-center gap-2">
                Get Process Guide <ArrowRight size={18} />
              </Link>
              <Link to="/ai" className="btn-secondary inline-flex items-center gap-2">
                Explore AI Suite
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5-Phase Framework */}
      <section className="section-padding">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              Dreevn Signature Workflow
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Our proven 5-phase framework covering discovery, strategy, design, development and optimization.
            </p>
          </Reveal>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <Reveal key={phase.step} delay={index * 0.1}>
                <div className="card-premium">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center shrink-0">
                        <phase.icon className="w-7 h-7 text-gold" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-gold font-bold">PHASE {phase.step}</span>
                        </div>
                        <h3 className="font-display text-2xl font-bold mb-2">{phase.title}</h3>
                        <p className="text-gold text-sm mb-3">{phase.outcome}</p>
                        <p className="text-muted-foreground mb-6">{phase.desc}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3 text-sm text-foreground">Includes:</h4>
                            <ul className="space-y-2">
                              {phase.includes.map((item) => (
                                <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-gold mt-1">•</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3 text-sm text-foreground">Deliverables:</h4>
                            <div className="flex flex-wrap gap-2">
                              {phase.deliverables.map((d) => (
                                <span key={d} className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground">
                                  {d}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI Workflow Blueprint */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Bot className="w-8 h-8 text-gold" />
              <h2 className="font-display text-3xl font-bold">AI Workflow Blueprint</h2>
            </div>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Exclusive to Dreevn — our specialized process for building autonomous AI systems.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-6 mb-12">
            {aiTimeline.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.1}>
                <div className="card-glass text-center relative">
                  <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-gold">{step.step}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.6}>
            <div className="text-center">
              <Link to="/ai" className="btn-gold inline-flex items-center gap-2">
                Start AI Project <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quality Framework */}
      <section className="section-padding">
        <div className="section-container">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-gold" />
              <h2 className="font-display text-3xl font-bold">Quality Framework</h2>
            </div>
            <p className="text-muted-foreground text-center mb-12">
              Enterprise-grade standards for every project.
            </p>
          </Reveal>

          <StaggerContainer className="flex flex-wrap justify-center gap-4 mb-12">
            {qualityStandards.map((standard) => (
              <StaggerItem key={standard}>
                <div className="px-6 py-3 rounded-full bg-muted border border-border text-sm font-medium">
                  {standard}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap justify-center gap-4">
              {['Secure', 'NDA', 'GDPR-Ready', 'Enterprise Hosting', 'AI-Powered'].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 bg-gold/10 text-gold rounded-lg text-sm font-medium border border-gold/20"
                >
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Project Timelines */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-gold" />
              <h2 className="font-display text-3xl font-bold">Project Timelines</h2>
            </div>
            <p className="text-muted-foreground text-center mb-12">
              Average timelines for common project types.
            </p>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {timelines.map((item) => (
              <StaggerItem key={item.name}>
                <div className="card-premium text-center">
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <p className="text-gold font-bold text-lg">{item.duration}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal delay={0.4}>
            <p className="text-center text-muted-foreground mt-8 text-sm">
              Timelines vary based on scope. Request a custom project plan.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Case Results */}
      <section className="section-padding">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              Results From Following The Process
            </h2>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {caseResults.map((item) => (
              <StaggerItem key={item.name}>
                <div className="card-premium text-center">
                  <span className="text-sm text-muted-foreground">{item.type}</span>
                  <h3 className="font-display text-xl font-bold my-2">{item.name}</h3>
                  <p className="text-gold font-bold text-2xl">{item.result}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card">
        <div className="section-container max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-center mb-16">
              Process FAQ
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
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to build something exceptional?
              </h2>
              <p className="text-muted-foreground mb-8">
                Tell us what you're building — we'll send a project plan within 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact#form" className="btn-gold inline-flex items-center gap-2">
                  Start Project <ArrowRight size={18} />
                </Link>
                <Link to="/ai" className="btn-secondary inline-flex items-center gap-2">
                  Talk to AI Advisor
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Process;
