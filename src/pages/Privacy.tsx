import { Reveal } from "@/components/ui/animations";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="section-container relative z-10">

            <Reveal delay={0.15}>
  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/40 bg-gold/5 mb-6">
    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
    <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
      Legal Document
    </span>
  </div>
</Reveal>

          <Reveal>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
          </Reveal>


<Reveal delay={0.3}>
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
    {/* Last updated pill */}
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border/60 bg-card/60">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        Last Updated
      </span>
      <span className="text-xs md:text-sm text-foreground/80">
        11 December 2025
      </span>
    </div>

    {/* Scope / compliance strip */}
    <p className="text-xs md:text-sm text-muted-foreground max-w-xl">
      This Privacy Policy applies to all websites, AI systems, and digital products
      operated by <span className="text-foreground">Dreevn Digital Studio</span>.
    </p>
  </div>
</Reveal>



          <Reveal delay={0.15}>
            <p className="text-muted-foreground max-w-2xl">
              How Dreevn collects, uses and protects information shared with us.
            </p>
          </Reveal>
         
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-card">
        <div className="section-container max-w-3xl space-y-10">
          {/* Intro */}
          <Reveal>
            <div className="card-premium p-6 md:p-8">
              <p className="text-muted-foreground text-sm md:text-base">
                This Privacy Policy explains how <span className="text-foreground font-medium">Dreevn</span> 
                {" "}(&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses and safeguards information 
                when you visit our website, contact us, or work with us on a project.
              </p>
              <p className="text-muted-foreground text-sm md:text-base mt-4">
                We keep things simple: we only collect the information we need to respond, deliver work 
                and improve our services. We do not sell your data.
              </p>
            </div>
          </Reveal>

          {/* What we collect */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground text-sm md:text-base mb-3">
                We may collect the following types of information:
              </p>
              <ul className="text-muted-foreground text-sm md:text-base space-y-2 list-disc pl-5">
                <li>
                  <span className="font-medium text-foreground">Contact details:</span> 
                  {" "}name, email address, phone number and company details when you fill a form, book a call or contact us.
                </li>
                <li>
                  <span className="font-medium text-foreground">Project information:</span> 
                  {" "}details you share about your brand, product, goals, timelines and budgets.
                </li>
                <li>
                  <span className="font-medium text-foreground">Usage data:</span> 
                  {" "}basic analytics such as pages visited, time spent, device and browser type (via tools like Google Analytics).
                </li>
                <li>
                  <span className="font-medium text-foreground">Communication history:</span> 
                  {" "}emails, messages and notes related to your enquiries and projects.
                </li>
              </ul>
            </section>
          </Reveal>

          {/* How we use */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground text-sm md:text-base mb-3">
                We use the information we collect to:
              </p>
              <ul className="text-muted-foreground text-sm md:text-base space-y-2 list-disc pl-5">
                <li>Respond to enquiries and share proposals or project plans.</li>
                <li>Deliver design, development, AI and growth services you engage us for.</li>
                <li>Schedule and manage meetings, workshops and reviews.</li>
                <li>Improve our website, services and overall experience.</li>
                <li>Send essential updates related to ongoing work or important changes to this Policy.</li>
              </ul>
            </section>
          </Reveal>

          {/* Sharing */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                3. How We Share Information
              </h2>
              <p className="text-muted-foreground text-sm md:text-base mb-3">
                We do <span className="font-medium text-foreground">not</span> sell or rent your personal data.
                We may share limited information only in the following situations:
              </p>
              <ul className="text-muted-foreground text-sm md:text-base space-y-2 list-disc pl-5">
                <li>
                  <span className="font-medium text-foreground">Service providers:</span> 
                  {" "}with trusted partners (e.g., hosting providers, email tools, analytics platforms) who help us operate our business.
                </li>
                <li>
                  <span className="font-medium text-foreground">Project collaboration:</span> 
                  {" "}with vetted freelancers or partner studios involved in your project, as required and usually under NDA.
                </li>
                <li>
                  <span className="font-medium text-foreground">Legal requirements:</span> 
                  {" "}if required by law, regulation, or to protect our rights.
                </li>
              </ul>
            </section>
          </Reveal>

          {/* Data security */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                4. Data Security & Retention
              </h2>
              <p className="text-muted-foreground text-sm md:text-base mb-3">
                We take reasonable measures to protect information from unauthorised access, misuse or disclosure.
              </p>
              <ul className="text-muted-foreground text-sm md:text-base space-y-2 list-disc pl-5 mb-3">
                <li>Access to project data is limited to people who need it for delivery.</li>
                <li>We use reputable tools and platforms with security practices in place.</li>
                <li>We keep data only for as long as necessary for ongoing work, record-keeping and legal obligations.</li>
              </ul>
              <p className="text-muted-foreground text-xs">
                Note: No online system can be guaranteed 100% secure, but we follow sensible, professional practices.
              </p>
            </section>
          </Reveal>

          {/* Your choices */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                5. Your Choices & Rights
              </h2>
              <p className="text-muted-foreground text-sm md:text-base mb-3">
                You can:
              </p>
              <ul className="text-muted-foreground text-sm md:text-base space-y-2 list-disc pl-5">
                <li>Ask what information we hold about you.</li>
                <li>Request corrections to inaccurate details.</li>
                <li>Request deletion of certain data, subject to legal or contractual obligations.</li>
              </ul>
              <p className="text-muted-foreground text-sm md:text-base mt-3">
                To do this, email us at{" "}
                <a
                  href="mailto:mahesh@dreevn.com"
                  className="text-gold hover:underline"
                >
                  mahesh@dreevn.com
                </a>.
              </p>
            </section>
          </Reveal>

          {/* Cookies */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                6. Cookies & Analytics
              </h2>
              <p className="text-muted-foreground text-sm md:text-base mb-3">
                Our website may use cookies and similar technologies to understand basic usage and improve the experience.
              </p>
              <p className="text-muted-foreground text-sm md:text-base">
                You can control cookies through your browser settings. Some features may not work as intended if cookies are disabled.
              </p>
            </section>
          </Reveal>

          {/* Changes */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                7. Changes to This Policy
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                We may update this Privacy Policy from time to time. When we do, we will update the &quot;Last updated&quot; date at the top of this page. 
                Significant changes may also be communicated through our website or email where appropriate.
              </p>
            </section>
          </Reveal>

          {/* Contact */}
          <Reveal>
            <section className="border-t border-border pt-6 mt-4">
              <h2 className="font-display text-lg md:text-xl font-semibold mb-2">
                8. Contact Us
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                For any questions about this Privacy Policy or how we handle data, reach out at{" "}
                <a
                  href="mailto:mahesh@dreevn.com"
                  className="text-gold hover:underline"
                >
                  mahesh@dreevn.com
                </a>.
              </p>
            </section>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
