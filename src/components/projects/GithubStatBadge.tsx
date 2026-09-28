import { Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { FetchStatus, GithubRepoData } from '../../types/github';

interface GithubStatBadgeProps {
  status: FetchStatus;
  data: GithubRepoData | null;
}

export function GithubStatBadge({ status, data }: GithubStatBadgeProps) {
  const { t, locale } = useLanguage();

  if (status === 'loading') {
    return (
      <div className="flex animate-pulse items-center gap-3">
        <div className="h-4 w-16 rounded bg-slate-200 dark:bg-slate-700" />
        <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-700" />
      </div>
    );
  }

  if (status === 'error' || !data) {
    return (
      <p className="text-xs italic text-slate-400 dark:text-slate-500">{t('projects.liveDataUnavailable')}</p>
    );
  }

  const updated = new Intl.DateTimeFormat(locale === 'es' ? 'es-CO' : 'en-US', {
    year: 'numeric',
    month: 'short',
  }).format(new Date(data.updatedAt));

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
      <span className="inline-flex items-center gap-1">
        <Star size={14} className="text-amber-500" />
        {data.stars} {t('projects.stars')}
      </span>
      {data.language && <span>{data.language}</span>}
      <span>
        {t('projects.updated')} {updated}
      </span>
    </div>
  );
}
