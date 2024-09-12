import { SocialLinks } from "@/constants/social-links";
import Image from "next/image";
import Link from "next/link";

export default function SocialAccounts() {
  return (
    <div className="flex items-center justify-center gap-6 mt-8">
      {/* 
    <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/tweet" title="tweet icons">Tweet icons created by Freepik - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a>
    */}
      {SocialLinks.map((socialLink, index) => (
        <Link key={index} href={socialLink.link} target="_blank">
          <Image
            src={socialLink.socialIcon}
            width={50}
            height={50}
            priority={true}
            quality={100}
            alt={socialLink.name}
            className="h-6 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </Link>
      ))}
    </div>
  );
}
