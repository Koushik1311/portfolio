"use client";

import React, { useState } from "react";
import { links } from "@/data/Link/data";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const scrollToSection = (hash: string) => {
    const section = document.querySelector(hash);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setShowLinks(false);
  };

  return (
    <div className="fixed z-30 xl:ml-[3rem] xl:mt-[1.3rem]">
      <div className="relative flex items-center mt-[0.3rem] ml-[0.7rem]">
        <button className="ml-[0.4rem]" onClick={toggleLinks}>
          <p className="text-white text-[2rem] lg:text-[2.8rem] font-bold">
            K<span className="text-[#F74C60]">.</span>
          </p>
        </button>

        <AnimatePresence>
          {showLinks && (
            <ul className="absolute flex flex-col top-[5rem] left-[0.25rem]">
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  className="mb-[1.4rem]"
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                >
                  <button onClick={() => scrollToSection(link.hash)}>
                    <link.icon className="text-[#767599] text-[1.5rem] lg:text-[2rem] hover:text-[#D6B159] transition delay-75 duration-500 ease-in-out" />
                  </button>
                </motion.li>
              ))}
            </ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
