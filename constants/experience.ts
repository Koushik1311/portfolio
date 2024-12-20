export const ExperienceData = [
  // 3rd
  {
    id: "zidio-web-developer-intern",
    title: "Web Developer Intern",
    company: "Zidio Development",
    location: "Remote",
    status: "Inactive",
    description: [
      "Developed a Certificate Verification System using the MERN stack (MongoDB, Express.js, React, and Node.js) to streamline certificate management and retrieval for students.",
      "Implemented authentication with JWT, including access and refresh tokens. Created middleware for verifying JWT and handling file uploads with Multer.",
      "Built RESTful API endpoints for user registration, login, logout, and token refresh, as well as endpoints for file management (upload, delete) and certificate operations (get, save, update, delete).",
      "Enabled the upload of Excel files to Cloudinary, processed these files to extract student data, and stored the data in MongoDB. Integrated functionality for downloading certificates as PDFs.",
      "Developed an admin portal with functionalities to upload Excel files, manage extracted data, and perform CRUD operations on certificates. Implemented a student portal for certificate retrieval and download.",
      "Used libraries such as `xlsx` for Excel data processing, `pdfkit` for PDF creation, and integrated frontend components for authentication and certificate management.",
      "Ensured data validation and security through validation checks on uploaded files and certificate retrieval processes. Applied middleware to protect private routes and refresh tokens.",
    ],
    techStack: [
      // Front-End
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide Icons",
      "Axios",
      "cookies-next",
      "react-datepicker",
      "react-modal",
      "Sonner",

      // Back-End
      "Node.js",
      "Express.js",
      "bcrypt",
      "jsonwebtoken",
      "cookie-parser",
      "cors",
      "dotenv",
      "mongoose",
      "MongoDB",

      // File Handling & Utilities
      "Cloudinary",
      "multer",
      "pdfkit",
      "xlsx",
    ],
    startingDate: "July 20, 2024",
    endingDate: "October 20, 2024",
  },
  // 2nd
  {
    id: "mentorsity-web-developer-intern2",
    title: "Web Developer Intern",
    company: "Mentorsity",
    location: "Remote",
    status: "Inactive",
    description: [
      "Worked on the official Mentorsity website (mentorsity.com).",
      "Focused on creating and integrating UI components with backend APIs.",
      "Utilized server-side and client-side components.",
      "Created the 'Explore Programs' navigation menu, which filters data based on course names. Clicking on a course displays all related courses, with data fetched from the backend.",
      "Conducted code reviews, merged code on GitHub, and deployed updates on Vercel.",
    ],
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
      "Swiper",
      "React Icons",
      "Axios",
    ],
    startingDate: "March 10, 2024",
    endingDate: "July 10, 2024",
  },
  // 1st
  {
    id: "mentorsity-web-developer-intern",
    title: "Web Developer Intern",
    company: "Mentorsity",
    location: "Remote",
    status: "Inactive",
    description: [
      "Developed React components with SSR, enhancing user experience and performance.",
      "Worked on various project modules.",
      "Created APIs for ongoing projects using Node.js and Express.js.",
    ],
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "React Icons",
      "Axios",
      "Node.js",
      "Express.js",
    ],
    startingDate: "August 27, 2023",
    endingDate: "December 27, 2023",
  },
];
