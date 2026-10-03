import React from 'react';
import { ArrowUpRight, BookOpenText, Github, Lock } from 'lucide-react';
import { Project } from '../types';
import StatusBadge from './StatusBadge';
import ProjectVisual from './ProjectVisual';
import { openCaseStudy, spotlightHandlers, useReveal } from '../lib/interactions';

const Chips: React.FC<{ items: string[]; max?: number }> = ({ items, max }) => {
  const shown = max ? items.slice(0, max) : items;
  const rest = max ? items.length - shown.length : 0;
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {shown.map((t) => (
        <li key={t} className="rounded-md border border-line bg-bg/60 px-2.5 py-1 text-xs font-medium text-muted">
          {t}
        </li>
      ))}
      {rest > 0 && <li className="rounded-md px-1.5 py-1 text-xs font-medium text-muted">+{rest} more</li>}
    </ul>
  );
};

const Actions: React.FC<{ project: Project }> = ({ project }) => (
  <div className="mt-6 flex flex-wrap items-center gap-3">
    {project.liveUrl && (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition hover:brightness-110 active:scale-[0.98]"
      >
        {project.liveLabel ?? 'View live'}
        <ArrowUpRight size={16} aria-hidden="true" />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    )}
    {project.repoUrl && (
      <a
        href={project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-semibold transition hover:border-accent hover:text-accent-ink"
      >
        <Github size={16} aria-hidden="true" />
        {project.repoLabel ?? 'View on GitHub'}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    )}
    <button
      type="button"
      onClick={() => openCaseStudy(project.id)}
      className={`inline-flex min-h-11 items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${
        project.liveUrl || project.repoUrl
          ? 'text-muted hover:text-fg'
          : 'bg-accent text-on-accent hover:brightness-110 active:scale-[0.98]'
      }`}
    >
      <BookOpenText size={16} aria-hidden="true" />
      Read case study
      <span className="sr-only"> for {project.title}</span>
    </button>
  </div>
);

const Source: React.FC<{ project: Project }> = ({ project }) =>
  project.repoUrl ? null : (
    <p className="mt-4 flex items-center gap-2 text-xs text-muted">
      <Lock size={13} aria-hidden="true" />
      {project.sourceNote}
    </p>
  );

const ProjectCard: React.FC<{ project: Project; wide?: boolean }> = ({ project, wide }) => {
  const ref = useReveal<HTMLElement>();

  if (project.featured || wide) {
    return (
      <article
        ref={ref}
        {...spotlightHandlers()}
        className="reveal spot group col-span-full overflow-hidden rounded-2xl border border-line bg-surface lg:grid lg:grid-cols-5"
      >
        <ProjectVisual
          kind={project.visual}
          image={project.image}
          alt={project.imageAlt ?? `${project.title} app interface`}
          className="min-h-72 lg:col-span-2 lg:min-h-[28rem]"
        />
        <div className="p-6 sm:p-8 lg:col-span-3 lg:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} large />
            {project.featured && <span className="text-sm font-medium text-coral">Featured professional work</span>}
          </div>
          <h4 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h4>
          <p className="mt-1 text-sm text-muted">{project.kindLabel}</p>
          <p className="mt-5 max-w-[62ch] leading-relaxed text-muted">{project.description}</p>

          {project.caseStudy.timeline && (
            <ol className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs font-medium" aria-label="Release journey">
              {project.caseStudy.timeline.map((step, i, arr) => (
                <li key={step} className="flex items-center gap-2">
                  <span
                    className={`rounded-full border px-2.5 py-1 ${
                      i === arr.length - 1 ? 'border-ok/50 bg-ok/10 text-ok' : 'border-line text-muted'
                    }`}
                  >
                    {step}
                  </span>
                  {i < arr.length - 1 && <span aria-hidden="true" className="text-muted">›</span>}
                </li>
              ))}
            </ol>
          )}

          <div className="mt-6">
            <Chips items={project.technologies} />
          </div>
          <Actions project={project} />
          <Source project={project} />
        </div>
      </article>
    );
  }

  return (
    <article
      ref={ref}
      {...spotlightHandlers()}
      className="reveal spot group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent/50"
    >
      <div className="relative">
        <ProjectVisual
          kind={project.visual}
          image={project.image}
          alt={project.imageAlt ?? `${project.title} interface`}
          className="aspect-[16/9]"
        />
        <div className="absolute left-4 top-4">
          <StatusBadge status={project.status} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h4 className="font-display text-2xl font-bold tracking-tight">{project.title}</h4>
        <p className="mt-1 text-sm text-muted">{project.kindLabel}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{project.tagline}</p>
        <p className="mt-3 text-sm">
          <span className="font-semibold">My role: </span>
          <span className="text-muted">{project.role}</span>
        </p>
        <div className="mt-5">
          <Chips items={project.technologies} max={5} />
        </div>
        <div className="mt-auto">
          <Actions project={project} />
          <Source project={project} />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
