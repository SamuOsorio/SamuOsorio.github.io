import type { Project } from '../../types/project';
import { useGithubRepo } from '../../hooks/useGithubRepo';
import { useLanguage } from '../../context/LanguageContext';
import type { TranslationKey } from '../../i18n/translations';
import { GithubIcon } from '../common/BrandIcons';
import { GithubStatBadge } from './GithubStatBadge';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();
  const { data, status } = useGithubRepo(project.owner, project.repo);
  const repoUrl = `https://github.com/${project.owner}/${project.repo}`;

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
            {t(`projects.${project.id}.title` as TranslationKey)}
          </h3>
          <p className="text-xs font-medium text-slate-400 dark:text-slate-500">{project.dateLabel}</p>
        </div>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('projects.viewRepo')}
          className="shrink-0 text-slate-400 transition hover:text-slate-900 dark:hover:text-white"
        >
          <GithubIcon size={20} />
        </a>
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-400">
        {t(`projects.${project.id}.description` as TranslationKey)}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-2">
        <GithubStatBadge status={status} data={data} />
      </div>
    </article>
  );
}
