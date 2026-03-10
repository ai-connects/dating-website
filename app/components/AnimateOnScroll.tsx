"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

type Animation =
  | "fadeUp"
  | "fadeDown"
  | "fadeIn"
  | "slideLeft"
  | "slideRight"
  | "scaleUp";

interface Props {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
}

const hidden: Record<Animation, CSSProperties> = {
  fadeUp: { opacity: 0, transform: "translateY(60px)" },
  fadeDown: { opacity: 0, transform: "translateY(-40px)" },
  fadeIn: { opacity: 0, transform: "none" },
  slideLeft: { opacity: 0, transform: "translateX(-80px)" },
  slideRight: { opacity: 0, transform: "translateX(80px)" },
  scaleUp: { opacity: 0, transform: "scale(0.85)" },
};

const visible: CSSProperties = {
  opacity: 1,
  transform: "translateY(0) translateX(0) scale(1)",
};

export default function AnimateOnScroll({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 700,
  threshold = 0.15,
  className = "",
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Manual check: if element is already in viewport, show immediately
    const rect = el.getBoundingClientRect();
    if (
      rect.top < window.innerHeight &&
      rect.bottom > 0
    ) {
      setShow(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          obs.unobserve(el);
        }
      },
      { threshold, rootMargin: "50px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const style: CSSProperties = {
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: "opacity, transform",
    ...(show ? visible : hidden[animation]),
  };

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
