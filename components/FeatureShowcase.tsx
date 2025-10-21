'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ShowcaseFeature {
  id: string;
  title: string;
  description: string;
  media: {
    type: 'gradient' | 'code';
    content: string | React.ReactNode;
  };
}

const showcaseFeatures: ShowcaseFeature[] = [
  {
    id: 'design',
    title: 'Design Systems',
    description: 'Creating comprehensive design systems that ensure consistency across all touchpoints and enable teams to build faster.',
    media: {
      type: 'gradient',
      content: 'from-purple-500 to-pink-500',
    },
  },
  {
    id: 'performance',
    title: 'Performance Optimization',
    description: 'Implementing best practices for lightning-fast load times, optimal rendering, and seamless user interactions.',
    media: {
      type: 'gradient',
      content: 'from-blue-500 to-cyan-500',
    },
  },
  {
    id: 'architecture',
    title: 'Scalable Architecture',
    description: 'Building robust, maintainable architectures that grow with your business and handle increasing complexity with ease.',
    media: {
      type: 'gradient',
      content: 'from-green-500 to-emerald-500',
    },
  },
  {
    id: 'testing',
    title: 'Quality Assurance',
    description: 'Comprehensive testing strategies including unit, integration, and e2e tests to ensure reliability and prevent regressions.',
    media: {
      type: 'gradient',
      content: 'from-orange-500 to-red-500',
    },
  },
];

export function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!railRef.current?.contains(document.activeElement)) return;

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : showcaseFeatures.length - 1));
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev < showcaseFeatures.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        // Already active, so no action needed
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="py-24 px-6 lg:px-8 bg-[color:var(--surface)]">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[color:var(--text)] mb-4">
            Full-Stack Expertise
          </h2>
          <p className="text-lg text-[color:var(--text-muted)] max-w-2xl mx-auto">
            From design to deployment, I cover every aspect of modern web development
          </p>
        </motion.div>

        {/* Two-column layout: Media Panel + Selector Rail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Media Panel - Left (8 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative glass edge-light rounded-2xl overflow-hidden aspect-video shadow-glow">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {showcaseFeatures[activeIndex].media.type === 'gradient' ? (
                    <div className={`w-full h-full bg-gradient-to-br ${showcaseFeatures[activeIndex].media.content} opacity-20`} />
                  ) : (
                    showcaseFeatures[activeIndex].media.content
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-8">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-white"
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
                      </div>
                      <h3 className="text-2xl font-bold text-[color:var(--text)] mb-2">
                        {showcaseFeatures[activeIndex].title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Selector Rail - Right (4 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div
              ref={railRef}
              role="tablist"
              aria-label="Feature showcase"
              className="space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[color:var(--border)] scrollbar-track-transparent"
            >
              {showcaseFeatures.map((feature, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={feature.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${feature.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveIndex(index)}
                    className={`
                      w-full text-left rounded-xl p-6 transition-all
                      ${isActive
                        ? 'glass-hover border-white shadow-glow bg-white/5'
                        : 'glass glass-hover border-transparent hover:border-[color:var(--border-hover)]'
                      }
                    `}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`
                        shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all
                        ${isActive
                          ? 'bg-white text-black'
                          : 'bg-[color:var(--surface-2)] text-[color:var(--text-muted)]'
                        }
                      `}>
                        <span className="font-mono font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`
                          text-lg font-semibold mb-2 transition-colors
                          ${isActive ? 'text-[color:var(--text)]' : 'text-[color:var(--text-muted)]'}
                        `}>
                          {feature.title}
                        </h3>
                        <p className="text-sm text-[color:var(--text-muted)] leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation hint */}
            <div className="mt-4 flex items-center gap-2 text-xs text-[color:var(--text-dim)]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
              <span>Use arrow keys to navigate</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
