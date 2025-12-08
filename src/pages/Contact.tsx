import { SEO } from "@/components/SEO";
import { useState } from 'react';
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Calendar,
  FileText,
  Shield,
  Clock,
  CheckCircle,
} from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/animations';
import { toast } from '@/hooks/use-toast';
import founderImage from '@/assets/founder-circle.png';

// ✅ Your Web3Forms key
const WEB3FORMS_ACCESS_KEY = 'd8dbca09-7586-4c36-9b19-d3a447b794ca';

const projectTypes = [
  'Branding',
  'Website / Web App',
  'E-commerce',
  'Growth & Performance',
  'AI Agents & Automation',
  'WhatsApp Automation',
  'Multiple Services',
];

const budgetRanges = ['Undecided', '₹1L–₹3L', '₹3L–₹7L', '₹7L+'];

const timelineOptions = ['2–4 weeks', '1–2 months', 'Flexible'];

const trustBadges = [
  { icon: Shield, label: 'NDA' },
  { icon: Shield, label: 'Secure Hosting' },
  { icon: Shield, label: 'GDPR-ready' },
  { icon: Shield, label: 'AI-Powered' },
  { icon: Shield, label: 'Enterprise Grade' },
  { icon: Clock, label: '24/7 Support' },
];

const contactOptions = [
  {
    icon: Calendar,
    title: 'Strategy Call',
    desc: '20–30 minutes — discuss goals, scope & timeline.',
    cta: 'Book Now',
    href: 'https://calendly.com/dreevnofficial/30min',
  },
  {
    icon: MessageCircle,
    title: 'Quick WhatsApp Chat',
    desc: 'Instant replies for small questions or quick clarifications.',
    cta: 'Chat on WhatsApp',
    href: 'https://wa.me/919281163366',
  },
  {
    icon: FileText,
    title: 'Send Project Details',
    desc: 'Share goals, requirements & deadlines — get a custom plan.',
    cta: 'Submit Brief',
    href: '#form',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");


  // ✅ Only this function changed – now sends data to Web3Forms
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // reset status every submit
  setStatus("idle");
  setStatusMessage("");

  if (!formData.name || !formData.email || !formData.projectType) {
    setStatus("error");
    setStatusMessage("Please fill in Name, Email and Project Type.");
    toast({
      title: "Missing required fields",
      description: "Please fill in Name, Email and Project Type.",
      variant: "destructive",
    });
    return;
  }

  try {
    setIsSubmitting(true);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New project enquiry from ${formData.name}`,
        from_name: "Dreevn Website Contact Form",
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "Not provided",
        company: formData.company || "Not provided",
        projectType: formData.projectType,
        budget: formData.budget || "Not specified",
        timeline: formData.timeline || "Not specified",
        message: formData.message || "No extra message",
      }),
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");
      setStatusMessage("Project brief received. We’ll respond within 48 hours.");

      toast({
        title: "Project brief received! ✅",
        description:
          "Thank you — we’ll review and get back within 48 hours with a custom plan & timeline.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } else {
      console.error("Web3Forms error:", data);
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again or use WhatsApp.");

      toast({
        title: "Something went wrong",
        description: "Please try again, or reach us at mahesh@dreevn.com.",
        variant: "destructive",
      });
    }
  } catch (err) {
    console.error(err);
    setStatus("error");
    setStatusMessage("Network error. Please check your internet and try again.");

    toast({
      title: "Network error",
      description: "Check your connection and try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


 return (
  <>
    <SEO
      title="Work With Dreevn — Start Your Project"
      description="Share your project brief and receive a custom roadmap, budget guidance and timeline from the Dreevn team within 48 hours."
      url="https://dreevn.com/contact"
      image="https://dreevn.com/og/contact-default.jpg"
    />

    <div className="min-h-screen pt-20">

      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="section-container relative z-10">
          <Reveal>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let&apos;s Build Something <span className="text-gold">Exceptional.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              Tell us about your project — we&apos;ll send a custom plan & timeline within 48 hours.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://calendly.com/dreevnofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                Book Strategy Call
                <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/919281163366"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                WhatsApp Message
                <MessageCircle size={18} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.6}>
            <p className="text-sm text-muted-foreground">
              New: AI agent builds, WhatsApp automation & multi-agent workflow systems.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {contactOptions.map((option) => (
              <StaggerItem key={option.title}>
                <a
                  href={option.href}
                  target={option.href.startsWith('http') ? '_blank' : undefined}
                  rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card-premium block group h-full"
                >
                  <option.icon className="w-10 h-10 text-gold mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{option.desc}</p>
                  <span className="text-gold font-medium inline-flex items-center gap-1">
                    {option.cta} <ArrowRight size={16} />
                  </span>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Form */}
      <section id="form" className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16">
            <Reveal>
              <h2 className="font-display text-3xl font-bold mb-4">Send Your Project Brief</h2>
              <p className="text-muted-foreground mb-8">
                We respond within 48 hours with a project plan, timeline & suggested scope.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      autoFocus
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-premium"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-premium"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-premium"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company / Brand</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="input-premium"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Type *</label>
                  <select
                    required
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="input-premium"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Estimated Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="input-premium"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="input-premium"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Description</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-premium resize-none"
                    placeholder="Tell us about your project goals, challenges, and timeline..."
                  />
                </div>

               <button
  type="submit"
  disabled={isSubmitting}
  className="btn-gold w-full inline-flex items-center justify-center gap-2"
>
  {isSubmitting ? (
    'Sending...'
  ) : (
    <>
      Send My Project Plan <ArrowRight size={18} />
    </>
  )}
</button>

{/* ✅ Inline status messages */}
{status === "success" && statusMessage && (
  <p className="mt-3 text-sm text-emerald-400 text-center flex items-center justify-center gap-2">
    <CheckCircle className="w-4 h-4" />
    {statusMessage}
  </p>
)}

{status === "error" && statusMessage && (
  <p className="mt-3 text-sm text-red-400 text-center">
    {statusMessage}
  </p>
)}

<p className="text-xs text-muted-foreground text-center">
  We never share your information. NDA available on request.
</p>

              </form>
            </Reveal>

            <div>
              <Reveal delay={0.2}>
                <div className="space-y-8">
                  {/* Contact Info */}
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-6">Get in Touch</h3>
                    <div className="space-y-4">
                      <a
                        href="mailto:mahesh@dreevn.com"
                        className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
                      >
                        <Mail size={20} className="text-gold" />
                        mahesh@dreevn.com
                      </a>
                      <a
                        href="https://wa.me/919281163366"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
                      >
                        <Phone size={20} className="text-gold" />
                        +91 9281163366
                      </a>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin size={20} className="text-gold" />
                        Hyderabad, India · Global Delivery
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock size={20} className="text-gold" />
                        Mon–Sat · 10 AM – 8 PM IST
                      </div>
                    </div>
                  </div>

                  {/* Quick WhatsApp */}
                  <div className="card-premium bg-green-500/5 border-green-500/20">
                    <MessageCircle className="w-8 h-8 text-green-500 mb-4" />
                    <h4 className="font-semibold mb-2">Quick WhatsApp Chat</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Instant replies for quick questions.
                    </p>
                    <a
                      href="https://wa.me/919281163366"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold w-full text-center block"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>

                  {/* Trust Badges */}
                  <div>
                    <h4 className="font-semibold mb-4">
                      Trusted by startups, SaaS teams & national brands
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {trustBadges.map((badge) => (
                        <div
                          key={badge.label}
                          className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg text-sm"
                        >
                          <badge.icon size={14} className="text-gold" />
                          {badge.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Note */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-3xl mx-auto">
              <img
                src={founderImage}
                alt="Mahesh Banoth, Founder"
                className="w-24 h-24 rounded-full border-2 border-gold/30"
              />
              <div>
                <h3 className="font-display text-xl font-bold mb-3">A Note From the Founder</h3>
                <p className="text-muted-foreground italic mb-3">
                  &quot;Every project starts with clarity, speed and aligned expectations. Whether
                  it&apos;s branding, a premium website, or AI-powered automation — our team ensures
                  measurable outcomes with transparent execution.&quot;
                </p>
                <p className="font-semibold text-gold">— Mahesh Banoth, Founder &amp; CEO</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="section-container">
          <Reveal>
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to start your project?
              </h2>
              <p className="text-muted-foreground mb-8">
                Tell us what you&apos;re building — we&apos;ll prepare a roadmap & proposal.
              </p>
              <a href="#form" className="btn-gold inline-flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>
    </section>
      </div>
  </>
  );
};

export default Contact;
