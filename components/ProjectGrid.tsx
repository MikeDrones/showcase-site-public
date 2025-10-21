'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard, type Project } from './ProjectCard';

// Real projects data
const sampleProjects: Project[] = [
  {
    id: 'N8N',
    title: 'N8N Personal Site',
    description: 'Personal automation and workflow site built with N8N, featuring custom integrations, automated processes, and workflow management.',
    category: 'personal',
    tags: ['N8N', 'Automation', 'Workflows', 'Integration'],
    featured: true,
    image: '/n8n-site.jpg',
    link: 'https://n8n.mkennedy.ca/',
  },
  {
    id: 'snow-removal-quote-tool',
    title: 'Snow Removal & Landscaping Site',
    description: 'Professional landscaping and snow removal business site with integrated quote tool, service area mapping, and customer management.',
    category: 'business',
    tags: ['Next.js', 'Quote Tool', 'Business', 'Maps API'],
    featured: true,
    image: '/snow-removal-site.jpg',
  },
  {
    id: 'portfolio-showcase',
    title: 'Portfolio Showcase',
    description: 'Modern portfolio website with dark theme, glass morphism effects, and interactive components built with Next.js and Framer Motion.',
    category: 'personal',
    tags: ['Next.js', 'Tailwind', 'Framer Motion', 'TypeScript'],
    featured: true,
  },
  {
    id: 'automation-workflows',
    title: 'Automation Workflows',
    description: 'Collection of custom automation workflows for business processes, data synchronization, and task management.',
    category: 'personal',
    tags: ['N8N', 'Automation', 'APIs', 'Integration'],
  },
];

type FilterCategory = 'all' | 'personal' | 'business' | 'open-source';

const filterOptions: Array<{ label: string; value: FilterCategory }> = [
  { label: 'All Projects', value: 'all' },
  { label: 'Personal', value: 'personal' },
  { label: 'Business', value: 'business' },
  { label: 'Open Source', value: 'open-source' },
];

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? sampleProjects
      : sampleProjects.filter((project) => project.category === activeFilter);

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[color:var(--text)] mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-[color:var(--text-muted)] max-w-2xl mx-auto">
            A selection of my recent work across various domains and technologies
          </p>
        </motion.div>

        {/* Pills Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="tablist"
          aria-label="Project filter"
        >
          {filterOptions.map((option) => {
            const isActive = activeFilter === option.value;
            return (
              <button
                key={option.value}
                role="tab"
                aria-selected={isActive}
                aria-controls="projects-grid"
                onClick={() => setActiveFilter(option.value)}
                className={`
                  px-6 py-2.5 rounded-full text-sm font-semibold transition-all
                  ${isActive
                    ? 'bg-white text-black shadow-glow'
                    : 'glass glass-hover text-[color:var(--text-muted)] hover:text-[color:var(--text)]'
                  }
                `}
              >
                {option.label}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          id="projects-grid"
          role="tabpanel"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-[color:var(--text-muted)]">
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 font-semibold transition-colors group"
          >
            View all projects
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
