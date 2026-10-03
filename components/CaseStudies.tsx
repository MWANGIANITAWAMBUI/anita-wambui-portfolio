import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';
import { PROJECTS } from '../constants';
import { OPEN_CASE_EVENT } from '../lib/interactions';
import SectionHeading from './SectionHeading';
import StatusBadge from './StatusBadge';

const STEPS = [
  { key: 'problem', title: 'Problem', tint: 'var(--coral)' },
  { key: 'solution', title: 'Solution', tint: 'var(--accent)' },
  { key: 'impact', title: 'Impact', tint: 'var(--ok)' },
] as const;

const CaseStudies: React.FC = () => {
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const project = PROJECTS.find((p) => p.id === activeId) ?? PROJECTS[0];

  // Other sections (project cards, hero) can open a specific case study.
  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (PROJECTS.some((p) => p.id === id)) setActiveId(id);
    };
    window.addEventListener(OPEN_CASE_EVENT, handler);
    return () => window.removeEventListener(OPEN_CASE_EVENT, handler);
  }, []);

  // Arrow-key navigation between tabs
  const onKeyDown = (e: React.KeyboardEvent) => {
    const idx = PROJECTS.findIndex((p) => p.id === activeId);
    let next = idx;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (idx + 1) % PROJECTS.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (idx - 1 + PROJECTS.length) % PROJECTS.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = PROJECTS.length - 1;
    else return;
    e.preventDefault();
    setActiveId(PROJECTS[next].id);
    tabRefs.current[PROJECTS[next].id]?.focus();
  };

  return (
    <section id="case-studies" aria-labelledby="cases-title" className="section-pad border-y border-line bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="cases-title"
          title="Case studies: problem, solution, impact"
          intro="Pick a project to see what it needed, what I built or contributed, and what came of it. Team projects are described in terms of my contribution."
        />

        <div
          role="tablist"
          aria-label="Choose a project"
          onKeyDown={onKeyDown}
          className="no-scrollbar -mx-1 mb-10 flex gap-2 overflow-x-auto px-1 pb-2"
        >
          {PROJECTS.map((p) => {
            const selected = p.id === activeId;
            return (
              <button
                key={p.id}
                ref={(el) => {
                  tabRefs.current[p.id] = el;
                }}
                role="tab"
                id={`tab-${p.id}`}
                aria-selected={selected}
                aria-controls="case-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(p.id)}
                className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-semibold transition ${
                  selected
                    ? 'border-accent bg-accent text-on-accent'
                    : 'border-line text-muted hover:border-accent/60 hover:text-fg'
                }`}
              >
                {p.title}
              </button>
            );
          })}
        </div>

        <div id="case-panel" role="tabpanel" aria-labelledby={`tab-${project.id}`} key={project.id} className="panel-in">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h3>
            <StatusBadge status={project.status} />
          </div>
          <p className="mt-2 text-muted">
            {project.kindLabel} · {project.role}
          </p>

          <ol className="mt-10 grid gap-5 lg:grid-cols-3">
            {STEPS.map((step, i) => (
              <li key={step.key} className="relative rounded-2xl border border-line bg-bg p-6 sm:p-7">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-6 top-0 h-1 rounded-b-full"
                  style={{ background: step.tint }}
                />
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-bg"
                    style={{ background: step.tint }}
                  >
                    {i + 1}
                  </span>
                  <h4 className="font-display text-xl font-bold">{step.title}</h4>
                </div>
                <p className="mt-4 leading-relaxed text-muted">{project.caseStudy[step.key]}</p>
              </li>
            ))}
          </ol>

          {project.caseStudy.timeline && (
            <div className="mt-8">
              <h4 className="mb-4 font-display text-lg font-bold">Release journey</h4>
              <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {project.caseStudy.timeline.map((step, i, arr) => (
                  <li
                    key={step}
                    className={`rounded-xl border px-3 py-3 text-sm font-medium ${
                      i === arr.length - 1 ? 'border-ok/50 bg-ok/10 text-ok' : 'border-line bg-bg text-muted'
                    }`}
                  >
                    <span className="block text-xs opacity-70">Stage {i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="mt-10 grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h4 className="font-display text-lg font-bold">What I worked on</h4>
              <ul className="mt-4 space-y-2.5">
                {project.contributions.map((c) => (
                  <li key={c} className="flex gap-3 leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h4 className="font-display text-lg font-bold">Technologies</h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <li key={t} className="rounded-md border border-line bg-bg px-2.5 py-1 text-xs font-medium text-muted">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition hover:brightness-110"
                  >
                    {project.liveLabel ?? 'View live'}
                    <ArrowUpRight size={16} aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-semibold transition hover:border-accent"
                  >
                    {project.repoLabel ?? 'View on GitHub'}
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  <p className="flex items-center gap-2 text-sm text-muted">
                    <Lock size={14} aria-hidden="true" />
                    {project.sourceNote}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
