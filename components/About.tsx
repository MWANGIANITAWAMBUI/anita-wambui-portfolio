import React from 'react';
import { ABOUT_MILESTONES, ABOUT_TEXT } from '../constants';
import SectionHeading from './SectionHeading';

const About: React.FC = () => (
  <section id="about" aria-labelledby="about-title" className="section-pad border-y border-line bg-surface py-24 md:py-32">
    <div className="mx-auto max-w-7xl">
      <SectionHeading id="about-title" title="From intern to production engineer" />
      <div className="grid gap-14 lg:grid-cols-12">
        <p className="max-w-[62ch] text-xl leading-relaxed text-muted lg:col-span-7">{ABOUT_TEXT}</p>

        <div className="lg:col-span-5">
          <h3 className="font-display text-xl font-bold">The journey so far</h3>
          <ol className="relative mt-6 space-y-6 border-l border-line pl-7">
            {ABOUT_MILESTONES.map((m) => (
              <li key={m} className="relative leading-snug text-muted">
                <span aria-hidden="true" className="absolute -left-[33px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-surface" />
                {m}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default About;
