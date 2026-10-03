import React from 'react';

const SectionHeading: React.FC<{ id?: string; title: string; intro?: string }> = ({ id, title, intro }) => (
  <div className="mb-12 max-w-3xl md:mb-16">
    <h2 id={id} className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
      {title}
    </h2>
    {intro && <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">{intro}</p>}
  </div>
);

export default SectionHeading;
