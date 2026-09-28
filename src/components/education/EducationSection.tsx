import { Section } from '../common/Section';
import { useLanguage } from '../../context/LanguageContext';
import { achievements, education } from '../../data/education';
import { EducationCard } from './EducationCard';
import { AchievementItem } from './AchievementItem';

export function EducationSection() {
  const { t } = useLanguage();

  return (
    <Section id="education" heading={t('education.heading')}>
      <div className="space-y-4">
        <EducationCard entry={education} />
        {achievements.map((achievement) => (
          <AchievementItem key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </Section>
  );
}
