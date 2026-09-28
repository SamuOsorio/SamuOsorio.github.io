export type SkillLevel = 'Basic' | 'Intermediate' | 'Advanced';

export interface SkillItem {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  id: string;
  titleKey: string;
  items: SkillItem[];
}
