import React from 'react';
import { ProjectStatus } from '../types';

const TONES: Record<ProjectStatus['tone'], string> = {
  live: 'text-ok border-ok/40 bg-ok/10',
  prep: 'text-sun border-sun/40 bg-sun/10',
  public: 'text-accent-ink border-accent/40 bg-accent/10',
};

const StatusBadge: React.FC<{ status: ProjectStatus; large?: boolean }> = ({ status, large }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full border font-semibold ${TONES[status.tone]} ${
      large ? 'px-4 py-1.5 text-sm' : 'px-3 py-1 text-xs'
    }`}
  >
    <span
      aria-hidden="true"
      className={`h-2 w-2 rounded-full bg-current ${status.tone === 'live' ? 'pulse-dot' : ''}`}
    />
    {status.label}
  </span>
);

export default StatusBadge;
