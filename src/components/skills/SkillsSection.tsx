import { Section } from '../common/Section';
import { useLanguage } from '../../context/LanguageContext';
import { skillCategories } from '../../data/skills';
import { SkillCategoryCard } from './SkillCategoryCard';

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <Section id="skills" heading={t('skills.heading')} subheading={t('skills.subheading')}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <SkillCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </Section>
  );
}
