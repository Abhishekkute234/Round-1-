"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface PageLoaderProps {
  /** How long (ms) to show the loader before fading out. Default 2800ms */
  duration?: number;
  onDone?: () => void;
}

export function PageLoader({ duration = 2800, onDone }: PageLoaderProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onDone?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="
            fixed inset-0 z-[9999]
            flex flex-col items-center justify-center
            bg-[#eef0f8] dark:bg-[#0f1020]
          "
        >
          {/* Lottie animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-52 h-52 sm:w-64 sm:h-64"
          >
            <DotLottieReact
              src="https://lottie.host/cce64044-a09b-4a0e-9be5-92faabd2602f/aN2UwsZJly.lottie"
              loop
              autoplay
            />
          </motion.div>

          {/* Subtle brand label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-[45px] font-semibold tracking-widest uppercase text-[#4B5CE4] dark:text-[#7a85f0] select-none"
          >
            ROUND 1
          </motion.p>

          {/* Progress bar */}
          <div className="mt-6 w-40 h-[3px] rounded-full bg-[#cdd2ea] dark:bg-[#1e2240] overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: duration / 1000 - 0.3, ease: "easeInOut" }}
              className="h-full rounded-full bg-[#4B5CE4]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
