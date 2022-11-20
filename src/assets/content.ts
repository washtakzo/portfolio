export type Testimonial = {
  image: string;
  text: string;
  author: string;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
};

export type Technologie = {
  title: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    image:
      "https://uploads-ssl.webflow.com/62f3ee8686515cd11e272485/631b0234135f700a7ff501c9_temoignage%20port%20folio%20totof.png",
    text: "Travailler avec Zoher est un plaisir, malgré une prise de poste très rapide, il s'est adapté pour s'organiser de manière efficace. Sa curiosité lui a permis de vite monter en compétences.",
    author: "C. MARCHIO - Responsable d'affaire - SNCF",
  },
  {
    image:
      "https://uploads-ssl.webflow.com/62f3ee8686515cd11e272485/631b032f9148edb2acf6ab52_temoignage%20port%20folio%20mehdi.png",
    text: "Zoher est un très bon ingénieur ferroviaire, soucieux du détail et des exigences client, il a su composer avec les différentes contraintes pour toujours proposer une solution.",
    author: "E. KADER - Chef de projet - Alstom",
  },
];

export const projects: Project[] = [
  {
    title: "Ikimass App",
    description: `Application Android original permettant de faire des séances personnalisées en notant ses performances rapidement et en gardant un oeil sur sa progression.`,
    technologies: [
      "Kotlin",
      "PHP",
      "MySQL",
      "Retrofit",
      "Recycler View",
      "Fragment",
      "Adobe XD",
      "Photoshop",
    ],
    image:
      "https://uploads-ssl.webflow.com/62f3ee8686515cd11e272485/633f2d888a14aababe67bf1b_2211__mobile_only-p-1600.png",
  },
  {
    title: "Train&Drink",
    description: `Site de mise en relation entre particuliers.
      Mise à disposition de Home Gym & boissons contre rémunération mensuelle.`,
    technologies: [
      "React js",
      "Typescript",
      "MapBox",
      "Nextjs",
      "Tailwind",
      "Material UI",
    ],
    image:
      "https://uploads-ssl.webflow.com/62f3ee8686515cd11e272485/634d3cda05fc10f6939c5625_PSD_07__only_pc__TandD2-p-1600.jpg",
  },
  {
    title: "Netflix Clone",
    description: `Clone de l'application web Netflix`,
    technologies: ["React js", "Redux", "Firebase", "Router", "Stripe"],
    image:
      "https://uploads-ssl.webflow.com/62f3ee8686515cd11e272485/6357c5f0735ff409e2f6d154_1463%20v2-p-1600.png",
  },
  {
    title: "Your Sweets",
    description: `Site de vente de desserts réalisé en équipe dans le carde du bootcamp React Mastery.`,
    technologies: ["React js", "Context API", "Material UI"],
    image:
      "https://uploads-ssl.webflow.com/62f3ee8686515cd11e272485/635ffb0b733c63d8b979a976_v2-p-1600.jpg",
  },
  {
    title: "Hulu-Anime",
    description: `Site de découverte d'animes`,
    technologies: [
      "React js",
      "API GraphQL",
      "Redux",
      "Typescript",
      "Nextjs",
      "Tailwind",
    ],
    image:
      "https://uploads-ssl.webflow.com/62f3ee8686515cd11e272485/6371e7c460a89c1180c3b841_hulu_anime_mockup3-p-2600.jpg",
  },
];

export const technologies: Technologie[] = [
  {
    title: "React Js",
    image:
      "https://uploads-ssl.webflow.com/62f3ee8686515cd11e272485/62f56f303143f03b76fc7927_reacct%20icon-p-500.png",
  },
  {
    title: "Javascript",
    image:
      "https://uploads-ssl.webflow.com/62f3ee8686515cd11e272485/62f674d5ea0370f1a661981d_js-p-500.png",
  },
  {
    title: "Typescript",
    image:
      "https://uploads-ssl.webflow.com/62f3ee8686515cd11e272485/62f67467bab2af7a8961259a_ts.png",
  },
  {
    title: "Next Js",
    image:
      "https://uploads-ssl.webflow.com/62f3ee8686515cd11e272485/6347ad79ae7a72acdf54b3dd_7c546588-nextjs-p-500.png",
  },
  {
    title: "Jest",
    image:
      "https://uploads-ssl.webflow.com/62f3ee8686515cd11e272485/62f67590270e0cd71611a8a0_jest-p-500.png",
  },
  {
    title: "Material UI",
    image:
      "https://uploads-ssl.webflow.com/62f3ee8686515cd11e272485/62f674a7fd7b99bd122bb8c8_icons8-material-ui-48.png",
  },
  {
    title: "Git",
    image:
      "https://uploads-ssl.webflow.com/62f3ee8686515cd11e272485/631ad8970af8d1e09c09d809_git.png",
  },
  {
    title: "Tailwind",
    image:
      "https://uploads-ssl.webflow.com/62f3ee8686515cd11e272485/633ed8d9760fec7ad0dfde56_Tailwind-p-500.png",
  },
];
