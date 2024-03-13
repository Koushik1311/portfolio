import React from "react";
import SectionHeader from "../Shared/SectionHeader";
import { experiencesData } from "@/data/Experience/data";

export default function Experience() {
  return (
    <section className="mt-[8rem]">
      <SectionHeader>Experience</SectionHeader>
      <div className="rounded-3xl bg-[#302F4E] mx-[1rem] -mt-[2.8rem] md:mt-[0.1rem] md:ml-[1.5rem] md:mr-[1.5rem]">
        <div>
          {/* Line & Icons */}

          {/* Data */}
          <ul className="grid grid-cols">
            {experiencesData.map((experience, index) => (
              <li key={index}>
                <p className="text-[#7A779E]">{experience.date}</p>
                <h3 className="text-white">{experience.title}</h3>
                <h4 className="text-[#7A779E]">{experience.location}</h4>
                <p className="text-white">{experience.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
