import { Link } from 'react-router-dom';
import { ArrowRight, Bot, MessageCircle, Headphones, Brain, Calendar, LineChart, FileText, Briefcase, Zap, Shield, Globe } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/animations';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';

const aiAgents = [
  {
    icon: Bot,
    title: 'AI Sales Agent',
    desc: 'Qualifies leads, answers FAQs, sends offers and nurtures prospects automatically.',
    features: ['Lead Qualification', 'FAQ Responses', 'Offer Delivery', 'Follow-up Sequences'],
  },
  {
    icon: MessageCircle,
    title: 'AI WhatsApp Agent',
    desc: 'Responds, qualifies, routes and follows up — 24/7 automated pipeline.',
    features: ['24/7 Responses', 'Lead Routing', 'Order Updates', 'Broadcast Campaigns'],
  },
  {
    icon: Headphones,
    title: 'AI Support Agent',
    desc: 'Handles customer queries, refunds, updates and post-purchase SOPs.',
    features: ['Ticket Resolution', 'Refund Processing', 'Status Updates', 'Escalation Rules'],
  },
  {
    icon: Brain,
    title: 'AI CRM Brain',
    desc: 'Learns from your pipeline, prioritizes leads and recommends next actions.',
    features: ['Lead Scoring', 'Pipeline Analysis', 'Action Recommendations', 'Reporting'],
  },
  {
    icon: Calendar,
    title: 'AI Scheduler',
    desc: 'Books meetings, rejects unqualified leads, syncs with Google/Outlook.',
    features: ['Calendar Sync', 'Qualification Gates', 'Timezone Handling', 'Reminders'],
  },
  {
    icon: LineChart,
    title: 'AI Growth Analyst',
    desc: 'Reads analytics, spots bottlenecks, sends weekly growth recommendations.',
    features: ['Analytics Parsing', 'Trend Detection', 'Weekly Reports', 'Recommendations'],
  },
  {
    icon: FileText,
    title: 'Document Intelligence',
    desc: 'Auto-generates processes, guides, FAQs and internal knowledge base.',
    features: ['Process Documentation', 'FAQ Generation', 'Knowledge Base', 'Version Control'],
  },
  {
    icon: Briefcase,
    title: 'Growth Automations',
    desc: 'Manages tasks, reminders, drafts messages and keeps your team aligned.',
    features: ['Task Management', 'Message Drafting', 'Team Coordination', 'Daily Digests'],
  },
];

const industries = [
  'Real Estate', 'E-commerce / D2C', 'Healthcare', 'Education', 'SaaS', 'Agencies', 'Finance', 'Retail', 'Hospitality', 'Professional Services'
];

const techStack = [
  'OpenAI GPT-4', 'Claude 3', 'LangChain', 'Vapi Voice', 'WhatsApp Business API', 'Firebase', 'Supabase', 'Node.js', 'Python', 'Vector Databases', 'Custom Fine-Tuning'
];

const whatsappFeatures = [
  { title: 'AI Lead Qualification', desc: 'Automatically qualify inbound leads with conversational AI' },
  { title: 'AI Response & Follow-ups', desc: '24/7 intelligent responses with context-aware follow-ups' },
  { title: 'AI Broadcast Engine', desc: 'Personalized bulk messaging with smart segmentation' },
  { title: 'AI Order Tracking Bot', desc: 'Real-time order updates and delivery notifications' },
  { title: 'AI CRM Sync', desc: 'Two-way sync with your CRM for unified customer data' },
];

const aiWorkflow = [
  { step: '01', title: 'Blueprint', desc: 'We map your workflows, SOPs and conversation rules to design the agent architecture.' },
  { step: '02', title: 'Build', desc: 'Custom agents, routing logic, webhooks, WhatsApp integration and CRM connections.' },
  { step: '03', title: 'Train', desc: 'Fine-tune on your data, test edge cases, and optimize response quality.' },
  { step: '04', title: 'Deploy', desc: 'Go live with monitoring, analytics and human handoff protocols.' },
  { step: '05', title: 'Scale', desc: 'Weekly optimizations, new use cases, and continuous improvement.' },
];

const faqs = [
  { q: 'What AI models do you use?', a: 'We use OpenAI GPT-4, Claude 3, and custom fine-tuned models depending on the use case and requirements.' },
  { q: 'Is my data safe?', a: 'Yes, we sign NDAs and can host on private infrastructure. All data is encrypted, GDPR-compliant, and never used for training.' },
  { q: 'Do you integrate with my CRM?', a: 'Yes, we integrate with HubSpot, Salesforce, Zoho, Pipedrive, and custom CRMs via API.' },
  { q: 'How long does development take?', a: 'Typical AI agent builds take 2-6 weeks depending on complexity and integrations required.' },
  { q: 'Can agents work in multiple languages?', a: 'Yes, our agents support 50+ languages with natural multilingual conversations.' },
  { q: 'Do you offer ongoing support?', a: 'Yes, we provide ongoing support, monitoring, and optimization as part of our packages.' },
  { q: 'What happens when AI cannot answer?', a: 'We build intelligent handoff protocols to route complex queries to human agents seamlessly.' },
];

