import React from 'react';
import { CONTACT } from '../constants';

const Footer: React.FC = () => (
  <footer className="section-pad border-t border-line py-10">
    <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 text-sm text-muted sm:flex-row sm:items-center">
      <p>© {new Date().getFullYear()} Anita Wambui Mwangi · Software Engineer</p>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        <li>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
            LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
            GitHub<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <a href={`mailto:${CONTACT.email}`} className="hover:text-fg">
            Email
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
