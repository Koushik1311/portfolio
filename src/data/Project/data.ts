import verbaltrove from "../../../public/project/verbaltrove.jpg";
import tagselector from "../../../public/project/tag.png";

export const projectsData = [
  {
    title: "VerbalTrove",
    projectlink: "https://verbaltrove.netlify.app/",
    description:
      "I created a full-stack dynamic web app from scratch, featuring a Random Quote Generator. Deployed on Cyclic & Netlify.",
    tags: [
      "Vue.js",
      "Nuxt.js",
      "Nest.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Prisma ORM",
    ],
    imageUrl: verbaltrove,
    github: {
      frontend: "https://github.com/Koushik1311/VerbalTroveFrontend",
      backend: "https://github.com/Koushik1311/VerbalTroveAPI",
    },
  },
  {
    title: "TagSelector",
    description:
      "An interactive Tag Selector using Next.js. A dynamic tag selection feature.",
    tags: ["Next.js", "Tailwind CSS", "react-hot-toast", "react-icons"],
    imageUrl: tagselector,
    github: {
      frontend:
        "https://github.com/Koushik1311/multi-project-collection/tree/master/tag-selector",
    },
  },
] as const;
