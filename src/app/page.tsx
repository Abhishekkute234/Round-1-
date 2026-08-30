"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { PageLoader } from "@/components/PageLoader";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Full-screen loader – plays first, then fades away */}
      <PageLoader duration={2800} onDone={() => setLoaded(true)} />

      {/* Main site – fades in after loader exits */}
      <AnimatePresence>
        {loaded && (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <DarkModeToggle />
            <HeroSection />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
