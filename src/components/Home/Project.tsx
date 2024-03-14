import React from "react";
import SectionHeader from "../Shared/SectionHeader";
import { projectsData } from "@/data/Project/data";
import Image from "next/image";

export default function Project() {
  return (
    <section className="mt-[8rem] lg:w-[55rem] xl:w-[65rem] lg:mx-auto mb-[8rem]">
      <SectionHeader>My Projects</SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.75rem] mx-[1rem] md:ml-[1.5rem] md:mr-[1.5rem]">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-[#302F4E] rounded-md">
            <Image
              src={project.imageUrl}
              width={400}
              height={400}
              alt="project_image"
              quality={100}
              className="pt-[0.5rem] px-[0.5rem]"
            />
            <h5 className="px-[0.5rem] mt-[1rem] text-[1.5rem] text-white">
              {project.title}
            </h5>
            {/* Tags */}
            <div className="mt-[0.5rem] px-[0.5rem] pb-[0.5rem] pl-[1.1rem] rounded-b-md">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-[#F74C60]  rounded-full py-1 px-2 mr-2 mb-2 text-white text-[0.9rem] inline-block"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
