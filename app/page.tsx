"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Moon, Sun, Mail } from "lucide-react";
import { Icons } from "@/components/icons";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setIsTransitioning(true);
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setTimeout(() => setIsTransitioning(false), 100);
  };

  return (
    <>
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 z-50 pointer-events-none"
            style={{
              backgroundColor:
                resolvedTheme === "dark"
                  ? "var(--background-dark)"
                  : "var(--background-light)",
            }}
          />
        )}
      </AnimatePresence>
      <main className="flex min-h-screen flex-col items-center justify-center px-4 py-6">
        <div className="w-full max-w-md mx-auto space-y-3">
          {/* Header Card */}
          <div className="card">
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <div className="icon-container overflow-hidden">
                  <Image
                    src="/avatar.png"
                    alt="Jordan Liu"
                    className="w-full h-full object-cover"
                    width={44}
                    height={44}
                  />
                </div>
                <div>
                  <h1 className="text-[15px] font-medium leading-snug">
                    Jordan Liu
                  </h1>
                  <p className="text-[13px] text-[var(--text-secondary)] leading-snug">
                    just building stuff
                  </p>
                </div>
              </div>
              <div className="ml-auto">
                {mounted && (
                  <motion.button
                    onClick={toggleTheme}
                    className="p-2 cursor-pointer rounded-full icon-container hover:bg-[var(--icon-bg-hover)] transition-colors"
                    aria-label="Toggle theme"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AnimatePresence mode="wait">
                      {resolvedTheme === "dark" ? (
                        <motion.div
                          key="sun"
                          initial={{ rotate: -180, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 180, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Sun size={16} className="icon" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="moon"
                          initial={{ rotate: 180, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -180, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Moon size={16} className="icon" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                )}
              </div>
            </div>
          </div>

          {/* X.com Card */}
          <Link
            href="https://x.com/jordanxliu"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <div className="flex items-center gap-4">
              <div className="icon-container">
                <Icons.twitter className="icon" />
              </div>
              <div>
                <h2 className="text-[15px] font-medium leading-snug">X</h2>
                <p className="text-[13px] text-[var(--text-secondary)] leading-snug">
                  @jordanxliu
                </p>
              </div>
            </div>
          </Link>

          {/* GitHub Card */}
          <Link
            href="https://github.com/jordanliu"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <div className="flex items-center gap-4">
              <div className="icon-container">
                <Icons.gitHub className="icon" />
              </div>
              <div>
                <h2 className="text-[15px] font-medium leading-snug">GitHub</h2>
                <p className="text-[13px] text-[var(--text-secondary)] leading-snug">
                  github.com/jordanliu
                </p>
              </div>
            </div>
          </Link>

          {/* Email Card */}
          <Link href="mailto:jordan@liu.com.jm" className="card">
            <div className="flex items-center gap-4">
              <div className="icon-container">
                <Mail className="icon" />
              </div>
              <div>
                <h2 className="text-[15px] font-medium leading-snug">Email</h2>
                <p className="text-[13px] text-[var(--text-secondary)] leading-snug">
                  jordan@liu.com.jm
                </p>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
