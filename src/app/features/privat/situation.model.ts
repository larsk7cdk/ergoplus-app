export type Situation = {
  title: string;
  background: string;
  paragraphs: string[];
  image: string;
  alt: string;
};

export const SITUATIONS: Situation[] = [
  {
    title: 'Du har ikke så mange kræfter',
    background: 'bg-app-green-100',
    paragraphs: [
      'Du har svært ved at åbne flasker, nå ned til gulvet eller stå i længere tid. Du kan være nervøs for at tage bussen eller cykle.',
      'Jeg tilbyder hjælp til at afprøve hjælpemidler, og sammen med dig lave en plan for, hvordan du kan træne i det, der er vigtigst for dig.',
    ],
    image: 'assets/illustrations/services/elderly-people-professional_07.png',
    alt: 'Illustration',
  },
  {
    title: 'Din nærmeste har brug for hjælp',
    background: 'bg-app-blue-100',
    paragraphs: [
      'Din nærmeste har svært ved at få handlet, vasket tøj, gå i bad og har måske mange lægeaftaler eller aftaler med kommunen.',
      'Jeg tilbyder træning i de daglige aktiviteter, hvor jeg afprøver aktiviteterne. Jeg tilbyder også følgeskab til læge og møder med kommunen.',
    ],
    image: 'assets/illustrations/services/elderly-people-professional_04.png',
    alt: 'Illustration',
  },
  {
    title: 'Du skal hjem fra hospital',
    background: 'bg-app-green-100',
    paragraphs: [
      'Du skal udskrives efter længere tids indlæggelse. Din genoptræning er måske slut, og du er bekymret for hvordan det skal gå.',
      'Jeg kan gøre din udskrivelse mere tryg, ved at besøge dig på hospitalet, og komme hjem til dig ved udskrivelse. Med mig kan du afprøve bad og indkøb. Jeg tilbyder vedligeholdende træning for at du bedst muligt kan bibeholde dét, du har opnået.',
    ],
    image: 'assets/illustrations/services/doctor-patient_06.png',
    alt: 'Illustration',
  },
  {
    title: 'Du bor på plejehjem',
    background: 'bg-app-blue-100',
    paragraphs: [
      'Dagene kan være lange og du savner aktivitet, der interesserer dig. Du modtager måske lidt træning via kommunen, men vil gerne træne oftere.',
      'Jeg tilbyder ergoterapi med fokus på at lave aktiviteter, som du kan lide. Med din tilladelse kan jeg kontakte din fysioterapeut, så træningen koordineres.',
    ],
    image: 'assets/illustrations/services/volunteers-helping-elderly_09.png',
    alt: 'Illustration',
  },
  {
    title: 'Din ægtefælle er blevet syg',
    background: 'bg-app-green-100',
    paragraphs: [
      'Din ægtefælle har brug for hjemmepleje flere gange om dagen, og det er hårdt for jer begge. Der er mange ting at holde styr på.',
      'Jeg tilbyder hjælp til de praktiske gøremål, og har fokus på at inddrage dig og din ægtefælle. Jeg kan hjælpe med ansøgninger indenfor Serviceloven.',
    ],
    image: 'assets/illustrations/services/seniors-with-life-insurance.png',
    alt: 'Illustration',
  },
];
