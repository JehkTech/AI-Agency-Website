import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { Zap, Brain, GitBranch, Server, ArrowRight, CheckCircle2 } from "lucide-react";

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

const services = [
  {
    icon: Zap,
    title: "AI Automation",
    tagline: "Eliminate manual work. Scale without headcount.",
    description:
      "We build end-to-end automation pipelines that replace repetitive, high-volume workflows across your entire business. From data entry to client onboarding — if it can be automated, we automate it.",
    deliverables: [
      "Custom automation workflow design",
      "Multi-tool integration (CRM, ERP, email, Slack, etc.)",
      "Error handling and monitoring systems",
      "Reporting and analytics dashboards",
      "Documentation and handoff",
    ],
    useCases: ["Client onboarding", "Document processing", "Invoice automation", "Lead management", "Reporting pipelines"],
  },
  {
    icon: Brain,
    title: "AI Consulting",
    tagline: "Strategy before technology. ROI before complexity.",
    description:
      "Not every business needs the same automation. We start with a deep audit of your operations, identify the highest-impact opportunities, and deliver an actionable AI roadmap with projected ROI.",
    deliverables: [
      "Operations audit and automation mapping",
      "AI opportunity analysis with ROI projections",
      "Technology stack recommendations",
      "Phased implementation roadmap",
      "Executive-ready presentation deck",
    ],
    useCases: ["Pre-implementation strategy", "AI readiness assessment", "Technology selection", "Cost/benefit analysis", "Board-level reporting"],
  },
  {
    icon: GitBranch,
    title: "Workflow Design",
    tagline: "Redesign how work flows. Build for the AI era.",
    description:
      "We re-architect your core business processes from the ground up — removing bottlenecks, adding AI decision points, and creating systems that run autonomously while keeping humans in control of what matters.",
    deliverables: [
      "Full process mapping and analysis",
      "AI-enhanced workflow architecture",
      "Integration design specifications",
      "Testing and QA protocols",
      "Change management support",
    ],
    useCases: ["Sales pipeline automation", "Customer support flows", "Operations management", "Compliance workflows", "Finance & billing"],
  },
  {
    icon: Server,
    title: "Systems Architecture",
    tagline: "Production-grade AI infrastructure built to scale.",
    description:
      "For businesses that need more than off-the-shelf tools. We design and deploy custom LLM pipelines, multi-agent orchestration systems, and AI infrastructure capable of handling enterprise workloads.",
    deliverables: [
      "Custom LLM pipeline architecture",
      "Multi-agent system design and deployment",
      "API and data pipeline engineering",
      "Security and compliance implementation",
      "Monitoring, alerting, and SLA management",
    ],
    useCases: ["Custom AI assistants", "Autonomous agent systems", "RAG implementations", "AI-powered APIs", "Enterprise AI platforms"],
  },
];

export function Services() {
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
            <SectionLabel>Services</SectionLabel>
            <h1
              className="text-white max-w-2xl mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              The full AI automation stack.
            </h1>
            <p className="text-white/40 max-w-md leading-relaxed" style={{ fontSize: "1rem" }}>
              From strategy and consulting through to full deployment and ongoing optimization — we handle every layer of your AI transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={0.1}>
                <div className="py-16 border-b border-white/[0.06] grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  {/* Left */}
                  <div>
                    <div className="w-12 h-12 rounded-xl border border-white/[0.08] flex items-center justify-center mb-6 bg-white/[0.03]">
                      <Icon size={20} className="text-white/60" />
                    </div>
                    <div className="text-white/25 text-xs mb-2 uppercase tracking-widest" style={{ fontWeight: 500 }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h2
                      className="text-white mb-3"
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600, letterSpacing: "-0.025em" }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-white/50 text-sm mb-4 italic">{service.tagline}</p>
                    <p className="text-white/40 text-sm leading-relaxed mb-6">{service.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((uc) => (
                        <span
                          key={uc}
                          className="text-xs text-white/30 border border-white/[0.06] rounded-full px-3 py-1"
                        >
                          {uc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right */}
                  <div>
                    <div className="text-white/30 text-xs uppercase tracking-widest mb-4" style={{ fontWeight: 500 }}>
                      What You Get
                    </div>
                    <ul className="space-y-3">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 size={14} className="text-white/30 mt-0.5 shrink-0" />
                          <span className="text-white/60 text-sm">{item}</span>
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

      {/* CTA */}
      <section className="py-28 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2
              className="text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              Not sure where to start?
            </h2>
            <p className="text-white/40 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
              Book a free 30-minute discovery call. We'll identify your biggest automation opportunities and show you what's possible.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-sm hover:bg-white/90 transition-all duration-200 group shadow-[0_12px_32px_rgba(255,255,255,0.12)] hover:shadow-[0_18px_40px_rgba(255,255,255,0.18)]"
              style={{ fontWeight: 500 }}
            >
              Book Free Discovery Call
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
