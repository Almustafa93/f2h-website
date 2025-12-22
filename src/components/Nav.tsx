"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'References', href: '/references' },
    { name: 'Contact', href: '/contact' },
  ];


  const isActive = (href: string) => pathname === href;

  const isHomePage = pathname === '/';

  // Adaptive coloring based on scroll and page
  const isLightPage = pathname !== '/'; // Inner pages are white-themed now

  const getNavbarStyles = () => {
    if (isLightPage) {
      // On light pages, use purple background with white text
      return {
        bg: isScrolled ? 'bg-brand-purple shadow-lg' : 'bg-brand-purple/95 backdrop-blur-md',
        text: 'text-white',
        logo: 'text-white',
        logoImage: '/logo-white.png',
        divider: 'bg-white/20',
        button: 'bg-brand-red text-white',
        mobileMenu: 'bg-brand-purple text-white',
        mobileToggle: 'bg-white/10 border-white/20'
      };
    } else {
      // On home page (purple hero), use white background with purple text as requested
      return {
        bg: isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white',
        text: 'text-brand-purple',
        logo: 'text-brand-purple',
        logoImage: '/logo.png',
        divider: 'bg-brand-purple/20',
        button: 'bg-brand-red text-white',
        mobileMenu: 'bg-white text-brand-purple',
        mobileToggle: 'bg-brand-purple/5 border-brand-purple/10'
      };
    }
  };

  const styles = getNavbarStyles();

  const navbarBg = styles.bg;
  const textColor = styles.text;
  const logoSecondaryColor = styles.logo;
  const dividerColor = styles.divider;
  const buttonClass = styles.button;


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 py-3 ${navbarBg}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src={styles.logoImage}
              alt="F2H Logo"
              className="h-16 w-auto object-contain"
            />
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                href={item.href}
                className={`text-[15px] font-black transition-all hover:text-brand-red uppercase tracking-widest ${isActive(item.href)
                  ? 'text-brand-red'
                  : textColor
                  }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-2xl font-black text-sm transition-all shadow-xl ${buttonClass}`}
            >
              GET IN TOUCH
            </motion.button>
          </Link>
        </div>

        <button
          className={`md:hidden p-2 rounded-xl border ${styles.mobileToggle} ${textColor}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden shadow-2xl border-t ${styles.mobileMenu.split(' ')[0]}`}
          >
            <div className={`p-6 flex flex-col gap-4 ${styles.mobileMenu}`}>
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-bold ${isActive(item.href) ? 'text-brand-red' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
