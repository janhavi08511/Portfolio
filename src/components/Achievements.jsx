import { motion } from "framer-motion";
import { Trophy, Award, BadgeCheck, Users } from "lucide-react";
import { achievements } from "../lib/data";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const iconMap = { award: Trophy, cert: BadgeCheck, leadership: Users, default: Award };
const colorMap = { award: "text-amber-400", cert: "text-cyan-400", leadership: "text-violet-400" };

export function Achievements() {
  return (
    <section id="achievements" data-testid="achievements-section" className="relative py-24 sm:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...reveal} className="max-w-3xl">
          <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
            05 / Achievements & Certifications
          </div>
          <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl tracking-tighter">
            Receipts, not <span className="text-gradient">resumes.</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, idx) => {
            const Icon = iconMap[a.type] || iconMap.default;
            return (
              <motion.div
                key={a.title}
                {...reveal}
                transition={{ ...reveal.transition, delay: idx * 0.05 }}
                className="gradient-border p-5 flex gap-4 items-start hover:bg-secondary/30 transition group"
                data-testid={`achievement-${idx}`}
              >
                <div className={`h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-border flex items-center justify-center ${colorMap[a.type] || "text-foreground"} group-hover:scale-110 transition`}>
                  <Icon size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-base leading-snug">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground font-body">{a.note}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
