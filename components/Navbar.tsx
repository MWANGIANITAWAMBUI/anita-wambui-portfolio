import React, { useEffect, useRef, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useActiveSection } from '../lib/interactions';

const LINKS = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Work', id: 'work' },
  { name: 'Case studies', id: 'case-studies' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
  );
  const progressRef = useRef<HTMLDivElement>(null);
  const active = useActiveSection(['home', ...LINKS.map((l) => l.id)]);

  // Scroll progress bar: one rAF-throttled write to a transform, no state.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage can be blocked; the toggle still works for this visit */
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#061a21' : '#f1f7f7');
  };

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className="section-pad fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        <a
          href="#home"
          onClick={(e) => go(e, 'home')}
          className="font-display text-2xl font-extrabold tracking-tight"
          aria-label="Anita Wambui Mwangi, back to top"
        >
          AW<span className="text-accent-ink">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => go(e, l.id)}
              aria-current={active === l.id ? 'true' : undefined}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                active === l.id ? 'bg-surface-2 text-fg' : 'text-muted hover:text-fg'
              }`}
            >
              {l.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="flex h-11 w-11 items-center justify-center rounded-full text-muted transition hover:bg-surface-2 hover:text-fg"
          >
            {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-full text-muted transition hover:bg-surface-2 hover:text-fg md:hidden"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div ref={progressRef} aria-hidden="true" className="absolute bottom-[-1px] left-0 h-[2px] w-full origin-left scale-x-0 bg-accent" />

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-bg md:hidden">
          <ul className="flex flex-col px-5 py-4">
            {[{ name: 'Home', id: 'home' }, ...LINKS].map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => go(e, l.id)}
                  className="flex min-h-12 items-center border-b border-line/60 font-display text-xl font-semibold"
                >
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
