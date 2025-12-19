import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Globe, Palette, Code, TrendingUp, BarChart3, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/animations';
import founderImage from '@/assets/founder-circle.png';
import aishaImg from '@/assets/team/aaisha.png';
import rohanImg from '@/assets/team/rrohan.png';
import hariImg from '@/assets/team/haari.png';
import sameerImg from '@/assets/team/ssameer.png';
import { SEOHead } from '@/components/SEOHead';


const leadership = [
  { 
    name: 'Mahesh Banoth', 
    role: 'Founder & CEO', 
    desc: 'Product vision, strategy & quality. Leads Dreevn with focus on premium execution.',
    image: founderImage,
    linkedin: 'https://www.linkedin.com/in/maheshdreevn/',
    instagram: 'https://www.instagram.com/maheshdreevn?igsh=cmsybHU1OWoxbm1x&utm_source=qr',
    x: 'https://x.com/maheshdreevn?s=21',
  },
  { 
    name: 'Aisha Rao', 
    role: 'Head of Design', 
    desc: 'Brand systems, UI/UX, identity & visual communication.',
    image: aishaImg,
  },
  { 
    name: 'Rohan Mehta', 
    role: 'Head of AI & Engineering', 
    desc: 'AI agents, workflows, Next.js & infrastructure.',
    image: rohanImg,
  },
  { 
    name: 'Hari Priya', 
    role: 'Director of Growth', 
    desc: 'Performance marketing, funnels & analytics.',
    image: hariImg,
  },
  { 
    name: 'Sameer K.', 
    role: 'Head of Production', 
    desc: 'Creative, motion, asset execution & delivery.',
    image: sameerImg,
  },
];

const aiLabRoles = [
  { title: 'AI Architect', desc: 'Multi-agent design + conversation systems' },
  { title: 'Automation Engineer', desc: 'WhatsApp, CRM & workflow integrations' },
  { title: 'Data Analyst', desc: 'Dashboards, metrics & optimization loops' },
];

const orgStructure = [
  { dept: 'Executive', roles: ['Founder & CEO', 'Creative Director', 'Head of AI & Engineering', 'Growth Director'] },
  { dept: 'AI Lab', roles: ['AI Architect', 'Automation Engineers', 'Data Analysts'] },
  { dept: 'Design', roles: ['Brand Designers', 'UI/UX Designers'] },
  { dept: 'Engineering', roles: ['Next.js Developers', 'Integrations Developers'] },
  { dept: 'Growth', roles: ['Performance Marketers', 'CRO Specialists'] },
];

const skills = [
  { name: 'Brand Identity', level: 94 },
  { name: 'UI/UX Design', level: 98 },
  { name: 'Web Engineering', level: 92 },
  { name: 'AI Agents / Systems', level: 88 },
  { name: 'Growth & Performance', level: 90 },
  { name: 'Automation Engineering', level: 87 },
];

const tools = ['Figma', 'Next.js', 'React', 'OpenAI', 'Notion', 'GitHub', 'Supabase', 'AWS', 'Google Ads', 'Meta Ads'];

const values = [
  { title: 'Clarity', desc: 'We remove complexity and communicate openly.' },
  { title: 'Speed', desc: 'Weekly sprints, quick iterations.' },
  { title: 'Craft', desc: 'Pixel-perfect design, engineering discipline.' },
  { title: 'Ownership', desc: 'Every deliverable ties to a KPI.' },
  { title: 'Innovation', desc: 'Continuous exploration in design, AI and automation.' },
];

const funFacts = [
  '14,000+ Figma frames designed',
  'Our AI agent works 24/7',
  'Weekly design roast sessions',
  '120+ projects in < 2 years',
  'We ship more in 1 week than most in 1 month',
];

const awards = [
  'Top Digital Studio — 2024',
  'Recognized for AI Innovation — 2025',
  'Leading Brand Identity Studio — South Asia',
];

