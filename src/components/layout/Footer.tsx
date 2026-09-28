import { Mail } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';
import { ExternalLink } from '../common/ExternalLink';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} {profile.name}. {t('footer.rights')}
        </p>
        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
          <ExternalLink
            href={profile.github}
            className="transition hover:text-slate-900 dark:hover:text-white"
          >
            <GithubIcon size={18} />
          </ExternalLink>
          <ExternalLink
            href={profile.linkedin}
            className="transition hover:text-slate-900 dark:hover:text-white"
          >
            <LinkedinIcon size={18} />
          </ExternalLink>
          <a
            href={`mailto:${profile.email}`}
            className="transition hover:text-slate-900 dark:hover:text-white"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
