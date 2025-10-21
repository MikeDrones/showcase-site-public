'use client';

import { motion } from 'framer-motion';

export function StackingFeature() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Terminal/Code Mockup - Left */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative glass edge-light rounded-2xl p-1 shadow-glow-hover overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="bg-[color:var(--surface-2)] rounded-t-xl px-4 py-3 flex items-center gap-2 border-b border-[color:var(--border)]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-[color:var(--text-muted)] ml-2 font-mono">
                ~/portfolio
              </span>
            </div>

            {/* Terminal Content */}
            <div className="bg-[color:var(--surface)] rounded-b-xl p-6 font-mono text-sm">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <span className="text-white select-none">$</span>
                  <div className="flex-1">
                    <div className="text-[color:var(--text)]">
                      npm run build
                    </div>
                  </div>
                </div>

                <div className="text-[color:var(--text-muted)] pl-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Compiled successfully</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Optimized bundle size: 247 KB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Performance score: 98/100</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2">
                  <span className="text-white select-none">$</span>
                  <div className="flex-1">
                    <div className="text-[color:var(--text)]">
                      git commit -m &quot;Ship it&quot;
                    </div>
                  </div>
                </div>

                <div className="text-[color:var(--text-muted)] pl-4">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    <span>3 files changed, 247 insertions(+)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-white animate-pulse select-none">$</span>
                  <div className="flex-1">
                    <div className="text-[color:var(--text)]">
                      <span className="inline-block w-2 h-4 bg-white animate-pulse ml-1"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none rounded-2xl" />
          </motion.div>

          {/* Text Content - Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="text-sm font-semibold text-white px-3 py-1 rounded-full bg-white/5 border border-white/20">
                Modern Workflow
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[color:var(--text)]">
              Built with modern tools and best practices
            </h2>

            <p className="text-lg text-[color:var(--text-muted)] leading-relaxed">
              I leverage cutting-edge technologies and development workflows to deliver
              high-quality, performant applications. From TypeScript and React to modern
              build tools and CI/CD pipelines, every project is built to last.
            </p>

            <ul className="space-y-4">
              {[
                { label: 'Type-Safe Development', desc: 'TypeScript for robust, error-free code' },
                { label: 'Modern Frameworks', desc: 'React, Next.js, and latest web technologies' },
                { label: 'Automated Testing', desc: 'Comprehensive test coverage for reliability' },
                { label: 'CI/CD Pipeline', desc: 'Automated deployments and quality checks' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-white shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-[color:var(--text)]">{item.label}</p>
                    <p className="text-sm text-[color:var(--text-muted)]">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
