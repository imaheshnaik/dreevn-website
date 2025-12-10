import { Reveal } from "@/components/ui/animations";

const RefundPolicy = () => {
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
              Refund & Cancellation Policy
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
      This policy covers refunds, cancellations, and milestone payments for
      services booked with <span className="text-foreground">Dreevn Digital Studio</span>.
    </p>
  </div>
</Reveal>


          <Reveal delay={0.15}>
            <p className="text-muted-foreground max-w-2xl">
              How we handle booking fees, project cancellations and refunds for services.
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
                Dreevn is a service-based studio. Our time, strategy, design, engineering and AI work are 
                custom-created for each client. This policy explains how refunds and cancellations are handled.
              </p>
            </div>
          </Reveal>

          {/* Booking / Advance */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                1. Booking Fees & Advance Payments
              </h2>
              <p className="text-muted-foreground text-sm md:text-base mb-3">
                To secure a project slot, we typically charge an advance or booking fee. This:
              </p>
              <ul className="text-muted-foreground text-sm md:text-base space-y-2 list-disc pl-5">
                <li>Confirms your project in our schedule.</li>
                <li>Allows us to allocate team time and resources.</li>
                <li>Is generally <span className="font-medium text-foreground">non-refundable</span> once work has started.</li>
              </ul>
            </section>
          </Reveal>

          {/* Milestones */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                2. Milestone Payments
              </h2>
              <p className="text-muted-foreground text-sm md:text-base mb-3">
                Projects are usually broken into milestones (strategy, design, development, launch, etc.).
                Once a milestone is delivered or substantially worked on:
              </p>
              <ul className="text-muted-foreground text-sm md:text-base space-y-2 list-disc pl-5">
                <li>Fees for that milestone are considered earned.</li>
                <li>Refunds for completed or in-progress milestones are generally not provided.</li>
              </ul>
            </section>
          </Reveal>

          {/* Cancellations */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                3. Project Cancellation by Client
              </h2>
              <p className="text-muted-foreground text-sm md:text-base mb-3">
                If you choose to pause or cancel a project:
              </p>
              <ul className="text-muted-foreground text-sm md:text-base space-y-2 list-disc pl-5">
                <li>We will invoice for work completed up to the date of cancellation.</li>
                <li>Any advance paid may be adjusted against completed work.</li>
                <li>If work done exceeds the advance, an additional partial payment may be due.</li>
              </ul>
            </section>
          </Reveal>

          {/* Cancellation by Dreevn */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                4. Project Cancellation by Dreevn
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                In rare cases, if we must cancel a project due to internal reasons (e.g., capacity constraints, 
                conflict of interest, or other unavoidable situations), we may:
              </p>
              <ul className="text-muted-foreground text-sm md:text-base space-y-2 list-disc pl-5 mt-3">
                <li>Deliver any work completed up to that point.</li>
                <li>Refund part of the unused advance, if applicable and fair.</li>
              </ul>
            </section>
          </Reveal>

          {/* Change of Scope */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                5. Change of Scope
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                If the project scope changes significantly after work begins (for example: new features, new flows, 
                extra pages, or new channels), we will:
              </p>
              <ul className="text-muted-foreground text-sm md:text-base space-y-2 list-disc pl-5 mt-3">
                <li>Re-estimate timelines and fees.</li>
                <li>Share an updated proposal or change request.</li>
                <li>Proceed only after written approval on the new scope.</li>
              </ul>
            </section>
          </Reveal>

          {/* Digital Products / Non-service items (optional for later) */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                6. No Refunds on Delivered Strategy & Digital Assets
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Strategy decks, design files, code, AI workflows and other digital deliverables are 
                custom-created intellectual work. Once shared, they cannot be &quot;returned&quot;. 
                For this reason, refunds are not provided for delivered or shared work products.
              </p>
            </section>
          </Reveal>

          {/* How to raise issue */}
          <Reveal>
            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold mb-3">
                7. Quality Concerns or Issues
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                If you are unhappy with any aspect of the work, we encourage you to:
              </p>
              <ul className="text-muted-foreground text-sm md:text-base space-y-2 list-disc pl-5 mt-3">
                <li>Raise it early, during the project, so we can correct and iterate.</li>
                <li>Use the agreed number of revision rounds for each phase.</li>
                <li>Discuss openly so we can find a fair and practical solution.</li>
              </ul>
            </section>
          </Reveal>

          {/* Contact */}
          <Reveal>
            <section className="border-t border-border pt-6 mt-4">
              <h2 className="font-display text-lg md:text-xl font-semibold mb-2">
                8. Contact for Billing & Refund Queries
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                For any questions about payments, invoices, cancellations or refunds, 
                email{" "}
                <a
                  href="mailto:mahesh@dreevn.com"
                  className="text-gold hover:underline"
                >
                  mahesh@dreevn.com
                </a>{" "}
                with your project name and invoice details. We aim to respond within 1–3 business days.
              </p>
            </section>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
