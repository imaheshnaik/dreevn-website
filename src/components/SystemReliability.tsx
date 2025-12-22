import { Shield, Zap, Settings, Server } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/animations';

const reliabilityFeatures = [
  {
    icon: Shield,
    title: 'Secure Hosting & Deployment',
    description: 'Enterprise-grade infrastructure with HTTPS, versioned deployments, controlled access, and rollback support.',
  },
  {
    icon: Zap,
    title: 'Performance-Optimized Builds',
    description: 'Speed, responsiveness, clean architecture, and Lighthouse-optimized performance are built into every system.',
  },
  {
    icon: Settings,
    title: 'Ongoing Maintenance',
    description: 'Continuous updates, fixes, improvements, and technical support after launch.',
  },
  {
    icon: Server,
    title: 'Managed Infrastructure',
    description: "We don't hand over and disappear — systems are actively monitored and managed.",
  },
];

export const SystemReliability = () => {
  return (
    <section className="pt-8 pb-16">
      <div className="section-container">
        {/* Gold Gradient Divider */}
        <div className="flex justify-center mb-12">
          <div className="w-64 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        </div>

        <Reveal>
          <div className="text-center mb-12">
            <p className="text-gold text-xs uppercase tracking-widest mb-3">Infrastructure</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
              System Reliability &{' '}
              <span className="text-gradient">Ownership</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Every project showcased here is treated as a managed system — not a one-time delivery.
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-4">
          {reliabilityFeatures.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="p-5 bg-muted/20 rounded-lg border border-border/60 transition-colors duration-300 hover:border-gold/40">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-muted/40 flex items-center justify-center shrink-0">
                    <feature.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
