import { links } from "@/data/Link/data";
import { IoMenu } from "react-icons/io5";

export default function NavBar() {
  return (
    <div className="absolute lg:fixed z-30 xl:ml-[3rem] xl:mt-[1.3rem]">
      <div className="relative flex items-center mt-[0.3rem] ml-[0.7rem]">
        <button className="mr-[0.6rem]">
          <IoMenu className="text-white text-[2.5rem]" />
        </button>
        <ul className="absolute flex flex-col top-[4.25rem] left-[0.25rem]">
          {links.map((link, index) => (
            <li key={index} className="mb-[1.4rem]">
              <button>
                <link.icon className="text-[#767599] text-[2rem] hover:text-[#D6B159] transition delay-75 duration-500 ease-in-out" />
              </button>
            </li>
          ))}
        </ul>
        <p className="text-white text-[2rem] font-bold">
          K<span className="text-[#F74C60]">.</span>
        </p>
      </div>
    </div>
  );
}
