import React from "react";
import SectionHeader from "../Shared/SectionHeader";
import { experiencesData } from "@/data/Experience/data";

export default function Experience() {
  return (
    <section className="mt-[8rem] lg:w-[55rem] lg:mx-auto">
      <SectionHeader>Experience</SectionHeader>
      <div className="relative rounded-3xl bg-[#302F4E] mx-[1rem] md:ml-[1.5rem] md:mr-[1.5rem]">
        <div>
          {/* Line */}
          <div className="absolute border-l-[0.063rem] border-[#F74C60] left-[2.2rem] top-[1.875rem] bottom-[1.875rem]"></div>

          {/* Data */}
          <ul className="grid grid-cols py-[2.2rem]">
            {experiencesData.map((experience, index) => (
              <li className="flex mb-[2rem] last:mb-0" key={index}>
                <div className="ml-[1.375rem] mt-[0.7rem]">
                  <experience.icon className="text-[#F74C60] text-[1.7rem]" />
                </div>
                <div className="ml-[2.4rem]">
                  <p className="text-[#7A779E]">{experience.date}</p>
                  <h3 className="text-white">{experience.title}</h3>
                  <h4 className="text-[#7A779E]">{experience.location}</h4>
                  <p className="text-white pr-[1.3rem]">
                    {experience.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
