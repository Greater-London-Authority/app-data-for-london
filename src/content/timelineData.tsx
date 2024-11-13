export const timelineData = [
  {
    id: 1,
    title: 'First event',
    date: '2010',
    description:
      'London Datastore, is launched, the first data platform for a major city globally',
  },
  {
    id: 2,
    title: 'Second event',
    date: '2011',
    description: 'Census data is added to the London Datastore',
  },
  {
    id: 3,
    title: 'Third event',
    date: '2015',
    description:
      'London Datastore wins gold for the Open Data Institute Publisher Award',
  },
  {
    id: 4,
    title: 'Fourth event',
    date: '2018',
    description:
      'Smart London Together launches to transform London into the smartest city in the world',
  },
  {
    id: 5,
    title: 'Fifth event',
    date: '2020',
    description:
      'London Datastore creates COVID-19 Dashboard, an estimated 20,000 users access this dashboard monthly',
  },
  {
    id: 6,
    title: 'Sixth event',
    date: '2021',
    description:
      'Mayor’s Manifesto for London commits to ‘harness data and emerging tech for our city’',
  },
  {
    id: 7,
    title: 'Seventh event',
    date: '2022',
    description:
      'The Mayor’s Data for London Advisory Board forms, bringing the greatest data, tech and AI minds in London together',
  },
  {
    id: 8,
    title: 'Eigth event',
    date: '2024',
    description:
      'Data for London and Data for London Library beta service launches',
  },
];

export type TimelineData = (typeof timelineData)[number];

export interface TimelineElement {
  id: number;
  title: string;
  date: string;
  description: string;
}
