import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Services", href: "/services" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Pricing", href: "/#pricing" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Sprint Guide", href: "/sprint-guide" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-sm" />
              </div>
              <span className="text-white text-sm" style={{ fontWeight: 600 }}>
                Luminous Pixels
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Luminous Pixels builds AI automation systems that eliminate manual work and scale business operations globally.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="text-white/30 hover:text-white transition-colors text-sm flex items-center gap-1"
              >
                Twitter <ArrowUpRight size={12} />
              </a>
              <a
                href="#"
                className="text-white/30 hover:text-white transition-colors text-sm flex items-center gap-1"
              >
                LinkedIn <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white/40 text-xs uppercase tracking-widest mb-4" style={{ fontWeight: 500 }}>
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Luminous Pixels. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Built for global scale. Designed for conversion.
          </p>
        </div>
      </div>
    </footer>
  );
}
