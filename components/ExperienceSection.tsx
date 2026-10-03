import React from 'react';
import { EXPERIENCES } from '../constants';
import { spotlightHandlers } from '../lib/interactions';
import SectionHeading from './SectionHeading';

const ExperienceSection: React.FC = () => (
  <section id="experience" aria-labelledby="exp-title" className="section-pad py-24 md:py-32">
    <div className="mx-auto max-w-7xl">
      <SectionHeading id="exp-title" title="Experience" intro="Where I have worked on production software, and how my role grew." />
      <div className="space-y-6">
        {EXPERIENCES.map((exp) => (
          <article
            key={exp.year}
            {...spotlightHandlers()}
            className="spot grid gap-6 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50 sm:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10"
          >
            <div className="lg:col-span-3">
              <p className="font-display text-lg font-bold">{exp.year}</p>
              <p className="mt-1 text-muted">{exp.company}</p>
            </div>
            <div className="lg:col-span-9">
              <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{exp.role}</h3>
              <p className="mt-4 max-w-[68ch] leading-relaxed text-muted">{exp.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                {exp.technologies.map((t) => (
                  <li key={t} className="rounded-md border border-line bg-bg/60 px-2.5 py-1 text-xs font-medium text-muted">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
