import React from 'react';
import { TECH_CATEGORIES } from '../constants';
import SectionHeading from './SectionHeading';

const TechStack: React.FC = () => (
  <section id="skills" aria-labelledby="skills-title" className="section-pad border-y border-line bg-surface py-24 md:py-32">
    <div className="mx-auto max-w-7xl">
      <SectionHeading id="skills-title" title="Technologies I work with" />
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {TECH_CATEGORIES.map((group) => (
          <div key={group.category}>
            <h3 className="font-display text-lg font-bold">{group.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-line bg-bg px-3 py-1.5 text-sm font-medium text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-fg"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
