import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      data-testid="scroll-progress"
      className="fixed top-0 left-0 z-[100] h-[2px] bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-75"
      style={{ width: `${progress}%` }}
    />
  );
}
