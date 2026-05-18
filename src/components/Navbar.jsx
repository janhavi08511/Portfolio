import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { profile } from "../lib/data";
import { toggleTheme } from "../hooks/usetheme";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleTheme = () => {
    toggleTheme();
    setDark((d) => !d);
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-mono text-sm font-semibold text-gradient">
          {profile.handle}
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={handleTheme}
            aria-label="Toggle theme"
            className="h-8 w-8 rounded-md border border-border flex items-center justify-center hover:bg-secondary transition"
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={handleTheme}
            aria-label="Toggle theme"
            className="h-8 w-8 rounded-md border border-border flex items-center justify-center"
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="h-8 w-8 rounded-md border border-border flex items-center justify-center"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden glass border-b border-border px-4 pb-4"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 font-mono text-sm text-muted-foreground hover:text-foreground transition"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
