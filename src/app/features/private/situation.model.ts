export type Situation = {
  title: string;
  background: string;
  paragraphs: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
};

export const SITUATIONS: Situation[] = [
  {
    title: 'Du har ikke så mange kræfter',
    background: 'bg-app-green-100',
    paragraphs: [
      'Du har svært ved at åbne flasker, nå ned til gulvet eller er blevet nervøs for at tage bussen. Jeg tilbyder afprøvning af de aktiviteter du ønsker, og sammen afprøver vi strategier, så du igen er så selvstændig som mulig.',
    ],
    image: 'assets/illustrations/services/elderly-people-professional_07.png',
    imageWidth: 200,
    imageHeight: 253,
    alt: 'Illustration',
  },
  {
    title: 'Din nærmeste har brug for hjælp',
    background: 'bg-app-blue-100',
    paragraphs: [
      'Du hjælper din nærmeste med at få handlet, vasket tøj eller gå i bad. Jeg tilbyder afprøvning og træning i de aktiviteter som er blevet svære.',
    ],
    image: 'assets/illustrations/services/elderly-people-professional_04.png',
    imageWidth: 149,
    imageHeight: 217,
    alt: 'Illustration',
  },
  {
    title: 'Du skal hjem fra hospital',
    background: 'bg-app-green-100',
    paragraphs: [
      'Du er blevet udskrevet fra hospitalet, og du er bekymret for hvordan det skal gå. Jeg besøger dig og sammen afprøver vi løsninger, der kan få dig tilbage til din hverdag.',
    ],
    image: 'assets/illustrations/services/doctor-patient_06.png',
    imageWidth: 100,
    imageHeight: 95,
    alt: 'Illustration',
  },
  {
    title: 'Du bor på plejehjem',
    background: 'bg-app-blue-100',
    paragraphs: [
      'Dagene er lange og du savner aktivitet der interesserer dig. Jeg tilbyder ergoterapi med fokus på aktiviteter, som du kan lide, så du fysisk og kognitivt bliver udfordret.',
    ],
    image: 'assets/illustrations/services/volunteers-helping-elderly_09.png',
    imageWidth: 168,
    imageHeight: 141,
    alt: 'Illustration',
  },
  {
    title: 'Hjælpemidler er blevet din hverdag',
    background: 'bg-app-green-100',
    paragraphs: [
      'Du har behov for hjælpemidler for at din hverdag fungerer. Nogle hjælpemidler bevilges af kommunen, og nogle hjælpemidler køber man selv. Jeg kan vejlede og rådgive i brug og køb af hjælpemidler, der kan afhjælpe dig i din hverdag.',
    ],
    image: 'assets/illustrations/services/dame_med_gangstativ.png',
    imageWidth: 472,
    imageHeight: 420,
    alt: 'Illustration',
  },
  {
    title: 'Du er bevilget hjælp fra kommunen',
    background: 'bg-app-blue-100',
    paragraphs: [
      'Du er bevilget hjælp fra kommunen, men føler ikke at du bliver mødt i dine behov. Jeg kan tilbyde at være bisidder ved dine visitationsbesøg, og hjælpe dig med at dine synspunkter bliver hørt.',
    ],
    image: 'assets/illustrations/services/par_i_sofa.png',
    imageWidth: 472,
    imageHeight: 420,
    alt: 'Illustration',
  },
];
