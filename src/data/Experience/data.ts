import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesData = [
  {
    title: "Regent Education & Research Foundation",
    location: "India, West Bengal",
    description:
      "I graduated with a BTech Degree in Computer Science & Engineering.",
    icon: LuGraduationCap,
    date: "2019 -2022",
  },
  {
    title: "Full-Stack Web Developer",
    location: "India, Delhi(Remote)",
    description:
      "I completed an internship at Mentorsity from August 2023 to December 2023, where I gained experience in full-stack web development using technologies such as React (Next.js), Node.js, and PostgreSQL. Additionally, I led the Frontend team and was responsible for building the user interface. Not only that, but I also actively participated in both backend and database development. I conducted code reviews for my team and merged it with GitHub. I was also appreciated for my contributions and work ethic.",
    icon: CgWorkAlt,
    date: "2023",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;
