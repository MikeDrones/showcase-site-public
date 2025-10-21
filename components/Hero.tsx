'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-5 blur-3xl rounded-full" />
      </div>

      <motion.div
        className="mx-auto max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-block rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-white border border-white/20">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="block text-[color:var(--text)]">Building digital</span>
          <span className="block text-white">
            experiences
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-[color:var(--text-muted)] max-w-2xl mx-auto mb-10"
        >
          I'm a developer and designer passionate about creating beautiful, functional,
          and user-centered digital experiences.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/projects"
            className="group relative rounded-lg bg-white px-8 py-4 text-base font-semibold text-black shadow-glow-hover transition-all hover:bg-gray-200 min-w-[180px]"
          >
            View Projects
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            href="/contact"
            className="group relative rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all min-w-[180px]"
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Optional: Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-20"
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            <svg
              className="w-6 h-6 text-[color:var(--text-muted)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