const Team = () => {
  return (
    <div className="min-h-screen pt-20">

<SEOHead
 title="Team — Dreevn"
  description="Meet the designers, engineers and AI specialists behind Dreevn."
  path="/team"
  image="/og/team.jpg"
/>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="section-container relative z-10">
          <Reveal>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet the Team Behind <span className="text-gold">Dreevn</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              A global team of designers, engineers, AI specialists and growth strategists building world-class brands, products and intelligent growth systems.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-sm text-muted-foreground">
              Enterprise reliability. Studio agility. AI-powered execution.
            </p>
          </Reveal>
        </div>
      </section>

    {/* Founder Spotlight */}
<section className="section-padding bg-card">
  <div className="section-container">
<div className="grid lg:grid-cols-2 gap-8 items-center">
      
      {/* Founder Photo */}
      <Reveal>
        <div className="relative flex justify-center lg:justify-center lg:pl-10">
          <div className="w-64 h-64 rounded-full overflow-hidden border-[5px] border-gold/50 shadow-xl shadow-black/40">
            <img
              src={founderImage}
              alt="Mahesh Banoth, Founder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Reveal>

      {/* Founder Content */}
      <Reveal delay={0.2}>
        <div className="max-w-xl">
          {/* Small top label */}
         {/* <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-gold/80 mb-3">
            <span className="w-6 h-[1px] bg-gold/60" />
            Founder & CEO
          </div>   */}

          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            A Message From Our Founder
          </h3>

          <blockquote className="text-lg md:text-xl italic text-muted-foreground mb-4">
            "Dreevn was built for ambitious brands that expect clarity, speed and measurable outcomes — not Company fluff."
          </blockquote>

          <p className="font-semibold text-gold mb-3">
            — Mahesh Banoth, Founder & CEO
          </p>

          <div className="h-[2px] w-[210px] bg-gold mt-2 mb-5 opacity-90" />


          {/* Socials */}
          <div className="flex items-center gap-4 mb-6">
            <a
              href="https://www.linkedin.com/in/maheshdreevn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
              aria-label="Mahesh on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/maheshdreevn?igsh=cmsybHU1OWoxbm1x&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
              aria-label="Mahesh on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/maheshdreevn?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors"
              aria-label="Mahesh on X"
            >
              <Twitter className="w-5 h-5" />
            </a>

            {/* Optional: primary CEO CTA */}
            <a
              href="https://www.linkedin.com/in/maheshdreevn/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 hidden sm:inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border border-gold/40 hover:border-gold/80 hover:text-gold transition-colors"
            >
              View LinkedIn Profile
            </a>
          </div>

          {/* Credibility stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>
              <p className="text-2xl font-semibold text-foreground leading-tight">120+</p>
              <p className="mt-1">Projects shipped across web, brand & AI.</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground leading-tight">10+</p>
              <p className="mt-1">Industries worked with — from SaaS to D2C.</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground leading-tight">3</p>
              <p className="mt-1">Core pillars: Brand, Product & AI Systems.</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground/80">
  <span className="px-3 py-1 rounded-full border border-border/60 bg-background/40">
    Startups & Founders
  </span>
  <span className="px-3 py-1 rounded-full border border-border/60 bg-background/40">
    SaaS & Product Teams
  </span>
  <span className="px-3 py-1 rounded-full border border-border/60 bg-background/40">
    D2C & E-commerce
  </span>
</div>
        </div>
      </Reveal>
    </div>
  </div>
</section>


      {/* Leadership */}
      <section className="section-padding">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-center mb-4">Leadership</h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
              Executive leadership driving strategy, design, engineering and AI innovation.
            </p>
          </Reveal>
       <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
  {leadership.map((member) => {
    const isFounder = member.role === 'Founder & CEO';

    return (
      <StaggerItem key={member.name}>
        <div
          className={`card-premium text-center group transition-all duration-200 hover:-translate-y-2 hover:border-gold/50 hover:bg-card/80 ${
            isFounder ? 'border-gold/60' : ''
          }`}
        >
          <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 overflow-hidden border-2 border-gold/20">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-gold/40">
                {member.name.charAt(0)}
              </div>
            )}
          </div>

          <h3 className="font-semibold text-lg">{member.name}</h3>

          <p className="text-gold text-sm mb-1">{member.role}</p>

          {isFounder && (
            <p className="text-[11px] uppercase tracking-[0.18em] text-gold/80 mb-1">
              Founder • Leadership
            </p>
          )}

          <p className="text-muted-foreground text-sm group-hover:text-foreground/90">
            {member.desc}
          </p>
        </div>
      </StaggerItem>
    );
  })}
