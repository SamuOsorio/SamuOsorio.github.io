import type { Achievement, EducationEntry } from '../types/education';

export const education: EducationEntry = {
  institution: 'Pontificia Universidad Javeriana',
  degreeKey: 'education.degree',
  gpa: '4.1/5.0',
  dateRange: '2023 – 2027',
  courseworkKey: 'education.coursework',
};

export const achievements: Achievement[] = [
  {
    id: 'redHatCert',
    titleKey: 'education.achievements.redHat.title',
    descriptionKey: 'education.achievements.redHat.description',
    date: 'May 2025',
  },
];
