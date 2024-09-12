import Dash from "@/components/global/Dash";
import { ProjectsData } from "@/constants/projects";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { GoStack } from "react-icons/go";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function ProjectPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const findProjectById = (id: string) => {
    return ProjectsData.find((project) => project.id === id);
  };

  const project = findProjectById(id);

  if (!project) {
    return redirect("/");
  }

  return (
    <div className="container">
      <div className="flex items-center gap-4 mt-8">
        <Link href="/" className="">
          <IoIosArrowRoundBack className="w-10 h-auto -ml-2 text-[#D79921]" />
        </Link>
        <h1 className="text-2xl font-extrabold">{project.name}</h1>
      </div>

      {/* Content */}
      <div className="mt-6">
        <div className="flex items-center gap-6 text-secondary">
          <Link target="_blank" href={project.link} className="hover:underline">
            Live
          </Link>
          {project.github.frontend && project.github.frontend !== "" && (
            <Link
              target="_blank"
              href={project.github.frontend}
              className="flex items-center gap-2 hover:underline"
            >
              <FaGithub />
              <>Frontend</>
            </Link>
          )}
          {project.github.backend && project.github.backend !== "" && (
            <Link
              target="_blank"
              href={project.github.backend}
              className="flex items-center gap-2 hover:underline"
            >
              <FaGithub />
              <>Backend</>
            </Link>
          )}
        </div>
        <div className="">
          {/* <SectionHeader>## Description</SectionHeader> */}
          <p className="list-none mt-2">{project.description}</p>

          {/* Why */}
          <h2 className="text-xl font-extrabold mt-6">
            <span className="text-[#D79921]">## </span>
            Why I build it?
          </h2>
          <p>{project.why}</p>
          <h3 className="text-xl font-extrabold mt-6">
            <span className="text-[#D79921]">## </span>
            What can you do?
          </h3>
          <ul>
            {project.cando.map((can, index) => (
              <li key={index} className="flex items-center ml-2 gap-[10px]">
                <Dash />
                {can}
              </li>
            ))}
          </ul>
          <h4 className="text-xl font-extrabold mt-6">
            <span className="text-[#D79921]">## </span>
            Solves
          </h4>
          <p>{project.solves}</p>
        </div>
        <div className="mt-6">
          <h5 className="text-2xl font-extrabold">
            <span className="text-[#D79921]">## </span>
            Tech Stack
          </h5>
          <ul className="list-none pl-5 mt-2 grid grid-cols-5">
            {project.techStack.map((tech, index) => (
              <li
                key={index}
                className="mb-2 flex items-center justify-start gap-1"
              >
                <GoStack className="text-[#D79921]" />
                <>{tech}</>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