</StaggerContainer>

        </div>
      </section>

      {/* Dreevn AI Lab */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Bot className="w-8 h-8 text-gold" />
              <h2 className="font-display text-3xl font-bold">Dreevn AI Lab</h2>
            </div>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Our specialist unit building autonomous agents, WhatsApp systems, and intelligent automation.
            </p>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12">
            {aiLabRoles.map((role) => (
              <StaggerItem key={role.title}>
                <div className="card-premium">
                  <h3 className="font-semibold text-lg mb-2">{role.title}</h3>
                  <p className="text-muted-foreground text-sm">{role.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal delay={0.4}>
            <div className="text-center">
              <Link to="/ai" className="btn-gold inline-flex items-center gap-2">
                Explore AI Suite <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Org Structure */}
      <section className="section-padding">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-center mb-4">How Our Team Is Structured</h2>
            <p className="text-muted-foreground text-center mb-12">Clear roles. Clear ownership. Enterprise execution.</p>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {orgStructure.map((dept) => (
              <StaggerItem key={dept.dept}>
                <div className="card-glass">
                  <h3 className="font-semibold text-gold mb-4">{dept.dept}</h3>
                  <ul className="space-y-2">
                    {dept.roles.map((role) => (
                      <li key={role} className="text-sm text-muted-foreground">{role}</li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Skill Matrix */}
      <section className="section-padding bg-card">
        <div className="section-container max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-center mb-4">Team Skill Matrix</h2>
            <p className="text-muted-foreground text-center mb-12">A multidisciplinary team built for end-to-end execution.</p>
          </Reveal>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <Reveal key={skill.name} delay={index * 0.1}>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gold">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill bg-gold" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="section-padding">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-center mb-4">Tools We Work With</h2>
            <p className="text-muted-foreground text-center mb-12">Industry-standard tools for reliability, security & scale.</p>
          </Reveal>

          <StaggerContainer className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <StaggerItem key={tool}>
                <span className="px-5 py-2.5 rounded-lg bg-muted border border-border text-sm font-medium">
                  {tool}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-center mb-4">Our Culture</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              We operate like a product team — fast sprints, deep thinking, measurable outcomes and craftsmanship in every detail.
            </p>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="card-premium text-center">
                  <h3 className="font-semibold text-gold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Awards */}
      <section className="section-padding">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-center mb-12">Recognition</h2>
          </Reveal>

          <StaggerContainer className="flex flex-wrap justify-center gap-6">
            {awards.map((award) => (
              <StaggerItem key={award}>
                <div className="card-premium px-8 py-4 text-center">
                  <span className="text-2xl mb-2 block">🏆</span>
                  <span className="font-medium">{award}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-center mb-12">Fun Facts</h2>
          </Reveal>

          <StaggerContainer className="flex flex-wrap justify-center gap-4">
            {funFacts.map((fact) => (
              <StaggerItem key={fact}>
                <div className="px-6 py-3 rounded-full bg-muted border border-border text-sm">
                  {fact}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="section-padding">
        <div className="section-container">
          <Reveal>
            <div className="card-premium text-center p-12 bg-gold/5 border-gold/20">
              <h2 className="font-display text-2xl font-bold mb-4">We're Hiring Across Design, Engineering & AI</h2>
              <p className="text-muted-foreground mb-8">
                We look for ambitious builders who want to create premium digital experiences and intelligent systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact#form" className="btn-gold">See Open Roles</Link>
                <Link to="/contact#form" className="btn-secondary">Send Your Portfolio</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-card">
        <div className="section-container text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to work with a world-class team?
            </h2>
            <p className="text-muted-foreground mb-8">We respond within 48 hours.</p>
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

export default Team;
