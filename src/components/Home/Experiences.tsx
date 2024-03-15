import React from "react";
import SectionHeader from "../Shared/SectionHeader";
import Experience from "./Experience";

export default function Experiences() {
  return (
    <section className="mt-[8rem] lg:w-[55rem] xl:w-[65rem] lg:mx-auto">
      <SectionHeader>Experience</SectionHeader>
      <div className="relative rounded-3xl bg-[#302F4E] mx-[1rem] md:ml-[1.5rem] md:mr-[1.5rem]">
        <div>
          {/* Line */}
          <div className="absolute border-l-[0.063rem] border-[#F74C60] left-[2.2rem] top-[1.875rem] bottom-[1.875rem]"></div>

          {/* Data */}
          <ul className="grid grid-cols py-[2.2rem]">
            <Experience />
          </ul>
        </div>
      </div>
    </section>
  );
}
