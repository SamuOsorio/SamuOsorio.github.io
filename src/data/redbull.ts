export interface RedBullStat {
  value: string;
  labelKey: string;
}

export const redBullStats: RedBullStat[] = [
  { value: '1,000+', labelKey: 'spotlight.stats.ideas' },
  { value: 'Top 8', labelKey: 'spotlight.stats.rank' },
  { value: '40+', labelKey: 'spotlight.stats.countries' },
];

export interface RedBullPhoto {
  src: string;
  altKey: string;
}

export const redBullPhotos: RedBullPhoto[] = [
  { src: '/images/redbull/sign4all-team-stage.webp', altKey: 'spotlight.photos.teamStage' },
  { src: '/images/redbull/redbull-basement-winners.jpg', altKey: 'spotlight.photos.winners' },
  { src: '/images/redbull/redbull-basement-final-nacional.jpg', altKey: 'spotlight.photos.finalNacional' },
];
