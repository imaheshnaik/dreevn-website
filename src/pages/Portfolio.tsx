import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, X } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/animations';
import { motion, AnimatePresence } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';

// Portfolio images
import pfKavya from '@/assets/pf_kavya.png';
import pfLumen from '@/assets/pf_lumen.png';
import pfAurora from '@/assets/pf_aurora.png';
import pfNimble from '@/assets/pf_nimble.png';
import pfCrestwear from '@/assets/pf_crestwear.png';
import pfGreengrid from '@/assets/pf_greengrid.png';
import pfPulse from '@/assets/pf_pulse.png';
import pfMetrodrive from '@/assets/pf_metrodrive.png';
import pfHarvest from '@/assets/pf_harvest.png';

const portfolioItems = [
  {
    id: 'kavya',
    title: 'Kavya Studios',
    category: 'Brand & E-commerce',
    metric: '+74% conversions',
    tags: ['brand', 'ecommerce'],
    image: pfKavya,
    challenge: 'Kavya Studios was struggling with low conversion rates and an outdated brand identity that did not resonate with their premium audience.',
    solution: 'Complete brand overhaul including new visual identity, product UX redesign, and checkout flow optimization with A/B testing.',
    outcome: '+74% product page conversions, +31% average order value, 2.4x return customer rate.',
    services: ['Brand Identity', 'E-commerce UX', 'CRO'],
  },
  {
    id: 'lumen',
    title: 'Lumen Labs',
    category: 'SaaS Platform',
    metric: '+420% organic signups',
    tags: ['web', 'saas'],
    image: pfLumen,
    challenge: 'Stagnant organic growth and poor documentation were limiting Lumen Labs ability to acquire and retain developer users.',
    solution: 'Complete website rebuild with integrated docs hub, SEO optimization, and developer-focused content strategy.',
    outcome: '+420% organic signups in 60 days, 85% reduction in support tickets, 3x docs engagement.',
    services: ['Web Development', 'SEO', 'Content Strategy'],
  },
  {
    id: 'aurora',
    title: 'Aurora Coffee',
    category: 'Brand & Retail',
    metric: '+28% store revenue',
    tags: ['brand', 'retail'],
    image: pfAurora,
    challenge: 'Generic brand presence in a crowded specialty coffee market was limiting Aurora premium positioning.',
    solution: 'Premium brand identity redesign with artisanal packaging, in-store experience design, and cohesive visual system.',
    outcome: '+28% store revenue, successful launch in 12 new retail locations, 40% increase in wholesale inquiries.',
    services: ['Brand Identity', 'Packaging Design', 'Retail Experience'],
  },
  {
    id: 'nimble',
    title: 'Nimble Health',
    category: 'SaaS Platform',
    metric: '+45% trial-to-paid',
    tags: ['web', 'saas'],
    image: pfNimble,
    challenge: 'High trial churn rate was limiting Nimble Health ability to convert users to paid plans.',
    solution: 'Complete onboarding UX redesign with guided flows, progress tracking, and personalized activation sequences.',
    outcome: '+45% trial-to-paid conversion, 60% reduction in time-to-value, NPS score improved by 32 points.',
    services: ['UX Design', 'Onboarding Optimization', 'Analytics'],
  },
  {
    id: 'crestwear',
    title: 'CrestWear',
    category: 'Growth & Performance',
    metric: '6.7x ROAS',
    tags: ['growth', 'ecommerce'],
    image: pfCrestwear,
    challenge: 'Rising customer acquisition costs were eroding margins and limiting CrestWear ability to scale profitably.',
    solution: 'Creative testing program with 50+ ad variants, funnel optimization, and audience segmentation strategy.',
    outcome: 'CAC reduced by 22%, ROAS improved to 6.7x, profitable scale to $2M/month ad spend.',
    services: ['Paid Media', 'Creative Production', 'CRO'],
  },
  {
    id: 'greengrid',
    title: 'GreenGrid',
    category: 'B2B Lead Generation',
    metric: '+210% qualified leads',
    tags: ['growth', 'b2b'],
    image: pfGreengrid,
    challenge: 'Poor inbound lead quality was wasting sales team time and limiting GreenGrid pipeline growth.',
    solution: 'Lead scoring system, nurture automation, and qualification workflows with CRM integration.',
    outcome: '+210% qualified B2B leads, sales cycle reduced by 35%, 89% lead-to-SQL rate improvement.',
    services: ['Lead Generation', 'Marketing Automation', 'CRM Integration'],
  },
  {
    id: 'pulse',
    title: 'Pulse Media',
    category: 'Web & Content',
    metric: '+360% subscribers',
    tags: ['web', 'content'],
    image: pfPulse,
    challenge: 'Declining newsletter growth and low engagement were limiting Pulse Media audience development.',
    solution: 'Content strategy overhaul with new website, conversion UX, and personalized recommendation engine.',
    outcome: '+360% subscriber growth, 4.2x email engagement, successful launch of premium tier.',
    services: ['Web Development', 'Content Strategy', 'Email Marketing'],
  },
  {
    id: 'metrodrive',
    title: 'MetroDrive',
    category: 'AI & Growth',
    metric: '4x app installs',
    tags: ['growth', 'ai'],
    image: pfMetrodrive,
    challenge: 'Inefficient lead handling and manual follow-ups were limiting MetroDrive ability to scale customer acquisition.',
    solution: 'AI voice agent for inbound calls, automated qualification, and integrated paid media campaigns.',
    outcome: 'App installs 4x, automated 12k calls/month, 65% reduction in cost per qualified lead.',
    services: ['AI Agents', 'Voice Automation', 'Paid Media'],
  },
  {
    id: 'harvest',
    title: 'Harvest Foods',
    category: 'Brand & B2B',
    metric: '+120% inquiries',
    tags: ['brand', 'b2b'],
    image: pfHarvest,
    challenge: 'Low distributor interest and weak brand presence were limiting Harvest Foods wholesale expansion.',
    solution: 'Brand refresh with B2B focused website, distributor portal, and trade show materials.',
    outcome: '+120% distributor inquiries, partnerships with 8 major retail chains, 45% increase in wholesale revenue.',
    services: ['Brand Identity', 'B2B Website', 'Sales Enablement'],
  },
];

