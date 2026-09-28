import type { SkillCategory } from '../../types/skill';
import { useLanguage } from '../../context/LanguageContext';
import type { TranslationKey } from '../../i18n/translations';
import { SkillBar } from './SkillBar';

interface SkillCategoryCardProps {
  category: SkillCategory;
}

export function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  const { t } = useLanguage();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
        {t(category.titleKey as TranslationKey)}
      </h3>
      <div className="space-y-3">
        {category.items.map((item) => (
          <SkillBar key={item.name} name={item.name} level={item.level} />
        ))}
      </div>
    </div>
  );
}
