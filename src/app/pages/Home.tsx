import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  Zap,
  Brain,
  GitBranch,
  Server,
  ChevronRight,
  Check,
  TrendingUp,
  Clock,
  DollarSign,
  AlertTriangle,
} from "lucide-react";

/* ─── Fade-in helper ─────────────────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
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

/* ─── Section label ───────────────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 mb-4" style={{ fontWeight: 500 }}>
      <span className="w-4 h-px bg-white/20" />
      {children}
    </span>
  );
}

/* ─── Services data ───────────────────────────────────────────────────────── */
const services = [
  {
    icon: Zap,
    title: "AI Automation",
    description:
      "We replace repetitive workflows with intelligent automation pipelines — eliminating manual work across your entire operation.",
    tags: ["Process Automation", "Task Orchestration", "Zero-Touch Ops"],
  },
  {
    icon: Brain,
    title: "AI Consulting",
    description:
      "Strategic AI roadmaps tailored to your business. We identify high-impact automation opportunities and design your path to implementation.",
    tags: ["AI Strategy", "ROI Mapping", "Technology Audit"],
  },
  {
    icon: GitBranch,
    title: "Workflow Design",
    description:
      "Custom AI-powered workflow architecture. We map, redesign, and automate your core business processes from end to end.",
    tags: ["Process Mapping", "System Design", "Integration Architecture"],
  },
  {
    icon: Server,
    title: "Systems Architecture",
    description:
      "Scalable AI infrastructure built for global deployment. From LLM pipelines to multi-agent systems — engineered for production.",
    tags: ["LLM Infrastructure", "Multi-Agent Systems", "API Integration"],
  },
];

/* ─── Problems data ───────────────────────────────────────────────────────── */
const problems = [
  {
    icon: Clock,
    title: "Time wasted on repetitive tasks",
    description: "Your team spends 60% of their day on manual, low-value work that could be fully automated.",
  },
  {
    icon: AlertTriangle,
    title: "Human error slows you down",
    description: "Manual processes introduce mistakes that cascade into costly delays and client dissatisfaction.",
  },
  {
    icon: DollarSign,
    title: "Scaling costs grow linearly",
    description: "Every new client or task requires hiring more people. Your costs scale with revenue, not efficiency.",
  },
  {
    icon: TrendingUp,
    title: "Competitors are automating",
    description: "Businesses using AI automation are delivering 10x faster with half the overhead. The gap is widening.",
  },
];

/* ─── Steps data ──────────────────────────────────────────────────────────── */
const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We audit your current workflows, identify bottlenecks, and map every automation opportunity across your business.",
  },
  {
    number: "02",
    title: "System Design",
    description: "Our engineers design a custom AI architecture — from data pipelines to agent orchestration — built for your specific needs.",
  },
  {
    number: "03",
    title: "Build & Deploy",
    description: "We build, test, and deploy your automation systems. Full integration with your existing tools in 2–6 weeks.",
  },
  {
    number: "04",
    title: "Optimize & Scale",
    description: "Continuous monitoring, performance tuning, and expansion of your automation ecosystem as your business grows.",
  },
];

/* ─── Case studies data ───────────────────────────────────────────────────── */
const caseStudies = [
  {
    client: "Legal Firm",
    industry: "Professional Services",
    result: "80% reduction in document processing time",
    metric: "80%",
    metricLabel: "Faster Processing",
    description: "Automated contract review, client onboarding, and billing workflows using a custom LLM pipeline.",
  },
  {
    client: "E-commerce Brand",
    industry: "Retail",
    result: "12x increase in customer support capacity",
    metric: "12x",
    metricLabel: "Support Scale",
    description: "Deployed AI agents for order tracking, returns, and tier-1 support — handling 5,000+ queries daily.",
  },
  {
    client: "Healthcare Clinic",
    industry: "Healthcare",
    result: "$340K saved annually in operational costs",
    metric: "$340K",
    metricLabel: "Annual Savings",
    description: "Automated appointment scheduling, patient follow-ups, and insurance verification workflows.",
  },
];

