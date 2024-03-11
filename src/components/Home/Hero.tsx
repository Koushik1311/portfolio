import Image from "next/image";
import React from "react";
import Btn from "../Shared/Btn";
import { socialLinks } from "@/data/Social/data";
import TypeWriter from "./TypeWriter";

export default function Hero() {
  return (
    <section className="mb-[8rem]">
      {/* <h1 className="lg:hidden">Koushik</h1> */}

      {/* Intro */}
      <div className="flex flex-col items-center justify-center h-screen">
        {/* Image */}
        <Image
          className="
        rounded-full
        object-cover
        w-[7.188rem]
        h-[7.188rem]
        mb-[1.4rem]
      "
          src="/DP.jpg"
          width={200}
          height={200}
          quality={100}
          alt="DP"
        />

        {/* Name */}
        <h1 className="text-[2.25rem] font-bold text-white mb-[0.4rem]">
          Koushik Roy
        </h1>

        {/* TypeWriter */}
        <div className="flex gap-1">
          <p className="text-[1.125rem] text-white mb-[2.3rem]">I&apos;m a</p>
          <TypeWriter />
        </div>

        {/* Social Icons */}
        <div className="mb-[2rem] flex gap-5">
          {socialLinks.map((link, index) => (
            <a href={link.link} target="_blank" key={index}>
              <link.icon className="text-[1.313rem] text-white hover:text-yellow-500 transition delay-150 duration-300 ease-in-out" />
            </a>
          ))}
        </div>

        {/* Button */}
        <Btn goTo="#">Hire me</Btn>
      </div>

      {/* TODO: Use Fremare Motion to create a bounce animation */}
      <p className="text-center text-white text-[0.9rem] -mt-[3rem] mb-[0.8rem]">
        Scroll Down
      </p>
      <div className="mx-auto h-7 w-5 border-2 border-white rounded-full mb-[4rem] flex items-center justify-center">
        <div className="animate-bounce h-1 w-1 rounded-full bg-white"></div>
      </div>
    </section>
  );
}
