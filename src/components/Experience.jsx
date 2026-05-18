import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experience } from "../lib/data";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export function Experience() {
  return (
    <section id="experience" data-testid="experience-section" className="relative py-24 sm:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...reveal} className="max-w-3xl">
          <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
            03 / Experience
          </div>
          <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl tracking-tighter">
            Where I've been <span className="text-gradient">shipping code.</span>
          </h2>
        </motion.div>

        <div className="mt-14 relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-violet-500/40 to-transparent" />

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.company}
                {...reveal}
                transition={{ ...reveal.transition, delay: idx * 0.08 }}
                className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-start ${
                  idx % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
                data-testid={`exp-${idx}`}
              >
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -top-1 w-4 h-4 rounded-full bg-background border-2 border-cyan-400 pulse-dot z-10" />

                <div className={`pl-12 md:pl-0 ${idx % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                  <div className="font-mono text-xs text-muted-foreground">{exp.period}</div>
                  <h3 className="mt-1 font-display font-semibold text-2xl">{exp.role}</h3>
                  <div className="mt-1 flex items-center gap-2 text-muted-foreground text-sm font-mono justify-start md:justify-end">
                    {idx % 2 !== 0 && (
                      <>
                        <Briefcase size={14} />
                        <span>{exp.company}</span>
                        <span className="opacity-50">·</span>
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </>
                    )}
                    {idx % 2 === 0 && (
                      <div className="flex items-center gap-2 md:flex-row-reverse">
                        <span>{exp.location}</span>
                        <MapPin size={14} />
                        <span className="opacity-50">·</span>
                        <span className="text-foreground">{exp.company}</span>
                        <Briefcase size={14} />
                      </div>
                    )}
                  </div>
                </div>

                <div className={`pl-12 md:pl-0 ${idx % 2 === 0 ? "md:pl-10" : "md:pr-10 md:text-right"}`}>
                  <div className="gradient-border p-5">
                    <ul className="space-y-3 text-sm text-muted-foreground font-body leading-relaxed">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-cyan-500 mt-1 flex-shrink-0">▹</span>
                          <span className="text-left">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={`mt-4 flex flex-wrap gap-1.5 ${idx % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                      {exp.stack.map((s) => (
                        <span key={s} className="px-2 py-1 text-[10px] font-mono rounded bg-secondary text-secondary-foreground border border-border">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
