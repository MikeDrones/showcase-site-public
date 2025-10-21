'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navigation: Array<{ name: string; href: string }>;
}

export function MobileMenu({ open, onClose, navigation }: MobileMenuProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <motion.div
            id="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[color:var(--surface)] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[color:var(--border)] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center" onClick={onClose}>
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors"
                onClick={onClose}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-[color:var(--border)]">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[color:var(--text)] hover:bg-[color:var(--surface-2)] transition-colors"
                      onClick={onClose}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[color:var(--accent)] hover:bg-[color:var(--surface-2)] transition-colors"
                    onClick={onClose}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
