"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypeWriter() {
  return (
    <TypeAnimation
      sequence={["Full-Stack Web Developer", 1000]}
      wrapper="span"
      cursor={true}
      // repeat={Infinity}
      className="text-[1.08rem] lg:text-[1.4rem] font-normal text-white"
    />
  );
}
