import { ArrowUpRight, Trophy } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { TranslationKey } from '../../i18n/translations';
import { redBullPhotos, redBullStats } from '../../data/redbull';
import { projects } from '../../data/projects';
import { Reveal } from '../common/Reveal';

const featuredProject = projects.find((project) => project.id === 'sign4all')!;
const projectUrl = `https://github.com/${featuredProject.owner}/${featuredProject.repo}`;

export function RedBullSpotlight() {
  const { t } = useLanguage();

  return (
    <section id="spotlight" className="scroll-mt-20 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-white p-8 shadow-sm dark:border-indigo-900/40 dark:from-indigo-950/40 dark:via-slate-900 dark:to-slate-900 sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300">
            <Trophy size={14} />
            {t('spotlight.eyebrow')}
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
            {t('spotlight.heading')}
          </h2>

          <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">{t('spotlight.story')}</p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {redBullStats.map((stat) => (
              <div
                key={stat.labelKey}
                className="rounded-2xl bg-white/70 p-5 text-center shadow-sm dark:bg-slate-900/60"
              >
                <p className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {t(stat.labelKey as TranslationKey)}
                </p>
              </div>
            ))}
          </div>

          {redBullPhotos.length > 0 && (
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {redBullPhotos.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="aspect-square w-full rounded-xl object-cover shadow-sm"
                />
              ))}
            </div>
          )}

          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-indigo-500"
          >
            {t('spotlight.cta')}
            <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
