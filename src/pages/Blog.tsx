import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/animations';
import founderImage from '@/assets/founder-circle.png';

const categories = ['all', 'branding', 'web', 'ai', 'growth', 'founder'];

const articles = [
  {
    id: 'ai-agents-2025',
    title: 'How AI Agents Will Transform Sales, Support & Operations in 2025',
    category: 'ai',
    excerpt: 'Explore how autonomous agents handle qualification, follow-ups, scheduling and support — and why every brand will need them soon.',
    author: 'Dreevn Team',
    date: '2025',
    featured: true,
  },
  {
    id: 'premium-brand-positioning',
    title: 'Why Premium Brands Win: Positioning, Identity & Messaging Frameworks',
    category: 'branding',
    excerpt: 'The psychology of why customers choose premium brands — and how positioning systems define market leadership.',
    author: 'Mahesh Banoth',
    date: '2025',
    featured: true,
  },
  {
    id: 'performance-web-2025',
    title: 'High-Performance Websites: The Dreevn Playbook for 2025',
    category: 'web',
    excerpt: 'What makes a website convert: speed, UX, clarity, visual systems, messaging, analytics and growth loops.',
    author: 'Dreevn Team',
    date: '2025',
    featured: false,
  },
  {
    id: 'growth-engineering',
    title: 'Growth Engineering: Turning Traffic Into Revenue With Precision',
    category: 'growth',
    excerpt: 'Forget "likes" — growth engineering means creating predictable, measurable revenue systems.',
    author: 'Dreevn Team',
    date: '2025',
    featured: false,
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp Automation & AI Flows: The Future of Customer Experience',
    category: 'ai',
    excerpt: 'The most powerful untapped channel in India: lead routing, instant replies, cart recovery, follow-ups and more.',
    author: 'Dreevn Team',
    date: '2025',
    featured: false,
  },
  {
    id: 'dreevn-framework',
    title: 'The Dreevn 5-Step Strategy Framework for Ambitious Founders',
    category: 'growth',
    excerpt: 'A precise execution framework developed for high-growth brands and founders.',
    author: 'Mahesh Banoth',
    date: '2025',
    featured: false,
  },
  {
    id: 'visual-identity-2025',
    title: 'Designing a World-Class Visual Identity in 2025',
    category: 'branding',
    excerpt: 'The exact steps to create a timeless brand identity system with color science, typography and motion.',
    author: 'Dreevn Team',
    date: '2025',
    featured: false,
  },
  {
    id: 'building-dreevn',
    title: 'Building Dreevn: The Vision, Discipline & Execution Behind Our Work',
    category: 'founder',
    excerpt: 'A behind-the-scenes look at how Dreevn operates with clarity, speed & discipline — from the founder\'s perspective.',
    author: 'Mahesh Banoth',
    date: '2025',
    featured: false,
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredArticles = activeCategory === 'all'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  const featuredArticles = filteredArticles.filter(a => a.featured);
  const regularArticles = filteredArticles.filter(a => !a.featured);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="section-container relative z-10">
          <Reveal>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Insights, Playbooks &{' '}
              <span className="text-gold">Strategies</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-2xl mb-4">
              Research-backed articles covering branding, high-performance websites, AI automation, and scalable growth systems.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-sm text-muted-foreground">
              Written by the Dreevn team — led by founder Mahesh Banoth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card border-b border-border sticky top-20 z-30">
        <div className="section-container">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gold text-background'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {cat === 'ai' ? 'AI & Automation' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="section-padding">
          <div className="section-container">
            <Reveal>
              <h2 className="font-display text-2xl font-bold mb-8">Featured</h2>
            </Reveal>

            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {featuredArticles.map((article) => (
                <StaggerItem key={article.id}>
                  <article className="card-premium group h-full flex flex-col">
                    <span className="text-gold text-sm font-medium mb-2 capitalize">{article.category}</span>
                    <h3 className="font-display text-xl font-bold mb-3 group-hover:text-gold transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{article.author} • {article.date}</span>
                      <span className="text-gold font-medium inline-flex items-center gap-1 text-sm">
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <Reveal>
            <h2 className="font-display text-2xl font-bold mb-8">All Insights</h2>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <StaggerItem key={article.id}>
                <article className="card-glass group h-full flex flex-col">
                  <span className="text-gold text-sm font-medium mb-2 capitalize">{article.category}</span>
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-gold transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{article.author}</span>
                    <span className="text-gold font-medium inline-flex items-center gap-1 text-sm">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Author Bio */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src={founderImage}
                alt="Mahesh Banoth"
                className="w-32 h-32 rounded-full border-2 border-gold/30"
              />
              <div>
                <h3 className="font-display text-xl font-bold mb-3">From the Desk of the Founder</h3>
                <p className="text-muted-foreground mb-4">
                  "Hi, I'm Mahesh Banoth — Founder & CEO of Dreevn. I write about brand building, premium web experiences, AI systems, and growth strategy. Dreevn exists to help ambitious founders grow faster with clarity, precision & world-class execution."
                </p>
                <div className="flex gap-4">
                  <a href="https://x.com/MaheshDreevn" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline text-sm">
                    X: @MaheshDreevn
                  </a>
                  <a href="https://linkedin.com/in/maheshdreevn" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline text-sm">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="section-container text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold mb-4">
              Want insights tailored for your brand?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get a custom strategy session with our team.
            </p>
            <Link to="/contact#form" className="btn-gold inline-flex items-center gap-2">
              Get a Strategy Plan <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Blog;
