import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CONTACT } from '../constants';
import { spotlightHandlers } from '../lib/interactions';

interface Row {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

const Contact: React.FC = () => {
  const rows: Row[] = [
    { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { label: 'LinkedIn', value: 'anita-wambui-a01512203', href: CONTACT.linkedin, external: true },
    { label: 'GitHub', value: 'MWANGIANITAWAMBUI', href: CONTACT.github, external: true },
    { label: 'Phone', value: CONTACT.phoneNo, href: `tel:${CONTACT.phoneNo}` },
    { label: 'Location', value: CONTACT.address },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-pad border-t border-line bg-surface py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-5">
          <h2 id="contact-title" className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Let's build something together
          </h2>
          <p className="mt-5 max-w-[44ch] text-lg leading-relaxed text-muted">
            I'm currently building at ElementPay and open to new opportunities and collaborations.
          </p>
        </div>

        <ul className="min-w-0 lg:col-span-7">
          {rows.map((r) => {
            const inner = (
              <>
                <span className="w-24 shrink-0 text-sm text-muted">{r.label}</span>
                <span className="min-w-0 flex-1 font-display [overflow-wrap:anywhere] text-lg font-semibold sm:text-2xl">{r.value}</span>
                {r.href && (
                  <ArrowUpRight
                    size={22}
                    aria-hidden="true"
                    className="shrink-0 text-muted transition group-hover:rotate-12 group-hover:text-accent-ink"
                  />
                )}
              </>
            );
            return (
              <li key={r.label} className="border-b border-line first:border-t">
                {r.href ? (
                  <a
                    href={r.href}
                    {...(r.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    {...spotlightHandlers()}
                    className="spot group flex min-h-16 items-center gap-4 px-2 py-5 transition-colors hover:bg-bg/50"
                  >
                    {inner}
                    {r.external && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                ) : (
                  <div className="flex min-h-16 items-center gap-4 px-2 py-5">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
