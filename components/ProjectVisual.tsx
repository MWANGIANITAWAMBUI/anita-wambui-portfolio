import React from 'react';
import { VisualKind } from '../types';

/**
 * Lightweight CSS "screens" used when a project has no screenshot.
 * They avoid heavy stock photos and never show private data.
 */
const Bar: React.FC<{ w: string; tone?: string }> = ({ w, tone = 'bg-fg/15' }) => (
  <div className={`h-2 rounded-full ${tone}`} style={{ width: w }} />
);

const Phone = () => (
  <div className="relative h-[84%] aspect-[9/18] rounded-[1.7rem] border-[3px] border-fg/25 bg-bg/80 p-2.5 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1.5">
    <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-fg/20" />
    <div className="relative h-[46%] overflow-hidden rounded-xl bg-accent/20">
      <svg viewBox="0 0 100 60" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
        <path d="M8 48 C 28 10, 46 58, 70 28 S 92 14, 94 12" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 5" />
        <circle cx="8" cy="48" r="4" fill="var(--accent)" />
        <circle cx="94" cy="12" r="4" fill="var(--coral)" />
      </svg>
    </div>
    <div className="mt-3 space-y-2">
      <Bar w="80%" />
      <Bar w="55%" />
    </div>
    <div className="mt-3 h-6 rounded-lg bg-accent" />
  </div>
);

const Browser = () => (
  <div className="mt-9 h-[70%] w-[78%] overflow-hidden rounded-lg border border-line bg-bg/80 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1.5">
    <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
      <span className="h-2 w-2 rounded-full bg-coral/80" />
      <span className="h-2 w-2 rounded-full bg-sun/80" />
      <span className="h-2 w-2 rounded-full bg-ok/80" />
      <div className="ml-3 h-2 w-1/3 rounded-full bg-fg/10" />
    </div>
    <div className="space-y-3 p-4">
      <Bar w="55%" tone="bg-fg/30" />
      <Bar w="80%" />
      <Bar w="40%" />
      <div className="grid grid-cols-3 gap-2 pt-1">
        <div className="h-12 rounded-md bg-accent/25" />
        <div className="h-12 rounded-md bg-coral/25" />
        <div className="h-12 rounded-md bg-sun/25" />
      </div>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="mt-9 h-[70%] w-[78%] rounded-lg border border-line bg-bg/80 p-4 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1.5">
    <div className="mb-4 flex gap-2">
      <div className="h-8 flex-1 rounded-md bg-accent/25" />
      <div className="h-8 flex-1 rounded-md bg-fg/10" />
      <div className="h-8 flex-1 rounded-md bg-fg/10" />
    </div>
    <div className="flex h-[55%] items-end gap-2">
      {[40, 65, 50, 85, 60, 95, 72].map((h, i) => (
        <div key={i} className="flex-1 rounded-t bg-accent/70" style={{ height: `${h}%`, opacity: 0.45 + i * 0.08 }} />
      ))}
    </div>
  </div>
);

const Game = () => (
  <div className="mt-8 grid grid-cols-4 gap-2 transition-transform duration-500 group-hover:-translate-y-1.5">
    {Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        className={`h-11 w-11 rounded-xl shadow-lg sm:h-12 sm:w-12 ${
          [0, 5, 10].includes(i) ? 'bg-accent' : [3, 6, 9].includes(i) ? 'bg-coral' : [1, 8].includes(i) ? 'bg-sun' : 'bg-fg/10'
        }`}
      />
    ))}
  </div>
);

const Platform = () => (
  <div className="mt-9 h-[70%] w-[78%] rounded-lg border border-line bg-bg/80 p-4 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1.5">
    <div className="space-y-3">
      {[70, 90, 55, 80].map((w, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className={`h-5 w-5 rounded-md ${i === 0 ? 'bg-accent' : 'bg-fg/15'}`} />
          <Bar w={`${w}%`} tone={i === 0 ? 'bg-fg/30' : 'bg-fg/12'} />
        </div>
      ))}
    </div>
    <div className="mt-5 flex gap-2">
      <span className="rounded-full bg-sun/30 px-3 py-1 text-[10px] font-semibold text-fg/70">XP</span>
      <span className="rounded-full bg-accent/30 px-3 py-1 text-[10px] font-semibold text-fg/70">Badge</span>
    </div>
  </div>
);

const MAP: Record<VisualKind, React.FC> = { phone: Phone, browser: Browser, dashboard: Dashboard, game: Game, platform: Platform };

const ProjectVisual: React.FC<{ kind: VisualKind; image?: string; alt?: string; className?: string }> = ({
  kind,
  image,
  alt,
  className = '',
}) => {
  const Art = MAP[kind];
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-surface-2 via-surface to-surface-2 ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 15%, color-mix(in srgb, var(--accent) 28%, transparent), transparent 45%), radial-gradient(circle at 85% 90%, color-mix(in srgb, var(--coral) 22%, transparent), transparent 45%)',
        }}
      />
      {image ? (
        <img
          src={image}
          alt={alt ?? ''}
          loading="lazy"
          decoding="async"
          className="relative h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <>
          <span className="sr-only">{alt ?? 'Illustration of the project interface'}</span>
          <div aria-hidden="true" className="relative flex h-full w-full items-center justify-center">
            <Art />
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectVisual;
