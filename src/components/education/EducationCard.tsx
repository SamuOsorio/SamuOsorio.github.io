import { GraduationCap } from 'lucide-react';
import type { EducationEntry } from '../../types/education';
import { useLanguage } from '../../context/LanguageContext';
import type { TranslationKey } from '../../i18n/translations';

interface EducationCardProps {
  entry: EducationEntry;
}

export function EducationCard({ entry }: EducationCardProps) {
  const { t } = useLanguage();

  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <GraduationCap className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400" size={22} />
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <h4 className="font-semibold text-slate-900 dark:text-slate-50">{entry.institution}</h4>
          <span className="text-xs text-slate-400 dark:text-slate-500">{entry.dateRange}</span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {t(entry.degreeKey as TranslationKey)} · {t('education.gpaLabel')}: {entry.gpa}
        </p>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {t(entry.courseworkKey as TranslationKey)}
        </p>
      </div>
    </div>
  );
}
