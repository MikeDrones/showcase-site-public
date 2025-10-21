'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MobileMenu } from './MobileMenu';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[color:var(--text-muted)] hover:text-[color:var(--accent)] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black shadow-glow-hover hover:bg-gray-200 transition-all"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
      />
    </header>
  );
}
