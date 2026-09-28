export interface RedBullStat {
  value: string;
  labelKey: string;
}

export const redBullStats: RedBullStat[] = [
  { value: '1,000+', labelKey: 'spotlight.stats.ideas' },
  { value: 'Top 8', labelKey: 'spotlight.stats.rank' },
  { value: '40+', labelKey: 'spotlight.stats.countries' },
];

/**
 * Photo paths for the Red Bull Basement spotlight gallery.
 * Drop images into public/images/redbull/ and list their paths here
 * (e.g. '/images/redbull/team-stage.jpg'); the section only renders
 * a gallery when this array is non-empty.
 */
export const redBullPhotos: string[] = [];
