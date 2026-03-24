import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowRight, Phone, Map, Wrench, TrendingUp, CheckCircle2 } from "lucide-react";

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

const phases = [
  {
    number: "01",
    icon: Phone,
    title: "Discovery Call",
    duration: "Week 1",
    description:
      "We begin with a 90-minute deep-dive into your business. We map your current workflows, identify bottlenecks, and uncover every automation opportunity across your operations.",
    activities: [
      "Business operations audit",
      "Workflow documentation review",
      "Technology stack assessment",
      "Team interviews (optional)",
      "Automation opportunity mapping",
      "ROI projection modeling",
    ],
    outcome: "A complete automation opportunity report delivered within 48 hours.",
  },
  {
    number: "02",
    icon: Map,
    title: "System Design",
    duration: "Week 1–2",
    description:
      "Our engineering team designs your custom AI architecture. Every integration, agent, and pipeline is documented before a single line of code is written.",
    activities: [
      "Technical architecture design",
      "Data flow diagrams",
      "Integration specifications",
      "LLM/AI model selection",
      "Security and compliance review",
      "Timeline and milestone planning",
    ],
    outcome: "Full technical specification document and approved project plan.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Build & Deploy",
    duration: "Week 2–6",
    description:
      "We build, test, and deploy your automation systems. You get weekly progress updates and a staging environment for review before everything goes live.",
    activities: [
      "Development sprints (1-week cycles)",
      "Weekly progress demos",
      "Staging environment testing",
      "Integration and QA testing",
      "Production deployment",
      "Team training and handoff",
    ],
    outcome: "Fully deployed automation system with documentation and training.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimize & Scale",
    duration: "Ongoing",
    description:
      "After deployment, we monitor performance, resolve edge cases, and continuously expand your automation ecosystem as your business grows and evolves.",
    activities: [
      "Performance monitoring & alerting",
      "Monthly optimization reviews",
      "Edge case resolution",
      "New automation additions",
      "Scaling infrastructure as needed",
      "Quarterly strategy sessions",
    ],
    outcome: "Continuously improving automation that scales with your business.",
  },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most automation projects are delivered in 2–6 weeks depending on complexity. Simple single-workflow projects can go live in 10 days. Enterprise-scale systems typically take 6–10 weeks.",
  },
  {
    q: "What tools and platforms do you integrate with?",
    a: "We integrate with any tool that has an API — including Salesforce, HubSpot, Notion, Airtable, Slack, Gmail, QuickBooks, Stripe, Zapier, and hundreds more. We also build custom integrations when needed.",
  },
  {
    q: "Do I need a technical team to work with you?",
    a: "No. We work with non-technical business owners and operators regularly. We handle all the engineering and provide clear documentation so your team can manage the systems we build.",
  },
  {
    q: "What happens if something breaks after deployment?",
    a: "All projects include a post-deployment support period (30–90 days depending on plan). We monitor systems proactively and resolve issues within 24 hours. Extended support retainers are also available.",
  },
  {
    q: "Can I start with a small project and scale up?",
    a: "Absolutely. Many clients start with a Starter engagement to automate one workflow, then expand to cover their entire operation. Our architecture is designed for phased growth.",
  },
];

export function HowItWorks() {
  return (
    <div className="bg-black pt-24">
      {/* Hero */}
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
          >
            <SectionLabel>Process</SectionLabel>
            <h1
              className="text-white max-w-2xl mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              From call to
              <br />
              <span style={{ color: "rgba(255,255,255,0.35)" }}>fully automated.</span>
            </h1>
            <p className="text-white/40 max-w-md leading-relaxed" style={{ fontSize: "1rem" }}>
              Our 4-phase process is designed to go from zero to production in weeks, not months — with complete visibility at every step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <FadeIn key={phase.number} delay={0.1}>
                <div className="py-16 border-b border-white/[0.06] grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-8 items-start">
                  {/* Phase label */}
                  <div>
                    <div
                      className="text-white/10 mb-4"
                      style={{ fontSize: "4rem", fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1 }}
                    >
                      {phase.number}
                    </div>
                    <div className="inline-flex items-center gap-2 border border-white/[0.06] rounded-full px-3 py-1.5">
                      <Icon size={11} className="text-white/40" />
                      <span className="text-white/40 text-xs">{phase.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h2
                      className="text-white mb-3"
                      style={{ fontSize: "1.4rem", fontWeight: 600, letterSpacing: "-0.025em" }}
                    >
                      {phase.title}
                    </h2>
                    <p className="text-white/40 text-sm leading-relaxed mb-6">{phase.description}</p>
                    <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
                      <div className="text-white/30 text-xs mb-2 uppercase tracking-widest" style={{ fontWeight: 500 }}>
                        Outcome
                      </div>
                      <p className="text-white/60 text-sm">{phase.outcome}</p>
                    </div>
                  </div>

                  {/* Activities */}
                  <div>
                    <div className="text-white/30 text-xs uppercase tracking-widest mb-4" style={{ fontWeight: 500 }}>
                      Activities
                    </div>
                    <ul className="space-y-2.5">
                      {phase.activities.map((activity) => (
                        <li key={activity} className="flex items-center gap-3">
                          <CheckCircle2 size={13} className="text-white/25 shrink-0" />
                          <span className="text-white/50 text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-28 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionLabel>FAQ</SectionLabel>
            <h2
              className="text-white max-w-md mb-16"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              Common questions.
            </h2>
          </FadeIn>

          <div className="max-w-2xl">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="py-6 border-b border-white/[0.06]">
                  <h3 className="text-white mb-3 text-base" style={{ fontWeight: 500 }}>
                    {faq.q}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2
              className="text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              Ready to start your automation journey?
            </h2>
            <p className="text-white/40 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
              Step one is a free 30-minute call. No sales pitch — just an honest audit of your automation potential.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-sm hover:bg-white/90 transition-all duration-200 group"
              style={{ fontWeight: 500 }}
            >
              Book Your Free Call
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
