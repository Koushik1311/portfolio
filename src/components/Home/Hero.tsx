import Image from "next/image";
import React from "react";
import { socialLinks } from "@/data/Social/data";
import TypeWriter from "./TypeWriter";
import ContactButton from "../Shared/ContactBtn";

export default function Hero() {
  return (
    <section id="home">
      {/* Intro */}
      <div className="flex flex-col items-center justify-center h-screen">
        {/* Image */}
        <Image
          className="
        rounded-full
        object-cover
        w-[7.188rem]
        h-[7.188rem]
        lg:w-[8.2rem]
        lg:h-[8.2rem]
        mb-[1.4rem]
      "
          src="/DP.jpg"
          width={200}
          height={200}
          quality={100}
          alt="DP"
        />

        {/* Name */}
        <p className="text-white text-[1.08rem] lg:text-[1.4rem] font-normal">
          Hi, I&apos;m
        </p>
        <h1 className="text-[2.2rem] lg:text-[2.8rem] font-bold text-white mb-[0.4rem]">
          Koushik Roy
        </h1>

        {/* TypeWriter */}
        <div className="flex items-center justify-center mb-[2.3rem]">
          <span className="text-white text-[1.3rem] lg:text-[1.5rem]">
            {"<"}
          </span>
          <div>
            <TypeWriter />
          </div>
          <span className="text-white text-[1.3rem] lg:text-[1.5rem]">
            {" "}
            {"/>"}
          </span>
        </div>

        {/* Social Icons */}
        <div className="mb-[2.9rem] flex gap-[1.5rem]">
          {socialLinks.map((link, index) => (
            <a href={link.link} target="_blank" key={index}>
              <link.icon className="text-[1.2rem] lg:text-[1.7rem] text-white hover:text-yellow-500 transition delay-75 duration-200 ease-in-out" />
            </a>
          ))}
        </div>

        {/* Button */}
        <ContactButton />
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
