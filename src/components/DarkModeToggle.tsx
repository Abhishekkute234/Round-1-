"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  // Always start in light mode — user can toggle manually
  useEffect(() => {
    setDark(false);
    document.documentElement.classList.remove("dark");
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        fixed top-5 right-5 z-50
        w-11 h-11 rounded-full flex items-center justify-center
        bg-[#dde0f0] dark:bg-[#252850]
        shadow-lg border border-white/60 dark:border-white/10
        text-[#4B5CE4] dark:text-[#9aa5f5]
        transition-colors duration-300
      "
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.25 }}
          className="flex"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