const filters = ['all', 'brand', 'web', 'ecommerce', 'growth', 'ai', 'saas', 'b2b'];

const resultWall = [
  { metric: '+74%', label: 'Product page conversions' },
  { metric: '+420%', label: 'Organic signups' },
  { metric: '6.7x', label: 'ROAS achieved' },
  { metric: '+360%', label: 'Subscriber growth' },
  { metric: '+210%', label: 'Qualified B2B leads' },
  { metric: '-22%', label: 'CAC reduction' },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.tags.includes(activeFilter));

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
          title="Portfolio — Dreevn"
  description="Selected case studies and results — brand, web and AI projects."
  path="/portfolio"
  image="/og/portfolio.jpg"

      />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="section-container relative z-10">
          <Reveal>
            <span className="text-gold font-medium mb-4 block">Portfolio</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
              Selected work — Brands, platforms &{' '}
              <span className="text-gradient">measurable growth.</span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              A curated selection of projects showcasing our design, engineering and measurable outcomes across industries.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact#form" className="btn-primary inline-flex items-center gap-2">
                Work With Us
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary inline-flex items-center gap-2">
                See Our Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Results Wall */}
      <section className="py-16 bg-card border-y border-border">
        <div className="section-container">
          <Reveal>
            <p className="text-center text-muted-foreground mb-8 text-sm uppercase tracking-wider">Results That Matter</p>
          </Reveal>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {resultWall.map((result) => (
              <StaggerItem key={result.label}>
                <div className="text-center">
                  <p className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">
                    {result.metric}
                  </p>
                  <p className="text-sm text-muted-foreground">{result.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 sticky top-20 bg-background/80 backdrop-blur-xl z-30 border-b border-border">
        <div className="section-container">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-gold text-background'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedProject(item)}
                  className="group cursor-pointer"
                >
                  <div className="relative h-80 rounded-2xl overflow-hidden bg-card border border-border transition-all duration-300 group-hover:border-gold group-hover:shadow-lg group-hover:shadow-gold/10">
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-sm text-gold mb-2 block">{item.category}</span>
                      <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-lg font-semibold text-gradient">{item.metric}</p>
                    </div>
                    
                    {/* Hover Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-gold/10 backdrop-blur-sm flex items-center justify-center">
                        <ExternalLink size={18} className="text-gold" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card border-t border-border">
        <div className="section-container text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to join these success stories?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how we can help you achieve measurable results for your business.
            </p>
            <Link to="/contact#form" className="btn-gold inline-flex items-center gap-2">
              Start Your Project
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-3xl p-8 border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
                
                <div>
                  <span className="text-gold font-medium mb-2 block">{selectedProject.category}</span>
                  <h2 className="font-display text-3xl font-bold mb-4">{selectedProject.title}</h2>
                  <p className="text-3xl font-bold text-gradient mb-6">{selectedProject.metric}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.services.map((service) => (
                      <span key={service} className="px-3 py-1 bg-muted rounded-full text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="p-6 bg-muted/30 rounded-xl">
                  <h3 className="font-semibold text-gold mb-3">Challenge</h3>
                  <p className="text-muted-foreground text-sm">{selectedProject.challenge}</p>
                </div>
                <div className="p-6 bg-muted/30 rounded-xl">
                  <h3 className="font-semibold text-gold mb-3">Solution</h3>
                  <p className="text-muted-foreground text-sm">{selectedProject.solution}</p>
                </div>
                <div className="p-6 bg-muted/30 rounded-xl">
                  <h3 className="font-semibold text-gold mb-3">Outcome</h3>
                  <p className="text-muted-foreground text-sm">{selectedProject.outcome}</p>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Link 
                  to="/contact#form" 
                  className="btn-gold inline-flex items-center gap-2"
                  onClick={() => setSelectedProject(null)}
                >
                  Discuss Your Project
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
