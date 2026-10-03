import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { HERO_CONTENT, HERO_HEADLINE, PROJECTS } from '../constants';
import { openCaseStudy } from '../lib/interactions';
import StatusBadge from './StatusBadge';

const SHIPPED_IDS = ['songa', 'corevoo', 'isafari'];

const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  // Soft glow that follows the pointer. rAF-throttled, writes CSS variables only.
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(pointer: coarse)').matches) return;
    let frame = 0;
    let x = 0;
    let y = 0;
    const apply = () => {
      frame = 0;
      el.style.setProperty('--hx', `${x}px`);
      el.style.setProperty('--hy', `${y}px`);
    };
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      x = e.clientX - r.left;
      y = e.clientY - r.top;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    el.addEventListener('pointermove', onMove);
    return () => {
      el.removeEventListener('pointermove', onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const shipped = SHIPPED_IDS.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean) as typeof PROJECTS;

  return (
    <section
      id="home"
      ref={ref}
      className="section-pad relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 md:pt-32"
    >
      {/* Cheap gradient backdrop: no blur filters, no animation */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            'radial-gradient(520px circle at var(--hx, 72%) var(--hy, 18%), color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%)',
            'radial-gradient(900px circle at 105% 0%, color-mix(in srgb, var(--coral) 14%, transparent), transparent 60%)',
            'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
          ].join(','),
          backgroundSize: 'auto, auto, 64px 64px, 64px 64px',
          maskImage: 'linear-gradient(to bottom, black 55%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent)',
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-1.5 text-sm font-medium text-muted">
            <span aria-hidden="true" className="pulse-dot h-2 w-2 rounded-full bg-ok" />
            Open to opportunities · Mombasa, Kenya
          </p>

          <h1 className="mt-7 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Anita Wambui Mwangi
            <span className="mt-3 block bg-gradient-to-r from-accent-ink via-accent-ink to-coral bg-clip-text text-[0.62em] font-bold leading-[1.1] text-transparent">
              {HERO_HEADLINE}
            </span>
          </h1>

          <p className="mt-7 max-w-[56ch] text-lg leading-relaxed text-muted sm:text-xl">{HERO_CONTENT}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-accent px-6 font-semibold text-on-accent transition hover:brightness-110 active:scale-[0.98]"
            >
              See my work
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a
              href="/Anita_Wambui_Mwangi_CV.pdf"
              download
              className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-line bg-surface/60 px-6 font-semibold transition hover:border-accent"
            >
              <Download size={18} aria-hidden="true" />
              Download résumé
            </a>
          </div>
        </div>

        {/* The memorable moment: what has actually shipped */}
        <aside aria-label="Recently shipped" className="lg:col-span-5">
          <div className="rounded-2xl border border-line bg-surface/80 p-5 shadow-2xl sm:p-6">
            <p className="font-display text-lg font-bold">Recently shipped</p>
            <p className="mt-1 text-sm text-muted">Select a project to read its case study.</p>
            <ul className="mt-5 space-y-3">
              {shipped.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => openCaseStudy(p.id)}
                    className="group flex w-full items-center justify-between gap-4 rounded-xl border border-line bg-bg/60 p-4 text-left transition hover:-translate-y-0.5 hover:border-accent/60"
                  >
                    <span>
                      <span className="block font-display text-xl font-bold">{p.title}</span>
                      <span className="mt-0.5 block text-sm text-muted">{p.kindLabel.split(' · ')[0]}</span>
                    </span>
                    <span className="flex shrink-0 flex-col items-end gap-2">
                      <StatusBadge status={p.status} />
                      <ArrowUpRight
                        size={18}
                        aria-hidden="true"
                        className="text-muted transition group-hover:rotate-12 group-hover:text-accent-ink"
                      />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