const AISuite = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="AI Suite — Sales Agents, WhatsApp Automation & Growth AI | Dreevn"
        description="Custom AI agents for sales, support, WhatsApp automation, and intelligent workflows. Enterprise-grade AI systems that work 24/7."
        path="/ai"
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="section-container relative z-10">
          <Reveal>
            <span className="text-gold font-medium mb-4 block">AI Suite</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 max-w-4xl">
              <span className="text-gold">AI That Works.</span><br />
              Systems That Scale.
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              Autonomous agents, WhatsApp automation, CRM intelligence and full-stack AI workflows engineered to grow your business 24/7.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/contact#form" className="btn-gold inline-flex items-center gap-2">
                Request AI Proposal
                <ArrowRight size={18} />
              </Link>
              <a href="#agents" className="btn-secondary inline-flex items-center gap-2">
                Explore AI Agents
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-gold" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-gold" />
                <span>Production-Ready Models</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gold" />
                <span>50+ Languages</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AI Agents Grid */}
      <section id="agents" className="section-padding bg-card">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              AI Systems We Build
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Modular, scalable and production-ready AI agents designed to automate workflows, close leads and multiply efficiency.
            </p>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiAgents.map((agent) => (
              <StaggerItem key={agent.title}>
                <motion.div 
                  className="card-premium h-full group"
                  whileHover={{ y: -8, borderColor: 'hsl(42, 64%, 45%)' }}
                  transition={{ duration: 0.2 }}
                >
                  <agent.icon className="w-10 h-10 text-gold mb-4" />
                  <h3 className="font-display text-lg font-semibold mb-2">{agent.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{agent.desc}</p>
                  <div className="space-y-1">
                    {agent.features.map((feature) => (
                      <div key={feature} className="text-xs text-muted-foreground flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-gold" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* WhatsApp Automation */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <span className="text-gold font-medium mb-4 block">WhatsApp Business</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  WhatsApp AI Automations
                </h2>
                <p className="text-muted-foreground mb-8">
                  Your entire business pipeline, automated through WhatsApp. From lead capture to order tracking, we build conversational flows that work 24/7.
                </p>
              </Reveal>

              <StaggerContainer className="space-y-4">
                {whatsappFeatures.map((feature) => (
                  <StaggerItem key={feature.title}>
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-2 shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <Reveal delay={0.3}>
              <div className="relative">
                <div className="bg-card border border-border rounded-3xl p-8">
                  <div className="space-y-4">
                    {/* Mock Chat UI */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold">
                        AI
                      </div>
                      <div className="bg-muted rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                        <p className="text-sm">Hey! 👋 I am your Dreevn AI assistant. How can I help you today?</p>
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="bg-gold/20 border border-gold/30 rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                        <p className="text-sm">I want to learn about your AI solutions.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold">
                        AI
                      </div>
                      <div className="bg-muted rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                        <p className="text-sm">Great choice! We build AI agents for sales, support, WhatsApp automation and more. Would you like to schedule a discovery call?</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button className="text-xs bg-gold text-background px-4 py-2 rounded-full font-medium">Yes, book a call</button>
                      <button className="text-xs bg-muted px-4 py-2 rounded-full">Tell me more</button>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              Built For Every Industry
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Automated inbound leads, support workflows and growth intelligence.
            </p>
          </Reveal>

          <StaggerContainer className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <StaggerItem key={industry}>
                <div className="px-6 py-3 rounded-full bg-muted border border-border hover:border-gold/50 transition-colors cursor-default">
                  <span className="font-medium">{industry}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How AI Works */}
      <section className="section-padding">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              How We Build AI
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              A proven 5-phase process for delivering production-ready AI systems.
            </p>
          </Reveal>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-border hidden lg:block" />
            
            <StaggerContainer className="grid md:grid-cols-5 gap-8">
              {aiWorkflow.map((phase, index) => (
                <StaggerItem key={phase.step}>
                  <div className="relative text-center">
                    <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-4 relative z-10 bg-background">
                      <span className="font-bold text-gold">{phase.step}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground">{phase.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              AI Tech Stack
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Enterprise-grade AI development with secure, scalable architectures.
            </p>
          </Reveal>

          <StaggerContainer className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <StaggerItem key={tech}>
                <div className="px-5 py-2.5 rounded-lg bg-muted border border-border text-sm font-medium">
                  {tech}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-secondary border border-gold/30 p-12 md:p-16 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
              <div className="relative z-10">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Get A Custom AI Plan
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Every AI system is unique. Share your requirements and we will prepare a tailored proposal with timeline.
                </p>
                <Link to="/contact#form" className="btn-gold">
                  Request AI Proposal
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card">
        <div className="section-container max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
              AI FAQ
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

export default AISuite;