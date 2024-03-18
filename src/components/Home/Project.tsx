"use client";

import React, { useState } from "react";
import SectionHeader from "../Shared/SectionHeader";
import { projectsData } from "@/data/Project/data";
import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { PiBracketsCurly } from "react-icons/pi";

interface ProjectData {
  title: string;
  description: string;
  projectlink?: string;
  tags: readonly string[];
  github?: {
    frontend?: string;
    backend?: string;
  };
}

export default function Project() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  const openPopup = (project: ProjectData) => {
    setSelectedProject(project);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProject(null);
  };

  return (
    <section className="mt-[8rem] lg:w-[55rem] xl:w-[65rem] lg:mx-auto">
      <SectionHeader>My Projects</SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.75rem] mx-[1rem] md:ml-[1.5rem] md:mr-[1.5rem]">
        {projectsData.map((project, index) => (
          <button
            key={index}
            className="relative"
            onClick={() => openPopup(project)}
          >
            <motion.h5
              className="px-[0.5rem] mt-[1rem] text-[1rem] lg:text-[1.7rem] font-semibold text-white"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.175, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {project.title}
            </motion.h5>
          </button>
        ))}
      </div>
      {showPopup && selectedProject && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center">
          <div className="relative bg-[#302F4E] p-8 rounded-md">
            {/* Links */}
            <div className="absolute flex flex-row right-[2.1rem] top-[2.5rem] md:right-[3rem] md:top-[2.5rem] lg:top-[2.7rem]">
              {selectedProject.projectlink && (
                <a
                  href={selectedProject.projectlink}
                  target="_blank"
                  className="mr-[0.7rem]"
                >
                  <button className="flex items-center text-[0.9rem] lg:text-[1.2rem] text-white bg-[#F74C60] rounded-full p-[0.5rem] md:px-[2.1rem] md:py-[0.49rem] lg:px-[2.2rem] lg:py-[0.56rem] hover:text-yellow-500 transition delay-75 duration-200 ease-in-out">
                    <span className="mr-[0.6rem] hidden md:inline">Live</span>
                    <CgWebsite />
                  </button>
                </a>
              )}
              {selectedProject.github?.frontend && (
                <a
                  href={selectedProject.github?.frontend}
                  target="_blank"
                  className="mr-[0.7rem]"
                >
                  <button className="flex items-center text-[0.9rem] lg:text-[1.2rem] text-white bg-[#F74C60] rounded-full p-[0.5rem] md:px-[2.1rem] md:py-[0.49rem] lg:px-[2.2rem] lg:py-[0.56rem] hover:text-yellow-500 transition delay-75 duration-200 ease-in-out">
                    <span className="mr-[0.6rem] hidden md:inline">
                      Frontend
                    </span>
                    <HiOutlineCodeBracket />
                  </button>
                </a>
              )}
              {selectedProject.github?.backend && (
                <a href={selectedProject.github?.backend} target="_blank">
                  <button className="flex items-center text-[0.9rem] lg:text-[1.2rem] text-white bg-[#F74C60] rounded-full p-[0.5rem] md:px-[2.1rem] md:py-[0.49rem] lg:px-[2.2rem] lg:py-[0.56rem] hover:text-yellow-500 transition delay-75 duration-200 ease-in-out">
                    <span className="mr-[0.6rem] hidden md:inline">
                      Backend
                    </span>
                    <PiBracketsCurly />
                  </button>
                </a>
              )}
            </div>
            {/* Title */}
            <h2 className="text-white text-[2rem] lg:text-[2.9rem] font-semibold mb-4">
              {selectedProject.title}
            </h2>
            {/* Description */}
            <p className="text-white text-[0.9rem] lg:text-[1.4rem] font-light lg:w-[55rem]">
              {selectedProject.description}
            </p>
            <div>
              <p className="mt-[1.6rem] text-white text-[1.5rem] lg:text-[2rem] font-semibold">
                Technologies Used
              </p>
              <ul className="mt-[0.8rem]">
                {selectedProject.tags.map((tag, index) => (
                  <li
                    key={index}
                    className="ml-[0.9rem] text-white text-[0.9rem] lg:text-[1.4rem]"
                  >
                    - {tag}
                  </li>
                ))}
              </ul>
            </div>
            {/* Close Button */}
            <button
              className="mt-[1.6rem] text-[0.8rem] lg:text-[1.2rem] text-white bg-[#F74C60] rounded-full px-[2.1rem] py-[0.49rem] lg:px-[2.2rem] lg:py-[0.56rem] hover:text-yellow-500 transition delay-75 duration-200 ease-in-out"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
