import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "../lib/data";

export function Footer() {
  return (
    <footer data-testid="footer" className="relative border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-xs font-mono text-muted-foreground">
          <span>© {new Date().getFullYear()} {profile.name}.</span>
          <span className="hidden sm:inline opacity-50">·</span>
          <span>Built with React, Tailwind & Framer Motion.</span>
        </div>
        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" data-testid="footer-github" className="h-9 w-9 rounded-md border border-border flex items-center justify-center hover:bg-secondary transition">
            <Github size={14} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" data-testid="footer-linkedin" className="h-9 w-9 rounded-md border border-border flex items-center justify-center hover:bg-secondary transition">
            <Linkedin size={14} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" data-testid="footer-email" className="h-9 w-9 rounded-md border border-border flex items-center justify-center hover:bg-secondary transition">
            <Mail size={14} />
          </a>
          <a href="#home" aria-label="Back to top" data-testid="footer-top" className="h-9 w-9 rounded-md border border-border flex items-center justify-center hover:bg-secondary transition">
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
