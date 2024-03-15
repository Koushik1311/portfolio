"use client";

import { links } from "@/data/Link/data";
import { useState } from "react";

export default function NavBar() {
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="fixed z-30 xl:ml-[3rem] xl:mt-[1.3rem]">
      <div className="relative flex items-center mt-[0.3rem] ml-[0.7rem]">
        <button className="ml-[0.3rem]" onClick={toggleLinks}>
          <p className="text-white text-[2rem] lg:text-[2.8rem] font-bold">
            K<span className="text-[#F74C60]">.</span>
          </p>
        </button>

        {showLinks && (
          <ul className="absolute flex flex-col top-[5rem] left-[0.25rem]">
            {links.map((link, index) => (
              <li key={index} className="mb-[1.4rem]">
                <button>
                  <link.icon className="text-[#767599] text-[1.5rem] lgtext-[2rem] hover:text-[#D6B159] transition delay-75 duration-500 ease-in-out" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