/* ─── Pricing data ────────────────────────────────────────────────────────── */
const pricing = [
  {
    name: "Starter",
    price: "$4,900",
    period: "one-time",
    description: "For businesses ready to automate their first workflow.",
    features: [
      "1 Automation System",
      "Discovery & design session",
      "Integration with 3 tools",
      "30-day support",
      "Documentation",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    price: "$12,000",
    period: "one-time",
    description: "For companies automating core operations end-to-end.",
    features: [
      "Up to 5 Automation Systems",
      "Full workflow architecture",
      "Unlimited integrations",
      "90-day support",
      "Training & documentation",
      "Priority communication",
    ],
    cta: "Most Popular",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "engagement",
    description: "For large-scale AI infrastructure and ongoing optimization.",
    features: [
      "Unlimited automation systems",
      "Dedicated AI engineer",
      "Multi-agent architecture",
      "Ongoing retainer available",
      "SLA & uptime guarantees",
      "White-label options",
    ],
    cta: "Contact Us",
    featured: false,
  },
];

/* ─── Logos ───────────────────────────────────────────────────────────────── */
const logos = ["Notion", "Salesforce", "HubSpot", "Slack", "Zapier", "Airtable", "Linear", "Stripe"];

/* ═══════════════════════════════════════════════════════════════════════════ */
export function Home() {
  return (
    <div className="bg-black">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,255,255,0.06) 0%, transparent 70%)",
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-white/[0.08] rounded-full px-4 py-2 mb-10 bg-white/[0.03]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/60 text-xs">Now serving clients globally</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.03em" }}
          >
            AI Automation
            <br />
            <span style={{ color: "rgba(255,255,255,0.35)" }}>for Ambitious</span>
            <br />
            Businesses.
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/40 mb-10 max-w-lg mx-auto"
            style={{ fontSize: "1.125rem", lineHeight: 1.7 }}
          >
            We build intelligent automation systems that eliminate manual work,
            scale your operations, and drive measurable ROI — globally.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm hover:bg-white/90 transition-all duration-200 group"
              style={{ fontWeight: 500 }}
            >
              Book a Discovery Call
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/case-studies"
              className="flex items-center gap-2 text-white/50 hover:text-white px-6 py-3 text-sm transition-colors duration-200 group"
            >
              See case studies
              <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-10 mt-20 border-t border-white/[0.06] pt-10"
          >
            {[
              { value: "50+", label: "Systems Deployed" },
              { value: "10x", label: "Avg. Efficiency Gain" },
              { value: "$2M+", label: "Client Savings" },
              { value: "18", label: "Countries Served" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-white text-xl mb-1" style={{ fontWeight: 600, letterSpacing: "-0.02em" }}>
                  {stat.value}
                </div>
                <div className="text-white/30 text-xs">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── LOGOS ─────────────────────────────────────────────────────────── */}
      <section className="border-t border-white/[0.06] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-center text-white/20 text-xs uppercase tracking-widest mb-8" style={{ fontWeight: 500 }}>
              Integrated with the tools you already use
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {logos.map((logo) => (
                <span
                  key={logo}
                  className="text-white/20 text-sm hover:text-white/40 transition-colors duration-300"
                  style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
                >
                  {logo}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PROBLEM ───────────────────────────────────────────────────────── */}
      <section className="border-t border-white/[0.06] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionLabel>The Problem</SectionLabel>
            <h2
              className="text-white max-w-2xl mb-16"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              Manual work is silently{" "}
              <span style={{ color: "rgba(255,255,255,0.3)" }}>killing your growth.</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
            {problems.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={i * 0.08}>
                  <div className="bg-black p-8 hover:bg-white/[0.02] transition-colors duration-300">
                    <Icon size={18} className="text-white/30 mb-4" />
                    <h3 className="text-white mb-3 text-base" style={{ fontWeight: 500 }}>
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section id="services" className="border-t border-white/[0.06] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionLabel>Services</SectionLabel>
            <h2
              className="text-white max-w-xl mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              Everything you need to automate at scale.
            </h2>
            <p className="text-white/40 text-sm max-w-md mb-16 leading-relaxed">
              From strategy to deployment — we cover the full AI automation stack.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.title} delay={i * 0.1}>
                  <div className="group border border-white/[0.06] rounded-2xl p-8 bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl border border-white/[0.08] flex items-center justify-center mb-6 bg-white/[0.03] group-hover:bg-white/[0.06] transition-colors">
                      <Icon size={18} className="text-white/60" />
                    </div>
                    <h3 className="text-white mb-3" style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                      {service.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-white/30 border border-white/[0.06] rounded-full px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-8 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors group"
              >
                View all services
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section className="border-t border-white/[0.06] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionLabel>Process</SectionLabel>
            <h2
              className="text-white max-w-xl mb-16"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              From zero to automated in weeks, not months.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/[0.06]">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.08}>
                <div className="bg-black p-8 hover:bg-white/[0.02] transition-colors">
                  <div
                    className="text-white/10 mb-6"
                    style={{ fontSize: "3rem", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-white text-base mb-3" style={{ fontWeight: 500 }}>
                    {step.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ──────────────────────────────────────────────────── */}
      <section id="case-studies" className="border-t border-white/[0.06] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionLabel>Results</SectionLabel>
            <h2
              className="text-white max-w-xl mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              Real results from real businesses.
            </h2>
            <p className="text-white/40 text-sm max-w-md mb-16 leading-relaxed">
              These aren't projections. These are outcomes from production deployments.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudies.map((cs, i) => (
              <FadeIn key={cs.client} delay={i * 0.1}>
                <div className="border border-white/[0.06] rounded-2xl p-8 bg-white/[0.01] hover:border-white/[0.12] hover:bg-white/[0.03] transition-all duration-300 flex flex-col">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <div className="text-white text-xs mb-1" style={{ fontWeight: 500 }}>
                        {cs.client}
                      </div>
                      <div className="text-white/30 text-xs">{cs.industry}</div>
                    </div>
                    <span className="text-xs border border-white/[0.08] rounded-full px-2.5 py-1 text-white/30">
                      Case Study
                    </span>
                  </div>
                  <div className="mb-6">
                    <div
                      className="text-white mb-1"
                      style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}
                    >
                      {cs.metric}
                    </div>
                    <div className="text-white/40 text-xs">{cs.metricLabel}</div>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed flex-1">{cs.description}</p>
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-1 text-white/40 hover:text-white text-xs mt-6 transition-colors group"
                  >
                    Read case study
                    <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────────── */}
      <section id="pricing" className="border-t border-white/[0.06] py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionLabel>Pricing</SectionLabel>
            <h2
              className="text-white max-w-xl mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              Simple, transparent pricing.
            </h2>
            <p className="text-white/40 text-sm max-w-md mb-16 leading-relaxed">
              No retainer required for core projects. Pay once, automate forever.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pricing.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.08}>
                <div
                  className={`rounded-2xl p-8 flex flex-col h-full transition-all duration-300 ${
                    plan.featured
                      ? "bg-white text-black"
                      : "border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/[0.12]"
                  }`}
                >
                  <div className="mb-8">
                    <div
                      className={`text-xs uppercase tracking-widest mb-4 ${plan.featured ? "text-black/40" : "text-white/30"}`}
                      style={{ fontWeight: 500 }}
                    >
                      {plan.name}
                    </div>
                    <div
                      className={`mb-1 ${plan.featured ? "text-black" : "text-white"}`}
                      style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}
                    >
                      {plan.price}
                    </div>
                    <div className={`text-xs mb-4 ${plan.featured ? "text-black/40" : "text-white/30"}`}>
                      {plan.period}
                    </div>
                    <p className={`text-sm leading-relaxed ${plan.featured ? "text-black/60" : "text-white/40"}`}>
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          size={14}
                          className={`mt-0.5 shrink-0 ${plan.featured ? "text-black" : "text-white/40"}`}
                        />
                        <span
                          className={`text-sm ${plan.featured ? "text-black/70" : "text-white/50"}`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block text-center py-3 rounded-full text-sm transition-all duration-200 ${
                      plan.featured
                        ? "bg-black text-white hover:bg-black/80"
                        : "border border-white/[0.1] text-white hover:bg-white/[0.06]"
                    }`}
                    style={{ fontWeight: 500 }}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL / QUOTE ───────────────────────────────────────────── */}
      <section className="border-t border-white/[0.06] py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <blockquote
              className="text-white mb-8"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.25rem)", fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.35 }}
            >
              "Axon AI automated 80% of our back-office operations in 6 weeks.
              We scaled from 200 to 2,000 clients without adding a single headcount."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/50">
                JM
              </div>
              <div className="text-left">
                <div className="text-white text-sm" style={{ fontWeight: 500 }}>
                  James M.
                </div>
                <div className="text-white/40 text-xs">CEO, LegalScale Corp</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="border-t border-white/[0.06] py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2
              className="text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Ready to automate
              <br />
              your business?
            </h2>
            <p className="text-white/40 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
              Book a free discovery call. We'll map your automation opportunities and show you the ROI before you commit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-sm hover:bg-white/90 transition-all duration-200 group"
                style={{ fontWeight: 500 }}
              >
                Book a Free Call
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="text-white/40 hover:text-white px-6 py-3 text-sm transition-colors"
              >
                View case studies →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
