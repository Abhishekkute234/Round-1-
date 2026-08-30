"use client";

import { motion, type Transition } from "framer-motion";
import {
  Receipt,
  Home,
  ListChecks,
  FileText,
} from "lucide-react";
import { FloatingCard, PortalCard } from "@/components/FloatingCard";

// ─────────────────────────────────────────
//  Background blobs (rounded rectangles)
// ─────────────────────────────────────────

interface BlobProps {
  className: string;
  delay?: number;
}

function Blob({ className, delay = 0 }: BlobProps) {
  const t: Transition = { duration: 1.2, delay, ease: "easeOut" };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={t}
      className={`absolute rounded-[40px] bg-[#cdd2ea] dark:bg-[#1e2240] ${className}`}
    />
  );
}

// ─────────────────────────────────────────
//  Helper: entrance transition factory
// ─────────────────────────────────────────

function fadeUp(delay: number): Transition {
  return { duration: 0.7, delay, ease: "easeOut" };
}

// ─────────────────────────────────────────
//  HeroSection
// ─────────────────────────────────────────

export function HeroSection() {
  return (
    <section
      className="
        relative min-h-screen w-full overflow-hidden
        bg-[#eef0f8] dark:bg-[#0f1020]
        transition-colors duration-300
        flex items-center justify-center
      "
      aria-label="Hero section"
    >
      {/* ── Grid line background ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(75,92,228,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(75,92,228,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Background blob shapes ── */}
      {/* Left side blobs */}
      <Blob className="w-[130px] h-[52px] top-[18%] left-[0%] -translate-x-1/2 rotate-[-8deg] opacity-90" delay={0.1} />
      <Blob className="w-[180px] h-[56px] top-[42%] left-[-2%] -translate-x-1/4 rotate-[4deg] opacity-80" delay={0.2} />
      <Blob className="w-[120px] h-[44px] top-[65%] left-[1%] rotate-[-5deg] opacity-70" delay={0.3} />

      {/* Right side blobs */}
      <Blob className="w-[200px] h-[58px] top-[8%] right-[2%] rotate-[6deg] opacity-80" delay={0.15} />
      <Blob className="w-[160px] h-[52px] top-[28%] right-[-1%] rotate-[-4deg] opacity-75" delay={0.25} />
      <Blob className="w-[220px] h-[60px] top-[55%] right-[3%] rotate-[8deg] opacity-70" delay={0.35} />
      <Blob className="w-[150px] h-[48px] bottom-[12%] right-[5%] rotate-[-6deg] opacity-65" delay={0.4} />

      {/* Center / scattered blobs */}
      <Blob className="w-[140px] h-[50px] bottom-[18%] left-[15%] rotate-[3deg] opacity-60" delay={0.2} />

      {/* ── Main content container ── */}
      <div
        className="
          relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16
          flex flex-col lg:flex-row items-center
          gap-12 lg:gap-0
          py-16 lg:py-0
        "
      >
        {/* ────────────────────────
            LEFT – Text content
        ──────────────────────── */}
        <div className="flex-1 max-w-[540px] lg:max-w-[48%] flex flex-col gap-6">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={fadeUp(0.1)}
            className="
              text-[3.2rem] sm:text-[4rem] lg:text-[4.8rem]
              leading-[1.12] tracking-[-0.03em]
              text-[#5a5e7e] dark:text-[#9a9dc8]
              font-bold
            "
          >
            A single platform to{" "}
            <strong className="text-[#2a2d4a] dark:text-[#e8eaf8] font-extrabold">
              manage
            </strong>{" "}
            every part of your{" "}
            <strong className="text-[#2a2d4a] dark:text-[#e8eaf8] font-extrabold">
              legal work
            </strong>
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={fadeUp(0.3)}
            className="
              text-[18px] sm:text-[19px]
              leading-relaxed
              text-[#4B5CE4] dark:text-[#7a85f0]
              max-w-[420px]
              font-semibold
            "
          >
            Track matters, coordinate schedules, manage clients, centralize
            documents, and handle communication – all in one system.
          </motion.p>
        </div>

        {/* ────────────────────────
            RIGHT – Floating cards
        ──────────────────────── */}
        <div
          className="
            relative flex-1 w-full
            hidden sm:block
            h-[480px] lg:h-[520px]
            lg:min-w-[52%]
          "
          aria-hidden="true"
        >
          {/* ── Billing – blue, top-right ── */}
          <FloatingCard
            color="blue"
            rotation={-8}
            icon={<Receipt size={20} strokeWidth={2} />}
            label="Billing"
            delay={0.5}
            floatDuration={4.2}
            floatY={15}
            floatX={6}
            className="top-[15%] right-[4%] w-[224px]"
          />

          {/* ── Matters – orange, mid-left ── */}
          <FloatingCard
            color="orange"
            rotation={8}
            icon={<Home size={20} strokeWidth={2} />}
            label="Matters"
            delay={0.65}
            floatDuration={4.8}
            floatY={16}
            floatX={7}
            className="top-[43%] left-[0%] w-[214px]"
          />

          {/* ── John Doe Portal card – centre, overlapping Matters ── */}
          <PortalCard
            rotation={-3}
            delay={0.8}
            floatDuration={4.5}
            floatY={14}
            floatX={5}
            className="top-[42%] left-[37%]"
          />

          {/* ── Tasks – dark navy, lower-left ── */}
          <FloatingCard
            color="dark"
            rotation={-8}
            icon={<ListChecks size={20} strokeWidth={2} />}
            label="Tasks"
            delay={0.95}
            floatDuration={5.0}
            floatY={15}
            floatX={6}
            className="bottom-[16%] left-[12%] w-[196px]"
          />

          {/* ── Documents – dark navy + orange icon, lower-right ── */}
          <FloatingCard
            color="darkOrange"
            rotation={13}
            icon={<FileText size={20} strokeWidth={2} />}
            label="Documents"
            delay={1.1}
            floatDuration={4.6}
            floatY={18}
            floatX={8}
            className="bottom-[10%] right-[1%] w-[230px]"
          />
        </div>

        {/* Mobile fallback: simple icon grid */}
        <div className="flex sm:hidden flex-wrap justify-center gap-3 w-full mt-4">
          {[
            { label: "Billing", icon: <Receipt size={16} />, bg: "bg-[#4B5CE4] text-white" },
            { label: "Matters", icon: <Home size={16} />, bg: "bg-[#E07A20] text-white" },
            { label: "Tasks", icon: <ListChecks size={16} />, bg: "bg-[#1e2035] text-white" },
            { label: "Documents", icon: <FileText size={16} />, bg: "bg-[#1e2035] text-white" },
          ].map((item, i) => (
            <motion.span
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-md ${item.bg}`}
            >
              {item.icon}
              {item.label}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
