import React from 'react';
import { ACHIEVEMENTS } from '../constants';
import { spotlightHandlers } from '../lib/interactions';
import SectionHeading from './SectionHeading';

const Achievements: React.FC = () => (
  <section id="achievements" aria-labelledby="highlights-title" className="section-pad py-24 md:py-32">
    <div className="mx-auto max-w-7xl">
      <SectionHeading id="highlights-title" title="Career highlights" />
      <ul className="grid gap-5 md:grid-cols-2">
        {ACHIEVEMENTS.map((item, i) => (
          <li
            key={item.id}
            {...spotlightHandlers()}
            className={`spot rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-accent/50 ${
              i === ACHIEVEMENTS.length - 1 && ACHIEVEMENTS.length % 2 === 1 ? 'md:col-span-2' : ''
            }`}
          >
            <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">{item.title}</h3>
            <p className="mt-3 max-w-[60ch] leading-relaxed text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Achievements;
