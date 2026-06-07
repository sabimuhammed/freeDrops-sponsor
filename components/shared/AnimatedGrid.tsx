"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 14, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
};

export function AnimatedGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className={className}>
      {children}
    </motion.div>
  );
}

export function AnimatedCell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}

export function AnimatedRow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.tr
      variants={item}
      className={className}
    >
      {children}
    </motion.tr>
  );
}

export function AnimatedTbody({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.tbody variants={container} initial="hidden" animate="show" className={className}>
      {children}
    </motion.tbody>
  );
}
