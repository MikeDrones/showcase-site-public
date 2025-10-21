'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'personal' | 'business' | 'open-source';
  tags: string[];
  featured?: boolean;
  image?: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      <Link
        href={project.link || `/projects/${project.id}`}
        className="block glass glass-hover rounded-2xl overflow-hidden hover-scale-sm"
      >
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden bg-[color:var(--surface-2)]">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            // Placeholder gradient
            <div className="w-full h-full bg-gradient-to-br from-[color:var(--accent)]/20 via-transparent to-[color:var(--accent-alt)]/20" />
          )}

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4">
              <span className="badge-gradient rounded-full text-xs font-bold uppercase tracking-wider">
                Featured
              </span>
            </div>
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--surface)] via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Project Info */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl font-semibold text-[color:var(--text)] group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <svg
              className="w-5 h-5 text-[color:var(--text-muted)] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>

          <p className="text-[color:var(--text-muted)] leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium text-[color:var(--text-muted)] bg-[color:var(--surface-2)] rounded-full border border-[color:var(--border)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
