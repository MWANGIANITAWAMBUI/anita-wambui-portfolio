import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-8 md:py-12 xl:px-24 pointer-events-none overflow-hidden"
    >
      <div className="flex justify-between items-baseline max-w-[1920px] mx-auto">
        {/* Logo */}
        <div className="pointer-events-auto">
          <a
            href="#home"
            onClick={(e) => handleScroll(e, '#home')}
            className="text-3xl font-black uppercase tracking-tighter text-[#ff4d00] hover:scale-110 transition-transform duration-500 inline-block"
          >
            AW.
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-16 pointer-events-auto">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-900 hover:text-[#ff4d00] transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#ff4d00] transition-all duration-700 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden pointer-events-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col items-center justify-center w-12 h-12 -mr-2 rounded-lg hover:bg-zinc-100/50 transition-colors duration-300"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span
                className={`block w-full h-0.5 bg-zinc-900 transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`}
              />
              <span
                className={`block w-full h-0.5 bg-zinc-900 transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`}
              />
              <span
                className={`block w-full h-0.5 bg-zinc-900 transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 top-[80px] bg-[#fcfaf7]/98 backdrop-blur-lg md:hidden pointer-events-auto z-40 overflow-y-auto"
        >
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] py-12 space-y-8 px-8">
            {links.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-4xl font-black uppercase tracking-tighter text-zinc-900 hover:text-[#ff4d00] transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;