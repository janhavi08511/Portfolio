import { useEffect, useRef } from "react";

export function MouseGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      data-testid="mouse-glow"
      className="pointer-events-none fixed z-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
        transition: "left 0.12s ease-out, top 0.12s ease-out",
      }}
    />
  );
}
