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
      'Ældre der efter sygdom, indlæggelse, eller svigtende kræfterne har brug for ergoterapi.',
    link: '/privat',
    image: 'assets/illustrations/home/forside_privat.jpg',
  },
  {
    title: 'Erhverv',
    description:
      'Ergoterapeutisk rådgivning og indsatser målrettet virksomheder.',
    link: '/erhverv',
    image: 'assets/illustrations/home/forside_erhverv.jpg',
  },
];
