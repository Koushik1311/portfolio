import { ExperienceData } from "@/constants/experience";
import SectionHeader from "../global/SectionHeader";
import Link from "next/link";

export default function Experience() {
  return (
    <div className="mt-10">
      <SectionHeader># Experience</SectionHeader>
      <ul className="flex flex-col">
        {ExperienceData.map((experience, index) => (
          <li
            key={index}
            className="text-xl font-medium flex items-center gap-[14px]"
          >
            <div className="h-[3px] w-[10px] ml-[1px] bg-[#D79921]" />
            <Link
              href={`/experience/${experience.id}`}
              className="hover:bg-[#D79921] hover:text-[#282828] transition-all duration-300"
            >
              {experience.title} at {experience.company}
            </Link>
            {experience.status === "Active" && (
              <span className="bg-secondary rounded-full px-2 text-xs">
                {experience.status}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
