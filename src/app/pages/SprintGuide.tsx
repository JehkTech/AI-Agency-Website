import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle2, Loader2, CalendarClock } from "lucide-react";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 mb-4" style={{ fontWeight: 500 }}>
      <span className="w-4 h-px bg-white/20" />
      {children}
    </span>
  );
}

const sprintColumns = [
  {
    title: "Worked On",
    icon: CheckCircle2,
    items: [
      "Brand update to Luminous Pixels across web and docs",
      "Multi-agent workflow guide",
      "Contact details aligned to current operations",
    ],
  },
  {
    title: "In Progress",
    icon: Loader2,
    items: [
      "Email + analytics integrations (Resend, PostHog)",
      "Domain connection for luminouspixels.app",
      "Lead generation ops runbook refinements",
    ],
  },
  {
    title: "Planned",
    icon: CalendarClock,
    items: [
      "Client onboarding portal + proposal templates",
      "Case study expansion with real client metrics",
      "Premium site enhancements (proof, authority, conversion)",
    ],
  },
];

export function SprintGuide() {
  return (
    <div className="bg-black pt-24">
      <section className="relative py-20 border-b border-white/[0.06]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <SectionLabel>Sprint Guide</SectionLabel>
            <h1
              className="text-white mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              What we shipped,
              <br />
              <span style={{ color: "rgba(255,255,255,0.35)" }}>what we're building, what's next.</span>
            </h1>
            <p className="text-white/40 max-w-lg leading-relaxed" style={{ fontSize: "1rem" }}>
              A live snapshot of delivery priorities — aligned to Luminous Pixels’ growth and client outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
            {sprintColumns.map((column, index) => {
              const Icon = column.icon;
              return (
                <FadeIn key={column.title} delay={index * 0.1}>
                  <div className="bg-black p-8 md:p-10">
                    <div className="flex items-center gap-2 mb-6">
                      <Icon size={16} className="text-white/40" />
                      <h2 className="text-white text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>
                        {column.title}
                      </h2>
                    </div>
                    <ul className="space-y-4">
                      {column.items.map((item) => (
                        <li key={item} className="text-white/50 text-sm leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
