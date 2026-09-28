import type { SkillItem } from '../../types/skill';

const LEVEL_WIDTH: Record<SkillItem['level'], string> = {
  Basic: 'w-1/3',
  Intermediate: 'w-2/3',
  Advanced: 'w-full',
};

const LEVEL_COLOR: Record<SkillItem['level'], string> = {
  Basic: 'bg-slate-400 dark:bg-slate-500',
  Intermediate: 'bg-indigo-400 dark:bg-indigo-500',
  Advanced: 'bg-indigo-600 dark:bg-indigo-400',
};

export function SkillBar({ name, level }: SkillItem) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-800 dark:text-slate-200">{name}</span>
        <span className="text-xs text-slate-500 dark:text-slate-400">{level}</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700">
        <div className={`h-1.5 rounded-full ${LEVEL_WIDTH[level]} ${LEVEL_COLOR[level]}`} />
      </div>
    </div>
  );
}
