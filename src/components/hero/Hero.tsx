import { Download, Mail } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';
import { ExternalLink } from '../common/ExternalLink';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';
import { Reveal } from '../common/Reveal';

export function Hero() {
  const { t, locale } = useLanguage();

  return (
    <section id="top" className="scroll-mt-20 py-14 sm:py-20">
      <Reveal className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8">
        <img
          src={profile.photoPath}
          alt={profile.name}
          className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg dark:border-slate-800"
        />
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
            {t('hero.kicker')}
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-50">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-600 dark:text-slate-300">{t('hero.role')}</p>
        </div>
        <p className="max-w-2xl text-balance text-slate-600 dark:text-slate-400">{t('hero.bio')}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.cvPath[locale]}
            download
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-indigo-500"
          >
            <Download size={16} />
            {t('hero.downloadCv')}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {t('hero.contactMe')}
          </a>
        </div>
        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
          <ExternalLink
            href={profile.github}
            className="transition hover:text-slate-900 dark:hover:text-white"
          >
            <GithubIcon size={20} />
          </ExternalLink>
          <ExternalLink
            href={profile.linkedin}
            className="transition hover:text-slate-900 dark:hover:text-white"
          >
            <LinkedinIcon size={20} />
          </ExternalLink>
          <a
            href={`mailto:${profile.email}`}
            className="transition hover:text-slate-900 dark:hover:text-white"
          >
            <Mail size={20} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
