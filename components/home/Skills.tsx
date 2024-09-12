import { SkillsData } from "@/constants/skills";
import SectionHeader from "../global/SectionHeader";
import { Web3SkillsData } from "@/constants/web3";

export default function Skills() {
  return (
    <div className="mt-10">
      <SectionHeader># Skills</SectionHeader>
      <ul className="mt-3 ml-6 grid grid-cols-4 gap-2">
        {SkillsData.map((skill, index) => (
          <li
            key={index}
            className="text-xl font-medium flex items-center gap-4"
          >
            <>
              <skill.icon />
            </>
            {skill.skill}
          </li>
        ))}
      </ul>
      <ul className="mt-6 ml-6 grid grid-cols-4 gap-2">
        {Web3SkillsData.map((skill, index) => (
          <li
            key={index}
            className="text-xl font-medium flex items-center gap-4"
          >
            <>
              <skill.icon />
            </>
            {skill.skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
