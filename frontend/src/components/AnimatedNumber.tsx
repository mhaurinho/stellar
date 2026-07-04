import { useEffect } from "react";
import { animate, useMotionValue, useTransform, motion } from "motion/react";

export function AnimatedNumber({ value }: { value: bigint | null }) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());

  useEffect(() => {
    if (value === null) return;
    const controls = animate(mv, Number(value), {
      duration: 0.9,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [value, mv]);

  if (value === null) return <span className="stat-value">…</span>;
  return <motion.span className="stat-value">{rounded}</motion.span>;
}
