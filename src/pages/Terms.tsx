import { Reveal } from "@/components/ui/animations";

const Terms = () => {
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
              Terms &amp; Conditions
            </h1>
          </Reveal>

<Reveal delay={0.3}>
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border/60 bg-card/60">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        Last Updated
      </span>
      <span className="text-xs md:text-sm text-foreground/80">
        11 December 2025
      </span>
    </div>

    <p className="text-xs md:text-sm text-muted-foreground max-w-xl">
      These Terms and Conditions govern all projects, retainers, subscriptions, and services provided by 
      <span className="text-foreground"> Dreevn Digital Studio</span>,
     Where a separate written agreement exists between the client and Dreevn, the terms of that agreement shall take precedence.
    </p>
  </div>
</Reveal>



          <Reveal delay={0.15}>
            <p className="text-muted-foreground max-w-2xl">
              The rules, expectations and responsibilities when you work with Dreevn or use our website.
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
                These Terms (&quot;Terms&quot;) govern your use of our website and services provided by 
                <span className="text-foreground font-medium"> Dreevn</span>. By accessing our website, requesting a proposal, 
                or engaging us for any project, you agree to these Terms.
              </p>
              <p className="text-muted-foreground text-xs mt-4">
                This is a simple, plain-English summary for clarity and does not replace formal legal advice.
              </p>
            </div>
          </Reveal>

          {/* Services */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                1. Services We Provide
              </h2>
              <p className="text-muted-foreground text-sm md:text-base mb-3">
                Dreevn provides digital services including (but not limited to):
              </p>
              <ul className="text-muted-foreground text-sm md:text-base space-y-2 list-disc pl-5">
                <li>Brand identity, visual systems and brand strategy</li>
                <li>Website / web app design and development</li>
                <li>AI agents, WhatsApp automations and workflow systems</li>
                <li>Growth, performance marketing and CRO support</li>
              </ul>
              <p className="text-muted-foreground text-sm md:text-base mt-3">
                Specific scope, timelines, deliverables and fees are always defined in a proposal, estimate or agreement 
                shared with you before work begins.
              </p>
            </section>
          </Reveal>

          {/* Engagement */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                2. Project Engagement & Approvals
              </h2>
              <p className="text-muted-foreground text-sm md:text-base mb-3">
                When you approve a proposal or send written confirmation to start, you:
              </p>
              <ul className="text-muted-foreground text-sm md:text-base space-y-2 list-disc pl-5">
                <li>Confirm that you have authority to represent your company or brand.</li>
                <li>Agree to provide timely feedback, content and approvals.</li>
                <li>Understand that delays in feedback or content may move timelines.</li>
              </ul>
            </section>
          </Reveal>

          {/* Payments */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                3. Payments & Invoices
              </h2>
              <p className="text-muted-foreground text-sm md:text-base mb-3">
                Our typical billing structure is:
              </p>
              <ul className="text-muted-foreground text-sm md:text-base space-y-2 list-disc pl-5">
                <li>Advance / booking fee to confirm the project (non-refundable unless specified).</li>
                <li>Milestone-based or monthly payments as agreed in the proposal.</li>
                <li>Final payment on completion or before launch / final handover.</li>
              </ul>
              <p className="text-muted-foreground text-sm md:text-base mt-3">
                All fees, currencies, taxes and due dates are mentioned clearly in the proposal or invoices.
              </p>
            </section>
          </Reveal>

          {/* Intellectual Property */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                4. Intellectual Property & Usage Rights
              </h2>
              <p className="text-muted-foreground text-sm md:text-base mb-3">
                Unless stated otherwise in a specific agreement:
              </p>
              <ul className="text-muted-foreground text-sm md:text-base space-y-2 list-disc pl-5">
                <li>
                  Upon full and final payment, you receive rights to use the final approved deliverables 
                  (e.g., brand assets, website, AI flows) for your business.
                </li>
                <li>
                  We may showcase non-confidential work as part of our portfolio, case studies or marketing, 
                  unless you request otherwise in writing or under NDA.
                </li>
                <li>
                  We may use general learnings, frameworks or non-specific elements in other projects.
                </li>
              </ul>
            </section>
          </Reveal>

          {/* Client Responsibilities */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                5. Client Responsibilities
              </h2>
              <p className="text-muted-foreground text-sm md:text-base mb-3">
                To keep work smooth and on time, you agree to:
              </p>
              <ul className="text-muted-foreground text-sm md:text-base space-y-2 list-disc pl-5">
                <li>Share accurate and complete information about your business and requirements.</li>
                <li>Provide feedback, approvals and content within agreed timeframes.</li>
                <li>Ensure you have rights to all content (logos, images, copy, data) you provide.</li>
              </ul>
            </section>
          </Reveal>

          {/* Limitations */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                6. Limitations of Liability
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                We aim for high-quality work and measurable outcomes, but some factors (market shifts, platform changes, 
                ad policies, user behaviour, third-party tools) are beyond our control. Dreevn is not liable for:
              </p>
              <ul className="text-muted-foreground text-sm md:text-base space-y-2 list-disc pl-5 mt-3">
                <li>Indirect, incidental or consequential losses.</li>
                <li>Loss of revenue, profits or data due to external factors.</li>
                <li>Issues caused by third-party providers, platforms or tools.</li>
              </ul>
              <p className="text-muted-foreground text-xs mt-3">
                In any case, our total liability, if applicable, would be limited to the amount paid to us for the specific project.
              </p>
            </section>
          </Reveal>

          {/* Website Use */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                7. Use of Our Website
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                You agree not to misuse our website, attempt to break security, scrape content without permission, 
                or engage in any activity that could harm our systems or reputation.
              </p>
            </section>
          </Reveal>

          {/* Termination */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                8. Project Pause / Termination
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                If a project is paused or cancelled, we may:
              </p>
              <ul className="text-muted-foreground text-sm md:text-base space-y-2 list-disc pl-5 mt-3">
                <li>Invoice for work completed up to that date.</li>
                <li>Charge a restart or re-scoping fee if projects are paused for long periods.</li>
              </ul>
            </section>
          </Reveal>

          {/* Changes */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                9. Changes to These Terms
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                We may update these Terms from time to time. Continued use of our website or services after changes means 
                you accept the updated Terms.
              </p>
            </section>
          </Reveal>

          {/* Contact */}
          <Reveal>
            <section className="border-t border-border pt-6 mt-4">
              <h2 className="font-display text-lg md:text-xl font-semibold mb-2">
                10. Contact
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                For questions about these Terms, email{" "}
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

export default Terms;
