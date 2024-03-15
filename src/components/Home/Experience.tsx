"use client";

import { experiencesData } from "@/data/Experience/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <>
      {experiencesData.map((experience, index) => (
        <motion.li
          className="flex mb-[2rem] last:mb-0"
          key={index}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="ml-[1.375rem] mt-[0.7rem]">
            <experience.icon className="text-[#F74C60] text-[1.7rem]" />
          </div>
          <div className="ml-[2.4rem]">
            <p className="text-[#7A779E] mb-[0.9rem] text-[0.81rem] lg:text-[1.1rem]">
              {experience.date}
            </p>
            <h3 className="text-white mr-[2rem] lg:mr-[5.4rem] mb-[0.3rem] text-[1rem] lg:text-[1.456rem] font-bold">
              {experience.title}
            </h3>
            <h4 className="text-[#7A779E] mb-[0.6rem] text-[0.77rem] lg:text-[1rem]">
              {experience.location}
            </h4>
            <p className="text-white mr-[2rem] lg:mr-[5.4rem] text-[0.9rem] lg:text-[1.25rem] font-light lg:font-normal">
              {experience.description}
            </p>
          </div>
        </motion.li>
      ))}
    </>
  );
}
