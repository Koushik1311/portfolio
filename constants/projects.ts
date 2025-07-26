export const ProjectsData = [
  {
    id: "unoriaverse",
    name: "UnoriaVerse – AI-Powered Emotional Companion",
    link: "https://unoriaverse.vercel.app/",
    github: {
      frontend: "https://github.com/Koushik1311/unoria-verse",
      backend: "",
    },
    tags: ["Published", "AI", "Indie Project"],
    description:
      "UnoriaVerse is a quote-based emotional support app powered by AI. It uses real-time mood detection and contextual emotional feedback to provide comforting, inspiring, or thoughtful messages tailored to your current state.",
    why: "The goal was to explore how AI can provide gentle, human-like emotional support in a lightweight and accessible way — especially for indie creators and individuals going through tough days.",
    cando: [
      "Detect user mood via prompt",
      "Generate AI-personalized emotional support messages",
      "Display quote & image-based reflections for calm and clarity",
      "Mobile-friendly, fast-loading with serverless infra",
    ],
    solves:
      "UnoriaVerse helps users cope with low mood or emotional stress by providing personalized emotional content through a simple, intuitive interface. It uses AI to offer real-time responses tailored to the user’s tone, enabling a more personal connection.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Cloudflare Workers",
      "Workers AI",
      "Hono",
      "Prisma",
      "Neon (PostgreSQL)",
      "Lemon Squeezy",
    ],
  },
  {
    id: "diarist",
    name: "Diarist - Your Personal Digital Diary",
    link: "https://diarist.vercel.app/",
    github: {
      frontend: "https://github.com/Koushik1311/Diarist",
      backend: "",
    },
    tags: ["Published", "Product Hunt Day rank: #8"],
    description:
      "Diarist is a digital diary for capturing thoughts, tracking moods, and setting future goals. With daily journaling, a Time Capsule feature, Diarist helps you reflect, grow, and keep memories safe—all in one place.",
    specialNote:
      "The original domain (diarist.life) has expired and is currently not in use. Since this is a side project and the Vercel-hosted version is live, I chose not to renew the domain at this time to keep costs lean.",

    why: "I built Diarist because I believe many of us struggle with late-night thoughts—whether it's overthinking, self-doubt, or stress. When I started reflecting on my day before bed, it helped me realize my progress and gave me peace of mind. I wanted to create something that helps others do the same.",
    cando: [
      "Journal your daily thoughts and actions",
      "Set meaningful goals and milestones",
      "Create a time capsule for your future self",
      "Reflect on your journey to gain clarity",
    ],
    solves:
      "Diarist addresses the challenge of managing and reflecting on personal thoughts and emotions by providing a structured space for journaling. It helps users reduce stress and overthinking, improve mental clarity, and track their personal growth over time. By offering features like mood tracking and goal setting, Diarist supports mental well-being and fosters self-improvement.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "Redux",
      "Framer Motion",
      "Lucide Icons",
      "Axios",
      "lodash",
      "next-client-cookies",
      "react-day-picker",
      "react-time-picker",
      "react-icons",
      "Resend",
      "Sonner",
    ],
  },
];
