'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import ThemeSelector from './ThemeSelector';
import ProfileDropdown from './ProfileDropdown';

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/product', label: 'Product' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md border-b z-50" style={{
      backgroundColor: `rgba(var(--background), 0.8)`,
      borderColor: `rgb(var(--border))`
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: `linear-gradient(to bottom right, rgb(var(--primary)), rgb(var(--secondary)))`
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-bold text-xl" style={{ color: `rgb(var(--primary-foreground))` }}>P</span>
            </motion.div>
            <span className="text-xl font-bold" style={{
              background: `linear-gradient(to right, rgb(var(--primary)), rgb(var(--secondary)))`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Presence
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <motion.div key={link.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative"
                    style={{
                      color: isActive ? `rgb(var(--primary-foreground))` : `rgb(var(--muted-foreground))`,
                      backgroundColor: isActive ? `rgb(var(--primary))` : 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = `rgba(var(--primary), 0.1)`;
                        e.currentTarget.style.color = `rgb(var(--primary))`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = `rgb(var(--muted-foreground))`;
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side: Theme Selector & Profile */}
          <div className="flex items-center space-x-3">
            <ThemeSelector />
            <div className="h-6 w-px" style={{ backgroundColor: `rgb(var(--border))` }} />
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
}
