"use client";

import { motion } from "framer-motion";
import { TbGridDots } from "react-icons/tb";

type SectionHeaderProps = {
  children: React.ReactNode;
};

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <motion.div
      className="relative mb-[3.6rem]"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <TbGridDots className="absolute text-gray-600 text-[3rem] -z-10 -top-2 left-2" />
      <h2 className="text-[2.07rem] lg:text-[2.813rem] text-white font-medium ml-[1.8rem]">
        {children}
      </h2>
    </motion.div>
  );
}
