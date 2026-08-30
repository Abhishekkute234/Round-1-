"use client";

import { motion, type Transition } from "framer-motion";
import { ReactNode } from "react";

// ─────────────────────────────────────────
//  Types
// ─────────────────────────────────────────

export type CardColor = "blue" | "orange" | "dark" | "darkOrange" | "lavender";

interface FloatingCardProps {
  /** Background colour variant */
  color: CardColor;
  /** Rotation in degrees (positive = clockwise) */
  rotation: number;
  /** Icon element rendered inside the pill */
  icon: ReactNode;
  /** Text label shown beside the icon */
  label: string;
  /** Extra Tailwind classes for absolute positioning */
  className?: string;
  /** Framer Motion entrance delay in seconds */
  delay?: number;
  /** Floating animation duration in seconds */
  floatDuration?: number;
  /** Vertical float amplitude in pixels */
  floatY?: number;
  /** Horizontal float amplitude in pixels */
  floatX?: number;
}

// ─────────────────────────────────────────
//  Colour map
// ─────────────────────────────────────────

const colorMap: Record<
  CardColor,
  { pill: string; iconWrap: string; text: string }
> = {
  blue: {
    pill: "bg-[#4B5CE4]",
    iconWrap: "bg-white/20",
    text: "text-white",
  },
  orange: {
    pill: "bg-[#E07A20]",
    iconWrap: "bg-white/20",
    text: "text-white",
  },
  dark: {
    pill: "bg-[#1e2035]",
    iconWrap: "bg-white/10",
    text: "text-white",
  },
  darkOrange: {
    pill: "bg-[#1e2035]",
    iconWrap: "bg-[#E07A20]/90",
    text: "text-white",
  },
  lavender: {
    pill: "bg-[#dde0f0] dark:bg-[#252850]",
    iconWrap: "bg-white/50 dark:bg-white/10",
    text: "text-[#2a2d4a] dark:text-[#e8eaf8]",
  },
};

// ─────────────────────────────────────────
//  FloatingCard – standard pill with enhanced floating animation
// ─────────────────────────────────────────

export function FloatingCard({
  color,
  rotation,
  icon,
  label,
  className = "",
  delay = 0,
  floatDuration = 4.5,
  floatY = 14,
  floatX = 5,
}: FloatingCardProps) {
  const c = colorMap[color];

  const entranceTransition: Transition = {
    duration: 0.65,
    delay,
    ease: "easeOut",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.75 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={entranceTransition}
      style={{ rotate: `${rotation}deg` }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{
          y: [-floatY, floatY, -floatY],
          x: [-floatX, floatX, -floatX],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 0.4,
        }}
        whileHover={{
          scale: 1.08,
          transition: { duration: 0.2 },
        }}
        className={`flex items-center gap-3 px-5 py-3.5 rounded-full
          shadow-[0_20px_60px_rgba(30,32,53,0.18),0_8px_24px_rgba(30,32,53,0.12)]
          dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
          cursor-pointer select-none backdrop-blur-sm
          ${c.pill} ${c.text}`}
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{
            duration: floatDuration * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`flex items-center justify-center w-9 h-9 rounded-full shrink-0 ${c.iconWrap}`}
        >
          {icon}
        </motion.div>
        <span className="text-[17px] font-semibold whitespace-nowrap leading-none">
          {label}
        </span>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────
//  PortalCard – the "John Doe" variant with rich floating animation
// ─────────────────────────────────────────

interface PortalCardProps {
  rotation: number;
  delay?: number;
  className?: string;
  floatDuration?: number;
  floatY?: number;
  floatX?: number;
}

export function PortalCard({
  rotation,
  delay = 0,
  className = "",
  floatDuration = 4.8,
  floatY = 12,
  floatX = 4,
}: PortalCardProps) {
  const entranceTransition: Transition = {
    duration: 0.65,
    delay,
    ease: "easeOut",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.75 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={entranceTransition}
      style={{ rotate: `${rotation}deg` }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{
          y: [floatY, -floatY, floatY],
          x: [floatX, -floatX, floatX],
          rotate: [1.8, -1.8, 1.8],
        }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 0.3,
        }}
        whileHover={{
          scale: 1.06,
          transition: { duration: 0.2 },
        }}
        className="flex items-center gap-3 pr-5 pl-3 py-3 rounded-full
          bg-[#dde0f0] dark:bg-[#252850]
          shadow-[0_20px_60px_rgba(30,32,53,0.18),0_8px_24px_rgba(30,32,53,0.12)]
          dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
          cursor-pointer select-none"
      >
        {/* Orange accent stripe */}
        <div className="w-1 h-11 rounded-full bg-[#E07A20] shrink-0" />

        {/* Avatar */}
        <div className="w-11 h-11 rounded-full overflow-hidden shrink-0">
          <svg viewBox="0 0 44 44" className="w-11 h-11" aria-hidden="true">
            <rect width="44" height="44" fill="#c49a6c" rx="22" />
            {/* Hair */}
            <ellipse cx="22" cy="12" rx="13" ry="9" fill="#2d1f14" />
            {/* Neck */}
            <rect x="17" y="30" width="10" height="8" fill="#d4956a" />
            {/* Shoulders */}
            <ellipse cx="22" cy="44" rx="16" ry="10" fill="#1e2035" />
            {/* Face */}
            <ellipse cx="22" cy="24" rx="10" ry="11" fill="#d4956a" />
            {/* Eyes */}
            <ellipse cx="18" cy="22" rx="1.5" ry="2" fill="#1a1a2e" />
            <ellipse cx="26" cy="22" rx="1.5" ry="2" fill="#1a1a2e" />
            {/* Smile */}
            <path
              d="M17.5 27.5 Q22 31 26.5 27.5"
              stroke="#a05030"
              strokeWidth="1.4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Text block */}
        <div className="flex flex-col min-w-0">
          <span className="text-[13px] font-bold text-[#2a2d4a] dark:text-[#e8eaf8] leading-tight">
            John Doe – Portal
          </span>
          <span className="text-[11px] text-[#5a5e7e] dark:text-[#9a9dc8] leading-snug mt-[3px] max-w-[148px]">
            Hey! Could you please review a document for me?
          </span>
          <span className="text-[10px] text-[#9a9dc8] dark:text-[#6a6d9a] mt-1 font-medium">
            MAT-2233 · 2 m ago
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
