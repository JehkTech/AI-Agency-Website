import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Mail, MapPin, Clock, CheckCircle2, Phone } from "lucide-react";

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

type FormState = "idle" | "submitting" | "success";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    budget: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate submission
    setTimeout(() => setFormState("success"), 1800);
  };

  const inputClass =
    "w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors duration-200";

  const selectClass =
    "w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/20 transition-colors duration-200 appearance-none";

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
            <SectionLabel>Contact</SectionLabel>
            <h1
              className="text-white max-w-2xl mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Let's build something
              <br />
              <span style={{ color: "rgba(255,255,255,0.35)" }}>remarkable together.</span>
            </h1>
            <p className="text-white/40 max-w-md leading-relaxed" style={{ fontSize: "1rem" }}>
              Tell us about your business. We'll get back within 24 hours to schedule your free discovery call.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16">
            {/* Form */}
            <FadeIn>
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-6">
                    <CheckCircle2 size={24} className="text-white/60" />
                  </div>
                  <h2
                    className="text-white mb-3"
                    style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.025em" }}
                  >
                    Message received.
                  </h2>
                  <p className="text-white/40 text-sm max-w-sm leading-relaxed">
                    We'll review your inquiry and reach out within 24 hours to schedule your discovery call.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/40 text-xs mb-2 uppercase tracking-widest" style={{ fontWeight: 500 }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs mb-2 uppercase tracking-widest" style={{ fontWeight: 500 }}>
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/40 text-xs mb-2 uppercase tracking-widest" style={{ fontWeight: 500 }}>
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs mb-2 uppercase tracking-widest" style={{ fontWeight: 500 }}>
                        Service Interested In
                      </label>
                      <div className="relative">
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={selectClass}
                        >
                          <option value="" className="bg-black">Select a service</option>
                          <option value="automation" className="bg-black">AI Automation</option>
                          <option value="consulting" className="bg-black">AI Consulting</option>
                          <option value="workflow" className="bg-black">Workflow Design</option>
                          <option value="architecture" className="bg-black">Systems Architecture</option>
                          <option value="unsure" className="bg-black">Not sure yet</option>
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
                          ↓
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/40 text-xs mb-2 uppercase tracking-widest" style={{ fontWeight: 500 }}>
                      Budget Range
                    </label>
                    <div className="relative">
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="" className="bg-black">Select budget range</option>
                        <option value="5k" className="bg-black">$5,000 – $15,000</option>
                        <option value="15k" className="bg-black">$15,000 – $50,000</option>
                        <option value="50k" className="bg-black">$50,000+</option>
                        <option value="unsure" className="bg-black">Not sure</option>
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
                        ↓
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/40 text-xs mb-2 uppercase tracking-widest" style={{ fontWeight: 500 }}>
                      Tell us about your project *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe your current workflows, what you'd like to automate, and any specific challenges you're facing..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-sm hover:bg-white/90 transition-all duration-200 group disabled:opacity-50 shadow-[0_12px_32px_rgba(255,255,255,0.12)] hover:shadow-[0_18px_40px_rgba(255,255,255,0.18)]"
                    style={{ fontWeight: 500 }}
                  >
                    {formState === "submitting" ? "Sending..." : "Send Message"}
                    {formState !== "submitting" && (
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    )}
                  </button>
                </form>
              )}
            </FadeIn>

            {/* Info sidebar */}
            <FadeIn delay={0.15}>
              <div className="space-y-8">
                {/* What to expect */}
                <div className="border border-white/[0.06] rounded-2xl p-6">
                  <h3 className="text-white text-sm mb-4" style={{ fontWeight: 500 }}>
                    What to expect
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Response within 24 hours",
                      "Free 30-min discovery call",
                      "Automation opportunity audit",
                      "ROI projection modeling",
                      "No obligation to proceed",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 size={13} className="text-white/30 mt-0.5 shrink-0" />
                        <span className="text-white/50 text-xs leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact details */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail size={14} className="text-white/30 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-white/30 text-xs mb-0.5">Email</div>
                      <a href="mailto:jehkat505@gmail.com" className="text-white/60 hover:text-white text-sm transition-colors">
                        jehkat505@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={14} className="text-white/30 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-white/30 text-xs mb-0.5">Phone</div>
                      <a href="tel:+260768737737" className="text-white/60 hover:text-white text-sm transition-colors">
                        +260 768 737 737
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={14} className="text-white/30 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-white/30 text-xs mb-0.5">Based in</div>
                      <span className="text-white/60 text-sm">Remote-first. Global delivery.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={14} className="text-white/30 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-white/30 text-xs mb-0.5">Response time</div>
                      <span className="text-white/60 text-sm">Within 24 business hours</span>
                    </div>
                  </div>
                </div>

                {/* Availability notice */}
                <div className="border border-white/[0.06] rounded-2xl p-5 bg-white/[0.01]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-white/60 text-xs" style={{ fontWeight: 500 }}>
                      Currently accepting clients
                    </span>
                  </div>
                  <p className="text-white/30 text-xs leading-relaxed">
                    We take on a limited number of new engagements per quarter. Secure your spot early.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
