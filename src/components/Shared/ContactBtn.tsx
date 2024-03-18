"use client";

import { motion } from "framer-motion";

export default function ContactButton() {
  const scrollToSection = (hash: string) => {
    const section = document.querySelector(hash);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.button
      className="text-[1rem] lg:text-[1.267rem] font-bold text-white bg-[#F74C60] rounded-full px-[2.1rem] py-[0.49rem] lg:px-[2.5rem] lg:py-[0.76rem]"
      onClick={() => scrollToSection("#contact")}
    >
      Contact me
    </motion.button>
  );
}
