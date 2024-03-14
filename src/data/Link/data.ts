import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi2";
import { PiBracketsCurlyLight } from "react-icons/pi";
import { MdOutlineWork } from "react-icons/md";
import { ImStack } from "react-icons/im";
import { IoChatbubblesOutline } from "react-icons/io5";

export const links = [
  {
    icon: AiOutlineHome,
    hash: "#home",
  },
  {
    icon: HiOutlineUser,
    hash: "#about",
  },
  {
    icon: PiBracketsCurlyLight,
    hash: "#skills",
  },
  {
    icon: MdOutlineWork,
    hash: "#experience",
  },
  {
    icon: ImStack,
    hash: "#projects",
  },
  {
    icon: IoChatbubblesOutline,
    hash: "#contact",
  },
] as const;
