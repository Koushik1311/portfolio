"use client";

import React, { useState } from "react";
import SectionHeader from "../Shared/SectionHeader";
import { projectsData } from "@/data/Project/data";
import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

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
    <section className="mt-[8rem] lg:w-[55rem] xl:w-[65rem] lg:mx-auto mb-[8rem]">
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
            <div className="absolute right-[3rem] flex flex-row">
              {selectedProject.projectlink && (
                <a
                  href={selectedProject.projectlink}
                  target="_blank"
                  className="mr-[0.7rem]"
                >
                  <button className="flex items-center text-[1.2rem] lg:text-[1.2rem] text-white bg-[#F74C60] rounded-full px-[2.1rem] py-[0.49rem] lg:px-[2.2rem] lg:py-[0.56rem]">
                    <span className="mr-[0.6rem]">Live</span>
                    <CgWebsite />
                  </button>
                </a>
              )}
              {selectedProject.github?.frontend && (
                <a
                  href={selectedProject.github?.frontend}
                  className="mr-[0.7rem]"
                >
                  <button className="flex items-center text-[1.2rem] lg:text-[1.2rem] text-white bg-[#F74C60] rounded-full px-[2.1rem] py-[0.49rem] lg:px-[2.2rem] lg:py-[0.56rem]">
                    <span className="mr-[0.6rem]">Frontend</span>
                    <FaGithub />
                  </button>
                </a>
              )}
              {selectedProject.github?.backend && (
                <a href={selectedProject.github?.backend}>
                  <button className="flex items-center text-[1.2rem] lg:text-[1.2rem] text-white bg-[#F74C60] rounded-full px-[2.1rem] py-[0.49rem] lg:px-[2.2rem] lg:py-[0.56rem]">
                    <span className="mr-[0.6rem]">Backend</span>
                    <FaGithub />
                  </button>
                </a>
              )}
            </div>
            {/* Title */}
            <h2 className="text-white lg:text-[2.9rem] font-semibold mb-4">
              {selectedProject.title}
            </h2>
            {/* Description */}
            <p className="text-white lg:text-[1.4rem] font-light lg:w-[55rem]">
              {selectedProject.description}
            </p>
            {/* Close Button */}
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
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
