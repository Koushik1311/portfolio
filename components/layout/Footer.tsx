import { SocialLinks } from "@/constants/social-links";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="flex items-center justify-center gap-4">
        <Link href="/" className="hover:bg-primary transition-all duration-300">
          Home
        </Link>
        <span className="font-semibold">|</span>
        <Link
          href="/contact"
          className="hover:bg-primary transition-all duration-300"
        >
          Contact Me
        </Link>
        <span className="font-semibold">|</span>
        <Link
          target="_blank"
          href="https://github.com/Koushik1311"
          className="hover:bg-primary transition-all duration-300"
        >
          GitHub
        </Link>
        <span className="font-semibold">|</span>
        <Link
          target="_blank"
          href="https://x.com/KoushikRoy75724"
          className="hover:bg-primary transition-all duration-300"
        >
          X
        </Link>
        <span className="font-semibold">|</span>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/koushik-roy-886804280/"
          className="hover:bg-primary transition-all duration-300"
        >
          LinkedIn
        </Link>
      </div>
      <p className="text-center pb-8 mt-8">
        <span className="text-sm">
          This website is built with Next.js, TypeScript, Tailwind CSS, Resend,
          & hosted on Vercel.
        </span>
      </p>
    </footer>
  );
}
