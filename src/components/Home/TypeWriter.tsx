"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypeWriter() {
  return (
    <TypeAnimation
      sequence={["Web Developer", 1000, "Photographer", 2000]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className="text-[1.125rem] text-white mb-[2.3rem]"
    />
  );
}
