export interface EducationEntry {
  institution: string;
  degreeKey: string;
  gpa: string;
  dateRange: string;
  courseworkKey: string;
}

export interface Achievement {
  id: string;
  titleKey: string;
  descriptionKey: string;
  date: string;
  link?: string;
}
