import React, { useMemo, useState } from 'react';
import { PROJECTS, PROJECT_GROUPS } from '../constants';
import { Category } from '../types';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

type Filter = 'all' | Category;

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('all');

  const filters = useMemo(
    () => [
      { id: 'all' as Filter, label: 'All', count: PROJECTS.length },
      ...PROJECT_GROUPS.map((g) => ({
        id: g.id as Filter,
        label: g.filterLabel,
        count: PROJECTS.filter((p) => p.category === g.id).length,
      })),
    ],
    []
  );

  const visibleGroups = PROJECT_GROUPS.filter((g) => filter === 'all' || g.id === filter);

  return (
    <section id="work" aria-labelledby="work-title" className="section-pad py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="work-title"
          title="Work, from production apps to personal builds"
          intro="Production applications, client projects and independent builds. Where source code is private, the case study shows what I worked on and what it led to."
        />

        <div role="group" aria-label="Filter projects" className="no-scrollbar -mx-1 mb-12 flex gap-2 overflow-x-auto px-1 pb-1">
          {filters.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f.id)}
                className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-5 text-sm font-semibold transition ${
                  active
                    ? 'border-accent bg-accent text-on-accent'
                    : 'border-line text-muted hover:border-accent/60 hover:text-fg'
                }`}
              >
                {f.label}
                <span className={`text-xs ${active ? 'opacity-80' : 'opacity-60'}`}>{f.count}</span>
              </button>
            );
          })}
        </div>

        <div className="space-y-20 md:space-y-28">
          {visibleGroups.map((group) => {
            const items = PROJECTS.filter((p) => p.category === group.id);
            return (
              <div key={`${group.id}-${filter}`}>
                <div className="mb-8 max-w-3xl">
                  <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{group.title}</h3>
                  <p className="mt-2 max-w-[60ch] leading-relaxed text-muted">{group.intro}</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:gap-8">
                  {items.map((p) => {
                    // A lone card in the last row would leave half the grid empty, so let it span the full width.
                    const regular = items.filter((x) => !x.featured);
                    const isLoneLast = !p.featured && regular.length % 2 === 1 && p.id === regular[regular.length - 1].id;
                    return <ProjectCard key={p.id} project={p} wide={isLoneLast && regular.length > 0 && items.length > 1 ? true : undefined} />;
                  })}
                </div>
                {group.note && <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">{group.note}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
