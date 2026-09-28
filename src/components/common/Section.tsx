import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  heading: string;
  subheading?: string;
  children: ReactNode;
}

export function Section({ id, heading, subheading, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
              {heading}
            </h2>
            {subheading && <p className="mt-2 text-slate-600 dark:text-slate-400">{subheading}</p>}
          </div>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
