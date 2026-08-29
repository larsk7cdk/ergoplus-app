export type AudienceCard = {
  title: string;
  description: string;
  link: string;
  image?: string;
};

export const AUDIENCE_CARDS: AudienceCard[] = [
  {
    title: 'Privat',
    description:
      'Hjælp til dig og dine nærmeste i hverdagen – uanset om det er efter sygdom, indlæggelse, eller når kræfterne svigter.',
    link: '/privat',
  },
  {
    title: 'Erhverv',
    description:
      'Ergoterapeutisk rådgivning og indsatser målrettet virksomheder og arbejdspladser.',
    link: '/erhverv',
  },
];
