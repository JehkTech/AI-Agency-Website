import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowRight, TrendingUp } from "lucide-react";

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

const caseStudies = [
  {
    client: "LegalScale Corp",
    industry: "Legal Services",
    location: "United States",
    engagement: "AI Automation + Workflow Design",
    challenge:
      "LegalScale was manually processing 200+ contracts per week across a team of 8 paralegals. Document review took 3–4 hours per file, and human error was causing costly delays in client onboarding.",
    solution:
      "We built a custom LLM pipeline to extract, classify, and summarize contract clauses. An automated workflow triggers review queues, flags anomalies, and generates client reports — all without human touchpoints.",
    metrics: [
      { value: "80%", label: "Reduction in processing time" },
      { value: "6 hrs", label: "Saved per contract" },
      { value: "$280K", label: "Annual labor savings" },
      { value: "6 weeks", label: "Time to deployment" },
    ],
    stack: ["GPT-4o", "Zapier", "Notion", "Google Drive", "Slack"],
    quote: "We went from drowning in paperwork to having AI handle our entire document pipeline. Axon delivered exactly what they promised.",
    quoteName: "James M., CEO",
  },
  {
    client: "ShopEdge",
    industry: "E-commerce",
    location: "United Kingdom",
    engagement: "AI Automation + Systems Architecture",
    challenge:
      "ShopEdge was handling 5,000+ customer support queries daily across email, chat, and social media. Their support team of 12 was overwhelmed, response times exceeded 24 hours, and customer satisfaction was declining.",
    solution:
      "We built an AI-powered omnichannel support system — intelligent triage, automated responses for tier-1 queries, and seamless handoff protocols to human agents for complex issues.",
    metrics: [
      { value: "12x", label: "Support capacity increase" },
      { value: "94%", label: "Tier-1 resolution rate" },
      { value: "4 min", label: "Average response time" },
      { value: "31%", label: "CSAT improvement" },
    ],
    stack: ["Claude API", "Intercom", "Shopify", "Airtable", "Twilio"],
    quote: "Our support team now handles the 6% of queries that actually need a human. Everything else runs automatically, 24/7.",
    quoteName: "Sarah K., Head of Operations",
  },
  {
    client: "MediFlow Clinic",
    industry: "Healthcare",
    location: "Australia",
    engagement: "Workflow Design + AI Automation",
    challenge:
      "MediFlow was losing 3+ hours per day per staff member to manual appointment management, patient follow-ups, and insurance verification — core tasks that didn't require clinical expertise.",
    solution:
      "We automated the entire patient administration cycle: AI-powered scheduling, automated follow-up sequences, insurance verification pipelines, and a unified dashboard for clinic managers.",
    metrics: [
      { value: "$340K", label: "Annual cost savings" },
      { value: "3 hrs", label: "Saved per staff daily" },
      { value: "99%", label: "Appointment confirmation rate" },
      { value: "4 weeks", label: "Full deployment" },
    ],
    stack: ["OpenAI", "Calendly API", "Medicare API", "HubSpot", "Twilio"],
    quote: "The ROI was visible in the first month. Our admin team went from fire-fighting to actually supporting patient care.",
    quoteName: "Dr. Rachel T., Clinic Director",
  },
  {
    client: "ProBuild Contractors",
    industry: "Construction",
    location: "Canada",
    engagement: "AI Consulting + Workflow Design",
    challenge:
      "ProBuild had no structured workflow for their end-to-end project management — quotes, contracts, supplier orders, and invoicing were all handled manually, with critical information stored in email threads.",
    solution:
      "Starting with an AI consulting engagement to map the entire operation, we designed and built a connected workflow system — from quote generation through invoice payment — integrated across their existing tools.",
    metrics: [
      { value: "65%", label: "Faster project setup" },
      { value: "Zero", label: "Missed invoice deadlines" },
      { value: "22%", label: "Margin improvement" },
      { value: "8 weeks", label: "Full transformation" },
    ],
    stack: ["GPT-4o", "Xero", "Buildertrend", "Slack", "DocuSign"],
    quote: "We finally have visibility into our entire business. Axon didn't just automate our work — they gave us our first real operating system.",
    quoteName: "Mike T., Founder",
  },
];

const overallStats = [
  { value: "50+", label: "Systems Deployed" },
  { value: "$2M+", label: "Client Cost Savings" },
  { value: "10x", label: "Avg. Efficiency Gain" },
  { value: "18", label: "Countries Served" },
];

export function CaseStudies() {
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
            <SectionLabel>Case Studies</SectionLabel>
            <h1
              className="text-white max-w-2xl mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Results that speak
              <br />
              for themselves.
            </h1>
            <p className="text-white/40 max-w-md leading-relaxed" style={{ fontSize: "1rem" }}>
              Real automation systems. Real deployments. Real businesses transformed.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-10 mt-14"
          >
            {overallStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-white mb-1" style={{ fontSize: "1.8rem", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div className="text-white/30 text-xs">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          {caseStudies.map((cs, i) => (
            <FadeIn key={cs.client} delay={0.1}>
              <div className="py-20 border-b border-white/[0.06]">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-12">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs border border-white/[0.08] rounded-full px-3 py-1 text-white/30">
                        {cs.industry}
                      </span>
                      <span className="text-xs text-white/20">{cs.location}</span>
                    </div>
                    <h2
                      className="text-white"
                      style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 600, letterSpacing: "-0.025em" }}
                    >
                      {cs.client}
                    </h2>
                    <p className="text-white/30 text-sm mt-1">{cs.engagement}</p>
                  </div>
                  <div className="flex items-center gap-2 text-white/20 text-xs">
                    <TrendingUp size={12} />
                    Case Study {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] mb-12">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="bg-black p-6">
                      <div
                        className="text-white mb-1"
                        style={{ fontSize: "1.8rem", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}
                      >
                        {m.value}
                      </div>
                      <div className="text-white/30 text-xs">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
                  <div>
                    <div className="text-white/30 text-xs uppercase tracking-widest mb-3" style={{ fontWeight: 500 }}>
                      The Challenge
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <div className="text-white/30 text-xs uppercase tracking-widest mb-3" style={{ fontWeight: 500 }}>
                      Our Solution
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {cs.stack.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs text-white/30 border border-white/[0.06] rounded-full px-3 py-1"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <div className="border-l-2 border-white/[0.08] pl-6">
                  <p className="text-white/60 text-sm leading-relaxed italic mb-2">"{cs.quote}"</p>
                  <p className="text-white/30 text-xs">{cs.quoteName}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2
              className="text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              Want results like these?
            </h2>
            <p className="text-white/40 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
              Let's build your automation case study.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-sm hover:bg-white/90 transition-all duration-200 group"
              style={{ fontWeight: 500 }}
            >
              Start Your Project
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
