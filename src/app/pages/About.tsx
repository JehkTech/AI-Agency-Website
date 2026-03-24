import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowRight, Globe, Target, Layers } from "lucide-react";

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

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Former AI engineer at Google DeepMind. 10+ years building machine learning systems at scale.",
    initials: "AC",
  },
  {
    name: "Sara Patel",
    role: "Head of Engineering",
    bio: "Previously at Stripe and Vercel. Specialized in distributed systems and AI infrastructure.",
    initials: "SP",
  },
  {
    name: "Marcus Webb",
    role: "Head of AI Strategy",
    bio: "Ex-McKinsey consultant turned AI operator. Designed automation strategies for 30+ enterprises.",
    initials: "MW",
  },
  {
    name: "Yuki Tanaka",
    role: "Lead AI Engineer",
    bio: "LLM specialist and multi-agent systems architect. Built production AI systems for Fortune 500s.",
    initials: "YT",
  },
];

const values = [
  {
    icon: Target,
    title: "Outcomes over outputs",
    description:
      "We don't measure success by lines of code or hours billed. We measure it by the hours your team gets back and the dollars you save.",
  },
  {
    icon: Layers,
    title: "Simplicity at scale",
    description:
      "The best automation systems are invisible. We design for reliability and clarity — not complexity for its own sake.",
  },
  {
    icon: Globe,
    title: "Built for the world",
    description:
      "We work across time zones, industries, and markets. Our systems are designed to scale globally from day one.",
  },
];

export function About() {
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
            className="max-w-3xl"
          >
            <SectionLabel>About</SectionLabel>
            <h1
              className="text-white mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              We believe every
              <br />
              <span style={{ color: "rgba(255,255,255,0.35)" }}>business deserves AI.</span>
            </h1>
            <p className="text-white/40 max-w-lg leading-relaxed" style={{ fontSize: "1rem" }}>
              Axon AI was founded on a simple belief: the productivity gap between businesses using AI and those that aren't will define the next decade of business. We exist to close that gap.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <SectionLabel>Our Mission</SectionLabel>
              <h2
                className="text-white mb-6"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15 }}
              >
                Democratize AI automation for service businesses worldwide.
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-4">
                Enterprise-grade AI automation has historically been accessible only to companies with seven-figure technology budgets. We change that.
              </p>
              <p className="text-white/40 text-sm leading-relaxed">
                By combining deep technical expertise with practical business operations knowledge, we deliver production-ready automation systems to businesses of any size — in any market, in any language.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-px bg-white/[0.06]">
                {[
                  { value: "2021", label: "Founded" },
                  { value: "18", label: "Countries" },
                  { value: "50+", label: "Projects" },
                  { value: "4.9★", label: "Client Rating" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-black p-8">
                    <div
                      className="text-white mb-1"
                      style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-white/30 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionLabel>Values</SectionLabel>
            <h2
              className="text-white max-w-xl mb-16"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              How we think about our work.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <FadeIn key={value.title} delay={i * 0.1}>
                  <div className="bg-black p-10">
                    <Icon size={18} className="text-white/30 mb-6" />
                    <h3 className="text-white mb-3 text-base" style={{ fontWeight: 500 }}>
                      {value.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <SectionLabel>Team</SectionLabel>
            <h2
              className="text-white max-w-xl mb-16"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              Built by engineers and operators.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.08}>
                <div className="border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.02] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-4">
                    <span className="text-white/60 text-sm" style={{ fontWeight: 500 }}>
                      {member.initials}
                    </span>
                  </div>
                  <div className="text-white text-sm mb-0.5" style={{ fontWeight: 500 }}>
                    {member.name}
                  </div>
                  <div className="text-white/30 text-xs mb-3">{member.role}</div>
                  <p className="text-white/40 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
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
              Work with us.
            </h2>
            <p className="text-white/40 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
              We take on a limited number of new clients each quarter to ensure quality. Book a call to see if we're a fit.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-sm hover:bg-white/90 transition-all duration-200 group"
              style={{ fontWeight: 500 }}
            >
              Get in Touch
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
