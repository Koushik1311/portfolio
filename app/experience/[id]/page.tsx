import Dash from "@/components/global/Dash";
import { ExperienceData } from "@/constants/experience";
import Link from "next/link";
import { redirect } from "next/navigation";
import { GoStack } from "react-icons/go";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function ExperiencePage({
  params: { id },
}: {
  params: { id: string };
}) {
  // Function to find experience by id
  const findExperienceById = (id: string) => {
    return ExperienceData.find((experience) => experience.id === id);
  };

  // Get the experience based on the ID from the URL params
  const experience = findExperienceById(id);

  // Handle case when the experience is not found
  if (!experience) {
    return redirect("/");
  }

  return (
    <div className="container">
      <div className="flex items-center gap-4 mt-8">
        <Link href="/" className="">
          <IoIosArrowRoundBack className="w-10 h-auto -ml-2 text-[#D79921]" />
        </Link>
        <h1 className="text-2xl font-extrabold">{experience.title}</h1>
      </div>

      {/* Content */}
      <div className="mt-6">
        <h2 className="text-2xl font-extrabold">
          <span className="text-[#D79921]">## </span>
          {experience.company}
        </h2>
        <p className="text-secondary font-bold">
          {experience.location} | {experience.startingDate} -{" "}
          {experience.endingDate}
        </p>
        <div className="mt-4">
          {/* <SectionHeader>## Description</SectionHeader> */}
          <ul className="list-none pl-5 mt-2">
            {experience.description.map((desc, index) => (
              <li
                key={index}
                className="mb-2 flex items-start justify-start gap-4"
              >
                <span className="mt-3">
                  <Dash />
                </span>
                <>{desc}</>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-2xl font-extrabold">
            <span className="text-[#D79921]">## </span>
            Tech Stack
          </h3>
          <ul className="list-none pl-5 mt-2 grid grid-cols-5">
            {experience.techStack.map((tech, index) => (
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
