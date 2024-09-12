import { ProjectsData } from "@/constants/projects";
import SectionHeader from "../global/SectionHeader";
import Dash from "../global/Dash";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="mt-12">
      <SectionHeader># Projects</SectionHeader>
      <ul className="flex flex-col">
        {ProjectsData.map((project, index) => (
          <li
            key={index}
            className="text-xl font-medium flex items-center gap-[14px]"
          >
            <Dash />
            <Link
              href={`/project/${project.id}`}
              className="hover:bg-[#D79921] hover:text-[#282828] transition-all duration-300"
            >
              <>{project.name}</>
            </Link>
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-secondary rounded-full px-2 text-xs"
              >
                {tag}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
