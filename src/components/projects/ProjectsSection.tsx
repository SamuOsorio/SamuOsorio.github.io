import { Section } from '../common/Section';
import { useLanguage } from '../../context/LanguageContext';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <Section id="projects" heading={t('projects.heading')} subheading={t('projects.subheading')}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
