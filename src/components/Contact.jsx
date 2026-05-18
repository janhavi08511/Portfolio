import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, Phone, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { profile } from "../lib/data";

// ── EmailJS config ──────────────────────────────────────────────
// 1. Sign up free at https://emailjs.com
// 2. Create a service (Gmail) → copy Service ID below
// 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}
//    Set "To Email" in the template to janhavi08511@gmail.com
// 4. Copy your Public Key from Account → API Keys
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz456"
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // e.g. "abcDEFghiJKL"
// ────────────────────────────────────────────────────────────────

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email.");
      return false;
    }
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setError("");

    // If EmailJS is not configured yet, fall back to mailto
    if (
      EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
      window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`, "_blank");
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: profile.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setError("Failed to send. Please email me directly at " + profile.email);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative py-24 sm:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div {...reveal}>
            <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              06 / Get in touch
            </div>
            <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl tracking-tighter">
              Let's build something <span className="text-gradient">good.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground font-body">
              Currently open to <span className="text-foreground">software engineering internships</span>, full-stack roles, and Java backend opportunities. If you're a recruiter or founder, send me a note — I respond within 24 hours.
            </p>

            <div className="mt-8 space-y-3">
              <a href={`mailto:${profile.email}`} data-testid="contact-email-link" className="flex items-center gap-3 group">
                <span className="h-10 w-10 rounded-lg bg-secondary border border-border flex items-center justify-center group-hover:border-foreground/40 transition">
                  <Mail size={16} />
                </span>
                <span className="font-mono text-sm group-hover:text-foreground transition">{profile.email}</span>
              </a>
              <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} data-testid="contact-phone-link" className="flex items-center gap-3 group">
                <span className="h-10 w-10 rounded-lg bg-secondary border border-border flex items-center justify-center group-hover:border-foreground/40 transition">
                  <Phone size={16} />
                </span>
                <span className="font-mono text-sm group-hover:text-foreground transition">{profile.phone}</span>
              </a>
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-lg bg-secondary border border-border flex items-center justify-center">
                  <MapPin size={16} />
                </span>
                <span className="font-mono text-sm text-muted-foreground">{profile.location}</span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" data-testid="contact-github" className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition">
                <Github size={16} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" data-testid="contact-linkedin" className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition">
                <Linkedin size={16} />
              </a>
            </div>
          </motion.div>

          <motion.form
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.1 }}
            onSubmit={onSubmit}
            className="gradient-border p-6 sm:p-8"
            data-testid="contact-form"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                <CheckCircle size={48} className="text-emerald-400" />
                <h3 className="font-display font-semibold text-xl">Message sent!</h3>
                <p className="text-sm text-muted-foreground font-body">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-2 text-xs font-mono text-muted-foreground hover:text-foreground transition"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="block font-mono text-xs text-muted-foreground mb-1.5">Name</span>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      data-testid="contact-input-name"
                      className="w-full h-11 px-3 rounded-md bg-secondary border border-border focus:border-foreground/50 focus:outline-none font-body text-sm transition"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="block font-mono text-xs text-muted-foreground mb-1.5">Email</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      data-testid="contact-input-email"
                      className="w-full h-11 px-3 rounded-md bg-secondary border border-border focus:border-foreground/50 focus:outline-none font-body text-sm transition"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>
                <label className="block mt-4">
                  <span className="block font-mono text-xs text-muted-foreground mb-1.5">Message</span>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    data-testid="contact-input-message"
                    className="w-full px-3 py-3 rounded-md bg-secondary border border-border focus:border-foreground/50 focus:outline-none font-body text-sm transition resize-none"
                    placeholder="Tell me about the role, project, or opportunity..."
                  />
                </label>
                {error && (
                  <div data-testid="contact-error" className="mt-3 text-xs text-rose-400 font-mono">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  data-testid="contact-submit-btn"
                  className="mt-5 inline-flex items-center gap-2 px-5 h-11 rounded-md text-sm font-mono bg-foreground text-background hover:opacity-90 disabled:opacity-50 transition w-full sm:w-auto justify-center"
                >
                  <Send size={14} />
                  {loading ? "Sending..." : "Send Message"}
                </button>
                <p className="mt-3 text-xs text-muted-foreground font-mono">
                  Or email directly:{" "}
                  <a href={`mailto:${profile.email}`} className="hover:text-foreground transition">
                    {profile.email}
                  </a>
                </p>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
