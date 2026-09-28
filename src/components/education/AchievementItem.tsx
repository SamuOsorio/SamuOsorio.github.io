import { Award } from 'lucide-react';
import type { Achievement } from '../../types/education';
import { useLanguage } from '../../context/LanguageContext';
import type { TranslationKey } from '../../i18n/translations';

interface AchievementItemProps {
  achievement: Achievement;
}

export function AchievementItem({ achievement }: AchievementItemProps) {
  const { t } = useLanguage();

  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <Award className="mt-0.5 shrink-0 text-amber-500" size={22} />
      <div>
        <div className="flex flex-wrap items-baseline gap-x-2">
          <h4 className="font-semibold text-slate-900 dark:text-slate-50">
            {t(achievement.titleKey as TranslationKey)}
          </h4>
          <span className="text-xs text-slate-400 dark:text-slate-500">{achievement.date}</span>
        </div>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          {t(achievement.descriptionKey as TranslationKey)}
        </p>
      </div>
    </div>
  );
}
