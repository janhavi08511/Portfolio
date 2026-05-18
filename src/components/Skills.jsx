import { motion } from "framer-motion";
import { skills } from "../lib/data";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export function Skills() {
  return (
    <section id="skills" data-testid="skills-section" className="relative py-24 sm:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...reveal} className="max-w-3xl">
          <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
            02 / Tech Stack
          </div>
          <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl tracking-tighter">
            Tools I reach for, <span className="text-gradient">daily.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground font-body">
            Categorized by what they actually do in my workflow — not a flat checklist.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group, idx) => (
            <motion.div
              key={group.category}
              {...reveal}
              transition={{ ...reveal.transition, delay: idx * 0.05 }}
              className={`gradient-border p-6 group relative overflow-hidden ${idx === 0 ? "lg:col-span-2" : ""}`}
              data-testid={`skill-group-${group.category.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            >
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${group.accent} opacity-10 blur-3xl group-hover:opacity-20 transition`} />
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold text-xl">{group.category}</h3>
                <span className="font-mono text-xs text-muted-foreground">{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs font-mono rounded-md bg-secondary text-secondary-foreground border border-border hover:border-foreground/40 transition cursor-default"
                    data-testid={`skill-${item.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
