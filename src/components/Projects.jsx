import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../lib/data";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export function Projects() {
  return (
    <section id="projects" data-testid="projects-section" className="relative py-24 sm:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...reveal} className="max-w-3xl">
          <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
            04 / Projects
          </div>
          <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl tracking-tighter">
            Things I've <span className="text-gradient">shipped.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground font-body">
            Production systems, AI platforms, and full-stack apps — built end-to-end.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              {...reveal}
              transition={{ ...reveal.transition, delay: idx * 0.08 }}
              className="gradient-border overflow-hidden group flex flex-col"
              data-testid={`project-${project.id}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20`} />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-semibold text-xl leading-snug">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">{project.summary}</p>

                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-cyan-500 mt-0.5 flex-shrink-0">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <span key={s} className="px-2 py-1 text-[10px] font-mono rounded bg-secondary text-secondary-foreground border border-border">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3 pt-2 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition"
                  >
                    <Github size={14} /> Code
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live demo"
                      className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
