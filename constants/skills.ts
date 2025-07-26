import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiAxios,
  SiClerk,
  SiCloudflare,
  SiCloudinary,
  SiExpress,
  SiFramer,
  SiGit,
  SiHono,
  SiMongodb,
  SiNestjs,
  SiPrisma,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiVercel,
} from "react-icons/si";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";

export const SkillsData = [
  // 🔹 Core Frontend & Language
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: BiLogoTypescript },
  { skill: "React", icon: SiReact },
  { skill: "Next.js", icon: RiNextjsFill },
  { skill: "Tailwind CSS", icon: RiTailwindCssFill },

  // 🔹 Backend & Database
  { skill: "Node.js", icon: IoLogoNodejs },
  { skill: "Express.js", icon: SiExpress },
  { skill: "Nest.js", icon: SiNestjs },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "PostgreSQL", icon: BiLogoPostgresql },
  { skill: "Prisma ORM", icon: SiPrisma },
  { skill: "Supabase", icon: RiSupabaseFill },

  // 🔹 DevTools / Infra / Auth
  { skill: "Axios", icon: SiAxios },
  { skill: "Clerk", icon: SiClerk },
  { skill: "Cloudflare Workers", icon: SiCloudflare },
  { skill: "Git", icon: SiGit },
  { skill: "Hono", icon: SiHono },
  { skill: "Vercel", icon: SiVercel },

  // 🔹 Media, AI, Notifications
  { skill: "AI", icon: LuBrainCircuit },
  { skill: "Cloudinary", icon: SiCloudinary },
  { skill: "react-hot-toast", icon: IoIosNotificationsOutline },
  { skill: "Sonner", icon: IoIosNotificationsOutline },

  // 🔹 UI Libraries & Motion
  { skill: "Framer Motion", icon: SiFramer },
  { skill: "Redux", icon: SiRedux },
  { skill: "shadcn/ui", icon: SiShadcnui },
];
