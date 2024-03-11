import Image from "next/image";
import { TbGridDots } from "react-icons/tb";
import Btn from "../Shared/Btn";

export default function AboutMe() {
  return (
    <section>
      <div className="relative mb-[3.6rem]">
        <TbGridDots className="absolute text-gray-600 text-[3rem] -z-10 -top-2 left-2" />
        <h2 className="text-[2.25rem] text-white font-medium ml-[1.8rem]">
          About Me
        </h2>
      </div>
      {/* Image */}
      <Image
        className="
        rounded-full
        object-cover
        w-[9rem]
        h-[9rem]
        mb-[1.4rem]
        block
        mx-auto
        md:ml-[1.2rem]
      "
        src="/DP.jpg"
        width={200}
        height={200}
        quality={100}
        alt="DP"
      />
      <div className="w-[3rem] h-[3rem] bg-[#302F4E] block mx-auto rotate-45 mt-[2.2rem] -z-10"></div>
      <div className="relative bg-[#302F4E] mx-[1rem] -mt-[2.8rem]">
        <p className="text-white px-[1.6rem] pt-[2rem] text-center z-10 md:text-left">
          Dynamic and motivated Full Stack Web Developer. Passionate about
          crafting visually appealing and intuitive web applications. Committed
          to continuous learning and growth, I thrive in collaborative
          environments and excel in delivering results. Seeking an opportunity
          to apply my skills and contribute to innovative projects as a part of
          a progressive organization. Open to exciting career prospects and
          ready to make a positive impact in the programming field.
        </p>
        <div className="flex justify-center mt-[1.5rem]">
          <Btn goTo="/">Download CV</Btn>
        </div>
      </div>
    </section>
  );
}
