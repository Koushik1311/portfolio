"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypeWriter() {
  return (
    <TypeAnimation
      sequence={["Full-Stack Web Developer", 1000]}
      wrapper="span"
      cursor={true}
      // repeat={Infinity}
      className="text-[1.125rem] text-[#F74C60] mb-[2.3rem]"
    />
  );
}
