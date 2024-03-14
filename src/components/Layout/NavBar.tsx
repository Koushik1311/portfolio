import { IoMenu } from "react-icons/io5";

export default function NavBar() {
  return (
    <div className="absolute lg:fixed z-30">
      <div className="flex items-center mt-[0.3rem] ml-[0.7rem]">
        <button className="mr-[0.6rem]">
          <IoMenu className="text-white text-[2.5rem]" />
        </button>
        <p className="text-white text-[2rem] font-bold">
          K<span className="text-[#F74C60]">.</span>
        </p>
      </div>
    </div>
  );
}
