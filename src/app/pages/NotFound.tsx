import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div
          className="text-white/[0.04] mb-6 select-none"
          style={{ fontSize: "12rem", fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1 }}
        >
          404
        </div>
        <h1
          className="text-white mb-3"
          style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.025em" }}
        >
          Page not found
        </h1>
        <p className="text-white/40 text-sm mb-8 max-w-xs mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          Back to home
        </Link>
      </motion.div>
    </div>
  );
}
