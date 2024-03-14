import verbaltrove from "../../../public/project/verbaltrove.jpg";
import tagselector from "../../../public/project/tag.png";

export const projectsData = [
  {
    title: "VerbalTrove",
    projectlink: "https://verbaltrove.netlify.app/",
    description:
      "I created a full-stack dynamic web app from scratch, featuring a Random Quote Generator. Deployed on Cyclic & Netlify.",
    tags: ["Vue.js", "Nuxt.js", "Nest.js", "PostgreSQL", "Tailwind", "Prisma"],
    imageUrl: verbaltrove,
  },
  {
    title: "TagSelector",
    projectlink: "https://verbaltrove.netlify.app/",
    description:
      "I created a full-stack dynamic web app from scratch, featuring a Random Quote Generator. Deployed on Cyclic & Netlify.",
    tags: ["Vue.js", "Nuxt.js", "Nest.js", "PostgreSQL", "Tailwind", "Prisma"],
    imageUrl: tagselector,
  },
] as const;
