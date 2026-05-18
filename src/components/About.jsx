import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { profile, stats, education } from "../lib/data";
import { Counter } from "./Counter";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export function About() {
  return (
    <section id="about" data-testid="about-section" className="relative py-24 sm:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div {...reveal}>
            <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              01 / About
            </div>
            <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl tracking-tighter">
              Who I <span className="text-gradient">am.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-foreground/80 font-body leading-relaxed">
              I'm <span className="text-foreground font-semibold">{profile.name}</span> — a 3rd year Computer Engineering student from {profile.location}.
              I build production-grade full-stack systems with Java & Spring Boot on the backend and React on the frontend,
              and I'm deeply interested in applying AI/ML to solve real-world problems.
            </p>
            <p className="mt-4 text-base text-muted-foreground font-body leading-relaxed">
              Currently interning at Xmega and freelancing as a Project Manager at Teamwala,
              I've shipped live systems, won hackathons, and solved 1200+ DSA problems.
              I thrive in fast-moving teams and love owning things end-to-end.
            </p>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="gradient-border p-6 flex flex-col items-center text-center"
                data-testid={`stat-${idx}`}
              >
                <span className="font-display font-bold text-3xl sm:text-4xl text-gradient">
                  <Counter value={stat.value} suffix={stat.suffix} precision={stat.precision ?? 0} />
                </span>
                <span className="mt-2 font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.15 }}
          className="mt-16"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground tracking-widest uppercase mb-6">
            <GraduationCap size={14} />
            Education
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="gradient-border p-5 flex flex-col gap-1"
                data-testid={`edu-${idx}`}
              >
                <span className="font-mono text-[10px] text-muted-foreground">{edu.period}</span>
                <h3 className="font-display font-semibold text-base leading-snug">{edu.degree}</h3>
                <p className="text-xs text-muted-foreground font-body">{edu.institute}</p>
                <span className="mt-2 inline-block text-xs font-mono text-cyan-400">{edu.result}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
