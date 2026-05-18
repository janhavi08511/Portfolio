import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { profile } from "../lib/data";
import { Particles } from "./Particles";

function useTypewriter(words, speed = 80, pause = 1500) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) setTimeout(() => setDeleting(true), pause);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setI((p) => p + 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

export function Hero() {
  const word = useTypewriter(profile.roles, 70, 1400);

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40 dark:opacity-30 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none dark:bg-cyan-500/20" />
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-violet-500/10 blur-[140px] pointer-events-none dark:bg-violet-500/25" />
      <Particles count={36} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-border text-xs font-mono"
          data-testid="hero-availability"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-muted-foreground">{profile.avail}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-display font-bold tracking-tighter text-5xl sm:text-6xl lg:text-7xl leading-[1.05]"
          data-testid="hero-name"
        >
          Hey, I'm <span className="text-gradient">{profile.name}</span>.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-foreground/90"
          data-testid="hero-role"
        >
          A{" "}
          <span className="font-mono text-2xl sm:text-3xl text-gradient-cyan cursor-blink">
            {word}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground font-body leading-relaxed"
          data-testid="hero-tagline"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            data-testid="hero-hire-btn"
            className="group inline-flex items-center gap-2 px-5 h-11 rounded-md text-sm font-medium font-mono bg-foreground text-background hover:opacity-90 transition relative overflow-hidden"
          >
            <Sparkles size={16} />
            Hire Me
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#projects"
            data-testid="hero-projects-btn"
            className="inline-flex items-center gap-2 px-5 h-11 rounded-md text-sm font-medium font-mono border border-border hover:bg-secondary transition"
          >
            View Projects
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            data-testid="hero-resume-btn"
            className="inline-flex items-center gap-2 px-5 h-11 rounded-md text-sm font-medium font-mono text-muted-foreground hover:text-foreground transition"
          >
            <Download size={16} />
            Download Résumé
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex items-center gap-4 text-muted-foreground"
        >
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" data-testid="hero-github" className="hover:text-foreground transition">
            <Github size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" data-testid="hero-linkedin" className="hover:text-foreground transition">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" data-testid="hero-email" className="hover:text-foreground transition">
            <Mail size={20} />
          </a>
          <span className="font-mono text-xs ml-2">{profile.location}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="hidden lg:block absolute right-4 lg:right-8 top-32 float-y"
        >
          <div className="glass rounded-xl p-4 font-mono text-xs w-72 shadow-2xl">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-muted-foreground text-[10px]">~/janhavi.dev</span>
            </div>
            <div className="text-muted-foreground">
              <span className="text-violet-400">const</span>{" "}
              <span className="text-cyan-400">engineer</span> = {"{"}
            </div>
            <div className="pl-4 text-muted-foreground">
              role: <span className="text-emerald-400">"Full Stack + AI"</span>,
            </div>
            <div className="pl-4 text-muted-foreground">
              stack: <span className="text-emerald-400">["Java", "Spring", "React"]</span>,
            </div>
            <div className="pl-4 text-muted-foreground">
              ships: <span className="text-amber-400">true</span>,
            </div>
            <div className="text-muted-foreground">{"}"} ;</div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground text-xs font-mono flex flex-col items-center gap-2">
        <span>scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-px h-6 bg-gradient-to-b from-foreground/60 to-transparent"
        />
      </div>
    </section>
  );
}
