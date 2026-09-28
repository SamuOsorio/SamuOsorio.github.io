import type { SkillCategory } from '../types/skill';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    titleKey: 'skills.categories.languages',
    items: [
      { name: 'Python', level: 'Advanced' },
      { name: 'SQL', level: 'Advanced' },
      { name: 'Java', level: 'Intermediate' },
      { name: 'C++', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'Kotlin', level: 'Basic' },
    ],
  },
  {
    id: 'aiMl',
    titleKey: 'skills.categories.aiMl',
    items: [
      { name: 'scikit-learn', level: 'Intermediate' },
      { name: 'Pandas', level: 'Intermediate' },
      { name: 'Whisper', level: 'Intermediate' },
      { name: 'Matplotlib', level: 'Basic' },
      { name: 'spaCy', level: 'Basic' },
    ],
  },
  {
    id: 'aiAgents',
    titleKey: 'skills.categories.aiAgents',
    items: [
      { name: 'Claude Code', level: 'Advanced' },
      { name: 'OpenCode', level: 'Advanced' },
    ],
  },
  {
    id: 'frameworks',
    titleKey: 'skills.categories.frameworks',
    items: [
      { name: 'React', level: 'Intermediate' },
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Nginx', level: 'Intermediate' },
      { name: 'Spring Boot', level: 'Basic' },
      { name: 'FastAPI', level: 'Basic' },
      { name: 'Ansible', level: 'Basic' },
    ],
  },
  {
    id: 'databases',
    titleKey: 'skills.categories.databases',
    items: [
      { name: 'PostgreSQL', level: 'Intermediate' },
      { name: 'Oracle', level: 'Intermediate' },
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Basic' },
    ],
  },
  {
    id: 'toolsCloud',
    titleKey: 'skills.categories.toolsCloud',
    items: [
      { name: 'Git', level: 'Advanced' },
      { name: 'Linux', level: 'Advanced' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'Kubernetes', level: 'Basic' },
      { name: 'AWS', level: 'Basic' },
    ],
  },
];
